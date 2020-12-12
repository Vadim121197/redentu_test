import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { changeFont } from '../../../helpers/helpers'
import { getFontSize } from '../../../redux/selectors/fontSelectors'
import { changeFontSize } from '../../../redux/slices/fontSlices'

import './SelectFontSize.css'

const SelectFontSize = () => {
    const fontSize = useSelector(getFontSize)

    const dispatch = useDispatch()

    useEffect(() => {
        changeFont('fontSize', fontSize)
    }, [fontSize])

    const onChange = e => {
        dispatch(changeFontSize(e.target.value))
    }

    return (
        <p>
            Виберіть розмір шрифта:
            <select onChange={onChange} value={fontSize}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="4">3</option>
                <option value="5">4</option>
                <option value="6">5</option>
                <option value="7">6</option>
            </select>
        </p>
    )
}

export default SelectFontSize
