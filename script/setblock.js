function setblock() {
  const form = document.getElementsByTagName("form")[0];

  const item = form.item.value
  const way = form.way.value
  const position = form.pos

  let command = "/setblock"
  let pos = ""

  form.isRelative.forEach(
      function (v, k) {
        if (v.checked) pos += ` ${position[k].value}`
        else pos += ` ~${position[k].value}`
      }
  )

  command += `${pos} ${item} 0 ` + way
  console.log(command)
  form.textarea.value = command
}
