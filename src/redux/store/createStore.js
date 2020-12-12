import { configureStore } from '@reduxjs/toolkit'
import font from '../slices/fontSlices'

const reducer = {
    font,
}

export const store = configureStore({
    reducer,
})
