import React from 'react'

import styled from './HeaderButton.module.css'
import SelectFontBackground from './SelectFontBackground/SelectFontBackground'
import SelectFontColor from './SelectFontColor/SelectFontColor'
import SelectFontSize from './SelectFontSize/SelectFontSize'

const HeaderButton = () => {
    return (
        <div className={styled.wrapper}>
            <SelectFontSize />
            <SelectFontColor />
            <SelectFontBackground />
        </div>
    )
}

export default HeaderButton
