function enchantCommandGenerate(
    _player,
    _item,
    _new_name,
    _description,
    _color,
    _unbreakable,
    _num,
) {
    const inputData = {};
    const display = {};
    const Enchantment = [];
    //新しい名前
    if (form.input3.value !== "") {
        display.Name = JString2(form.input3.value);
    }
    //説明
    if (form.input4.value !== "") {
        display.Lore = [JString2(form.input4.value)];
    }
    //色
    if (form.input8.checked) {
        display.color = parseInt(form.input9.value.substr(1, 6), 16);
    }
    //display
    if (form.input3.value !== "" || form.input4.value !== "" || form.input8.checked) {
        inputData.display = display;
    }
    //不可壊
    if (form.input5[0].checked) {
        inputData.Unbreakable = 1;
    }
    //耐久値ダメージ
    if (form.input6.value !== "") {
        inputData.Damage = form.input6.value;
    }
    //エンチャント
    var ench_flag = 0;
    for (let i = 0; i < form.inputEnch.length; i++) {
        if (form.inputEnch[i].checked) {
            Enchantment.push({id: form.inputEnch[i].value, lvl: form.level[i].value});
            var ench_flag = 1;
        }
    }
    if (ench_flag == 1) {
        if (form.input2.value == "minecraft:enchanted_book") {
            inputData.StoredEnchantments = Enchantment;
        } else {
            inputData.Enchantments = Enchantment;
        }
    }
    let outputData = JSON.stringify(inputData).replace(/\"/g, "");
    outputData = outputData.replace(/_DQ_/g, "\"");
    outputData = outputData.replace(/_YM_/g, "\\");
    form.cmdOutput.value = "/give " + form.input1.value + " " + form.input2.value + outputData + " " + form.input7.value;
    if (form.input7.value !== "") {
        form.cmdOutput.value = "/give " + form.input1.value + " " + form.input2.value + outputData + " " + form.input7.value;
    } else {
        form.cmdOutput.value = "/give " + form.input1.value + " " + form.input2.value + outputData;

    }
}

function JString(str) {
    return "_DQ_" + str + "_DQ_";
}

function JString2(str) {
    return "_DQ__YM__DQ_" + str + "_YM__DQ__DQ_";
}
