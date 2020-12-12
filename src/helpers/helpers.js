export const changeFont = (property, value) => {
    const sel = window.getSelection()
    let range

    if (sel.rangeCount && sel.getRangeAt) {
        range = sel.getRangeAt(0)
    }
    document.designMode = 'on'

    if (range) {
        sel.removeAllRanges()
        sel.addRange(range)
    }

    document.execCommand(property, false, value)

    document.designMode = 'off'
}
