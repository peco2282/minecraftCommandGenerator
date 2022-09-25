function effectCommandGenerate() {
    let player = document.getElementById("input1")
    let effect = document.getElementById("input2")
    let second = document.getElementById("input3")
    let level = document.getElementById("input4")
    let particle = document.getElementById("input5")
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

    const output = document.getElementById("cmdOutput")
    output.value = command
}
