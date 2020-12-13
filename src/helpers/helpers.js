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

export const combineItems = array => {
    const childrensArray = []

    for (let key in array) {
        if (array.hasOwnProperty(key)) {
            childrensArray.push(array[key])
        }
    }

    const arrayWithOptions = childrensArray.map(children => {
        return {
            text: children.innerText,
            size: children.size,
            background: children.style.backgroundColor,
            color: children.color,
        }
    })

    const combineArray = arrayWithOptions.reduce((acc, cur) => {
        let found = false

        for (let i = 0; i < acc.length; i++) {
            if (
                acc[i].size === cur.size &&
                acc[i].color === cur.color &&
                acc[i].background === cur.background
            ) {
                found = true
                acc[i].text = `${acc[i].text} ${cur.text}`
            }
        }

        if (!found) {
            acc.push(cur)
        }

        return acc
    }, [])

    return combineArray
}
