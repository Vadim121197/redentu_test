import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { changeFont } from '../../../helpers/helpers'
import { getFontColor } from '../../../redux/selectors/fontSelectors'
import { changeFontColor } from '../../../redux/slices/fontSlices'
import { colors } from '../../../constants/constants'

const SelectFontColor = () => {
    const fontColor = useSelector(getFontColor)

    const dispatch = useDispatch()

    useEffect(() => {
        changeFont('foreColor', fontColor)
    }, [fontColor])

    const onChange = e => {
        dispatch(changeFontColor(e.target.value))
    }

    return (
        <p>
            Виберіть колiр шрифта:
            <select onChange={onChange} value={fontColor}>
                {colors.map(color => (
                    <option key={color.id} value={color.value}>
                        {color.name}
                    </option>
                ))}
            </select>
        </p>
    )
}

export default SelectFontColor
