function copyClipboard(copyTarget) {
    copyTarget.exact
    const value = copyTarget.value
    if (navigator.clipboard) {
        navigator.clipboard.writeText(value)
            .then(
                function () {
                  console.log("Copied!")
                },
                function () {
                    alert("Copy Failed!")
                })
    }
}
