function copyClipboard(copyTarget) {
    copyTarget.exact
    const value = copyTarget.value
    let r;
    if (navigator.clipboard) {
        navigator.clipboard.writeText(value)
            .then(
                r => function () {
                    alert("Copied!")
                },
                function () {
                    alert("Copy Failed!")
                })
    }
}
