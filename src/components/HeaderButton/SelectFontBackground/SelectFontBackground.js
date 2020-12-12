import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { colors } from '../../../constants/constants'

import { changeFont } from '../../../helpers/helpers'
import { getFontBackground } from '../../../redux/selectors/fontSelectors'
import { changeFontBackground } from '../../../redux/slices/fontSlices'

const SelectFontBackground = () => {
    const fontBackground = useSelector(getFontBackground)

    const dispatch = useDispatch()

    useEffect(() => {
        changeFont('backColor', fontBackground)
    }, [fontBackground])

    const onChange = e => {
        dispatch(changeFontBackground(e.target.value))
    }

    return (
        <p>
            Виберіть фон шрифта:
            <select onChange={onChange} value={fontBackground}>
                {colors.map(color => (
                    <option key={color.id} value={color.value}>
                        {color.name}
                    </option>
                ))}
            </select>
        </p>
    )
}

export default SelectFontBackground
