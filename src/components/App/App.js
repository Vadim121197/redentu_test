import React from 'react'

import ContentComponent from '../ContentComponent/ContentComponent'
import HeaderButton from '../HeaderButton/HeaderButton'

import styled from './App.module.css'

const App = () => {
    return (
        <div className={styled.wrapper}>
            <HeaderButton />
            <ContentComponent />
        </div>
    )
}

export default App
