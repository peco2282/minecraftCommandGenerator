function effectCommandGenerate(
    _player,
    _effect,
    _second,
    _level,
    _particle,
    textarea
    ) {
    let player = document.getElementById(_player)
    let effect = document.getElementById(_effect)
    let second = document.getElementById(_second)
    let level = document.getElementById(_level)
    let particle = document.getElementById(_particle)
    let intSecond = ""
    if (second !== "") {
        intSecond = " " + second.value;
    }
    let intLevel = ""
    if (level !== "") {
        intLevel = " " + level.value;
    }
    let isParticle = "";
    if (particle !== "true") {
        isParticle = " " + particle.value;
    }

    const command = "/effect give " + player.value + " " + effect.value + intSecond + intLevel + isParticle;
    const output = document.getElementById(textarea)
    output.value = command
}
