function summon() {
  const form = document.getElementsByTagName("form")[0];
  const already = form.already_input.value

  let posstr = ""
  form.isRelative.forEach(
      function (value, key) {
        if (value.checked) posstr += ` ${form.pos[key].value}`
        else posstr += ` ~${form.pos[key].value}`
      }
  )

  let command = `/summon ${entity.value}${posstr} `
  let paramdict = {}
  // let attrdict = {}

  const nameFlag = form._name.value !== ""
  const alwaysNameFlag = form.alwaysName.checked
  const isInvincibleFlag = form.isInvincible.checked
  const isNoDesponeFlag = form.isNoDespone.checked
  const isPickupFlag = form.isPickup.checked
  const isNoSoundFlag = form.isNoSound.checked
  const isNoAIFlag = form.isNoAI.checked
  const isLightFlag = form.isLight.checked
  const isNoGravityFlag = form.isNoGravity.checked
  const isLeftHand = form.isLeftHand.checked
  const isWithPropellerFlag = form.isWithPropeller.checked

  let alreadyFlag = false
  let alreadylist = []
  let alreadydict = {}

  const flag = nameFlag
      || alwaysNameFlag
      || isNoDesponeFlag
      || isPickupFlag
      || isNoSoundFlag
      || isNoAIFlag
      || isLightFlag
      || isNoGravityFlag
      || isLeftHand
      || isWithPropellerFlag

  if (nameFlag) paramdict.CustomName = form._name.value
  if (alwaysNameFlag) paramdict.CustomNameVisible = 1
  if (isInvincibleFlag) paramdict.Invulnerable = 1
  if (isNoDesponeFlag) paramdict.PersistenceRequired = 1
  if (isPickupFlag) paramdict.CanPickUpLoot = 1
  if (isNoSoundFlag) paramdict.Silent = 1
  if (isNoAIFlag) paramdict.NoAI = 1
  if (isLeftHand) paramdict.LeftHanded = 1
  if (isWithPropellerFlag) paramdict.FallFlying = 1
  if (isLightFlag) paramdict.Glowing = 1
  if (isNoGravityFlag) paramdict.NoGravity = 1

  let _id = ""
  if (already.toString() !== "") {
    already.toString().split(/\/summon /g).forEach(
        function (value, index, array) {
          if (!value) return
          alreadyFlag = true
          let _list = value.split(" ")
          _id = _list[0]
          alreadydict = JSON.parse(_list[4])
          alreadydict.id = _id

          alreadylist.push(alreadydict)
        }
    )
  }

  const attrs = form.attr
  const check = form.check
  let attrdict = {}
  let attrlist = []
  let attrFlag = false
  check.forEach(
      function (v, k) {

        if (v.checked) {
          attrdict = {}
          attrdict.Name = v.value
          attrdict.Base = parseFloat(attrs[k].value)
          attrlist.push(attrdict)
          attrFlag = true
        }
      }
  )

  if (flag || attrFlag || alreadyFlag) {
    paramdict.Attributes = attrlist
    if (alreadyFlag) paramdict.Passengers = alreadylist
    command += JSON.stringify(paramdict)
  }
  console.log(command)
  form.textarea.value = command
}


// TODO /summon creeper ~0 ~0 ~0 {
//  "CustomNameVisible":1b,
//  "Invulnerable":1b,
//  "PersistenceRequired":1b,
//  "CanPickUpLoot":1b,
//  "Silent":1b,
//  "NoAI":1b,
//  "LeftHanded":1b,
//  "FallFlying":1b,
//  "Glowing":1b,
//  "NoGravity":1b,
//  "Health":20f,
//  "Attributes":[
//  {
//  "Name":"generic.maxHealth",
//  "Base":20d
//  },{
//  "Name":"generic.movementSpeed",
//  "Base":0.7d
//  },{
//  "Name":"generic.attackDamage",
//  "Base":2d
//  },{
//  "Name":"generic.knockbackResistance",
//  "Base":0d
//  },{
//  "Name":"generic.followRange",
//  "Base":32d
//  },{
//  "Name":"zombie.spawnReinforcements",
//  "Base":0d
//  },{
//  "Name":"horse.jumpStrength",
//  "Base":0.7d
//  }
//  ],
//  "Passengers":[
//  {
//  "id":"cave_spider",
//  "CustomNameVisible":1b,
//  "PersistenceRequired":1b,
//  "Silent":1b,
//  "Health":50f,
//  "Attributes":[
//  {
//  "Name":"generic.maxHealth",
//  "Base":50d
//  },{
//  "Name":"generic.attackDamage",
//  "Base":2d
//  }
//  ]
//  }
//  ]
//  }

// TODO /summon creeper ~0 ~0 ~0 {
//  "CustomNameVisible":1b,
//  "Invulnerable":1b,
//  "PersistenceRequired":1b,
//  "CanPickUpLoot":1b,
//  "Silent":1b,
//  "NoAI":1b,
//  "LeftHanded":1b,
//  "FallFlying":1b,
//  "Glowing":1b,
//  "NoGravity":1b,
//  "Health":20f,
//  "Attributes":[
//  {
//  "Name":"generic.maxHealth",
//  "Base":20d
//  },{
//  "Name":"generic.movementSpeed",
//  "Base":0.7d
//  },{
//  "Name":"generic.attackDamage",
//  "Base":2d
//  },{
//  "Name":"generic.knockbackResistance",
//  "Base":0d
//  },{
//  "Name":"generic.followRange",
//  "Base":32d
//  },{
//  "Name":"zombie.spawnReinforcements",
//  "Base":0d
//  },{
//  "Name":"horse.jumpStrength",
//  "Base":0.7d
//  }
//  ]
//  }

// TODO /summon parrot ~0 ~0 ~0 {
//  "CustomName":"AA",
//  "Health":20f,
//  "Attributes":[
//  {
//  "Name":"generic.maxHealth",
//  "Base":20d
//  },{
//  "Name":"generic.movementSpeed",
//  "Base":0.7d
//  },{
//  "Name":"generic.attackDamage",
//  "Base":2d
//  },{
//  "Name":"generic.knockbackResistance",
//  "Base":0d
//  },{
//  "Name":"generic.followRange",
//  "Base":32d
//  },{
//  "Name":"zombie.spawnReinforcements",
//  "Base":0d
//  }]}


// TODO /summon tnt_minecart ~0 ~0 ~0 {
//  "CustomNameVisible":1b,
//  "Invulnerable":1b,
//  "PersistenceRequired":1b,
//  "Silent":1b,
//  "LeftHanded":1b,
//  "Glowing":1b,
//  "NoGravity":1b
//  }

// TODO /summon tnt_minecart ~0 ~0 ~0 {"CustomName":"aaa","CustomNameVisible":1b}
// TODO /summon zombie ~0 ~0 ~0 {
//  "CustomName":"asa",
//  "CustomNameVisible":1b,
//  "Invulnerable":1b,
//  "PersistenceRequired":1b,
//  "CanPickUpLoot":1b,
//  "Silent":1b,
//  "NoAI":1b,
//  "LeftHanded":1b,
//  "FallFlying":1b,
//  "Glowing":1b,
//  "NoGravity":1b
//  }
