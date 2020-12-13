import React, { useRef } from 'react'

import { combineItems } from '../../helpers/helpers'

import './ContentComponent.css'

const ContentComponent = () => {
    const ref = useRef(null)

    const handleJSON = () => {
        const childrens = ref.current.children

        const combine = combineItems(childrens)

        console.log(JSON.stringify(combine))
    }

    return (
        <>
            <div ref={ref} className="wrapper" contentEditable="true" />
            <button onClick={handleJSON} className="btn">
                To JSON
            </button>
        </>
    )
}

export default ContentComponent
