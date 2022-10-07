// function enchantCommandGenerate(
//     _player,
//     _item,
//     _name,
//     _description,
//     _is_colored,
//     _color,
//     _unbreakable,
//     _num,
//     _damage
// ) {
//   // input1_1 / input1_2 /
//   const player = document.getElementById(_player)
//   const item = document.getElementById(_item)
//   const name = document.getElementById(_name)
//   const description = document.getElementById(_description)
//   const color = document.getElementById(_color)
//   const isColor = document.getElementById(_is_colored)
//   const unbreakable = document.getElementById(_unbreakable)
//   const num = document.getElementById(_num)
//   const damage = document.getElementById(_damage)
//
//   const inputData = {};
//   const display = {};
//   const Enchantment = [];
//   //新しい名前
//   if (name.value !== "") {
//     display.Name = JString2(form.input3.value);
//   }
//   //説明
//   if (description.value !== "") {
//     display.Lore = [JString2(form.input4.value)];
//   }
//   //色
//   if (color.checked) {
//     display.color = parseInt(isColor.value.substr(1, 6), 16);
//   }
//   //display
//   if (form.input3.value !== "" || form.input4.value !== "" || color.checked) {
//     inputData.display = display;
//   }
//   //不可壊
//   if (form.input5[0].checked) {
//     inputData.Unbreakable = 1;
//   }
//   //耐久値ダメージ
//   if (damage.value !== "") {
//     inputData.Damage = damage.value;
//   }
//   //エンチャント
//   var ench_flag = 0;
//   for (let i = 0; i < form.inputEnch.length; i++) {
//     if (form.inputEnch[i].checked) {
//       Enchantment.push({id: form.inputEnch[i].value, lvl: form.level[i].value});
//       var ench_flag = 1;
//     }
//   }
//   if (ench_flag == 1) {
//     if (form.input2.value == "minecraft:enchanted_book") {
//       inputData.StoredEnchantments = Enchantment;
//     } else {
//       inputData.Enchantments = Enchantment;
//     }
//   }
//   let outputData = JSON.stringify(inputData).replace(/\"/g, "");
//   outputData = outputData.replace(/_DQ_/g, "\"");
//   outputData = outputData.replace(/_YM_/g, "\\");
//   form.cmdOutput.value = "/give " + form.input1.value + " " + form.input2.value + outputData + " " + form.input7.value;
//   if (form.input7.value !== "") {
//     form.cmdOutput.value = "/give " + form.input1.value + " " + form.input2.value + outputData + " " + form.input7.value;
//   } else {
//     form.cmdOutput.value = "/give " + form.input1.value + " " + form.input2.value + outputData;
//
//   }
// }
//
// function JString(str) {
//   return "_DQ_" + str + "_DQ_";
// }
//
// function JString2(str) {
//   return "_DQ__YM__DQ_" + str + "_YM__DQ__DQ_";
// }

function enchantCommandGenerate(
    _player,
    _item,
    _name,
    _lore,
    // _is_colored,
    // _color,
    _unbreakable,
    _enchants,
    _level,
    _display
    // _num,
    // _damage
) {
  let player = document.getElementById(_player);
  let item = document.getElementById(_item);
  let new_name = document.getElementById(_name);
  let lore = document.getElementById(_lore);
  let unbreakable = document.getElementById(_unbreakable);
  let enchants = document.getElementsByName(_enchants);
  let level = document.getElementsByName(_level);
  let display = document.getElementById(_display);

  let enchantFlag = false;
  let nameFlag = false;
  let loreFlag = false;
  let isUnbreakable = false;

  let delimiterFlag = false;

  let command = `/give ${player.value} ${item.value} 1 0 `;

  if (new_name.value !== "") nameFlag = true;
  if (lore.value !== "") loreFlag = true;
  if (unbreakable.checked) isUnbreakable = true;

  for (let i = 0; i < enchants.length; i++) {
    if (enchants[i].checked) {
      enchantFlag = true;
      break;
    }
  }

  if (nameFlag || loreFlag || isUnbreakable || enchantFlag) {
    command += "{"
    // }
    if (enchantFlag) {
      for (let i = 0; i < enchants.length; i++) {
        if (enchants[i].checked) {
          if (delimiterFlag) {
            command += ",";
          } else {
            command += "ench:[";
          }

          command += `{id:${enchants[i].value}s,${level[i].value}}`;
          delimiterFlag = true;
        }
      }
      command += "]";
    }

    if (enchantFlag) {
      if (nameFlag || loreFlag) command += ",";
    }

    if (nameFlag || loreFlag) {
      command += "display:{"
      if (nameFlag && loreFlag) command += `Name:"${new_name.value}", Lore:["${lore.value}"]`;
      if (nameFlag && !loreFlag) command += `Name:${new_name.value}`
      if (!nameFlag && loreFlag) command += `Lore:["${lore.value}"]`
      command += "}"
      if (isUnbreakable) command += ",";
    }

    if (isUnbreakable) command += "Unbreakable:1";
    command += "}"
  }
  display.value = command;
}
