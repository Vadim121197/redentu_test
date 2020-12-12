import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    fontColor: 'black',
    fontSize: '4',
    fontBackground: 'white',
}

const fontSlice = createSlice({
    name: 'font',
    initialState,
    reducers: {
        changeFontColor: (state, action) =>
            void (state.fontColor = action.payload),
        changeFontSize: (state, action) =>
            void (state.fontSize = action.payload),
        changeFontBackground: (state, action) =>
            void (state.fontBackground = action.payload),
    },
})

export const {
    changeFontColor,
    changeFontSize,
    changeFontBackground,
} = fontSlice.actions

export default fontSlice.reducer
