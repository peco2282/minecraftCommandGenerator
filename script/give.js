function _all(
    _player,
    _item,
    _lore,
    _name,
    _isUnbreak,
    _iscost,
    _cost,
    _check,
    _option,
    _hand,
    _textarea
) {
  const player = document.getElementById(_player);
  const item = document.getElementById(_item)
  const lore = document.getElementById(_lore)
  const name = document.getElementById(_name)
  const isUnbreak = document.getElementById(_isUnbreak)
  const iscost = document.getElementById(_iscost)
  const cost = document.getElementById(_cost)
  const check = document.getElementsByName(_check)
  const option = document.getElementsByName(_option)
  const hand = document.getElementsByName(_hand)
  const textarea = document.getElementById(_textarea)


  const loreFlag = lore.value !== "";

  const nameFlag = name.value !== "";

  const isUnbreakFlag = isUnbreak.checked

  const iscostFlag = iscost.checked

  let optioncheckFlag = false;
  check.forEach(
      function (value) {
        if (value.checked) optioncheckFlag = true
      }
  )

  let command = `/give ${player.value} ${item.value}`

  let displaydict = {}
  let paramdict = {}

  if (nameFlag || loreFlag) {
    if (nameFlag) displaydict.Name = name.value
    if (loreFlag) displaydict.Lore = lore.value.split("\n")
    paramdict.display = displaydict
  }

  if (isUnbreakFlag) paramdict.Unbreakable = 1
  if (iscostFlag && parseInt(cost.value)) paramdict.RepairCost = parseInt(cost.value)

  if (optioncheckFlag) {
    let options = []

    const date = new Date().getTime();

    check.forEach(
        function (value, key, parent) {
          if (value.checked) {
            let optiondict = {}
            optiondict.Name = name.value
            optiondict.UUIDLeast = date
            optiondict.UUIDMost = date
            optiondict.Operation = 0
            optiondict.AttributeName = value.value
            optiondict.Amount = parseInt(option[key].value)
            optiondict.Slot = hand[key].value
            options.push(optiondict)
          }
        }
    )
    paramdict.AttributeModifiers = options
  }
  if (nameFlag || loreFlag || optioncheckFlag || iscostFlag || isUnbreakFlag) command += ' 1 0 ' + JSON.stringify(paramdict)
  console.log(command)
  textarea.value = command
}