function potionCommandGenerateOn1_12_2(
    _player,
    _potionType,
    _isColor,
    _color,
    _name,
    _lore,
    _effects,
    _levels,
    _times,
    // _particle,
    _textarea
) {
  const player = document.getElementById(_player);
  const potionType = document.getElementById(_potionType);
  const isColor = document.getElementById(_isColor);
  const color = document.getElementById(_color);
  const name = document.getElementById(_name);
  const lore = document.getElementById(_lore);

  const effects = document.getElementsByName(_effects);
  const levels = document.getElementsByName(_levels);
  const times = document.getElementsByName(_times);

  const textarea = document.getElementById(_textarea);

  let command = `/give ${player.value} ${potionType.value} 1 0 `;

  let colorFlag = false;
  let nameFlag = false;
  let loreFlag = false;
  let effectFlag = false;

  if (isColor.checked) colorFlag = true;
  if (name.value !== "") nameFlag = true;
  if (lore.value !== "") loreFlag = true;
  let v = 0
  effects.forEach(
      function (value) {
        if (value.value !== "") {
          effectFlag = true;
          v++;
        }
      }
  )

  if (nameFlag || loreFlag || effectFlag) command += "{";
  if (nameFlag || loreFlag) command += "display:{"
  if (nameFlag) command += `Name:"${name.value}"`
  if (nameFlag && loreFlag) command += ", "
  if (loreFlag) command += `Lore:["${lore.value}"]`
  if (nameFlag || loreFlag) command += "}, "

  if (effectFlag) {
    command += "CustomPotionEffects:[";
    effects.forEach(
        function (value, key) {
          let level = parseInt(levels[key].value) - 1;
          command += `{id: ${value.value}, Amplifier: ${level}, Duration: ${parseInt(times[key].value) * 20} }`
          if (v >= 2) command += ", ";
          v--;
        }
    )
    command += "]"
  }

  if (colorFlag) {

    if (nameFlag || loreFlag || effectFlag) {
      command += ", ";
    }
    command += `CustomPotionColor: ${parseInt(color.value.substring(1, 7), 16)}`
  }
  if (nameFlag || loreFlag || effectFlag) command += "}";


  textarea.value = command;
}
