import { createSelector } from '@reduxjs/toolkit'

export const getFontColor = createSelector(
    state => state.font.fontColor,
    color => color
)

export const getFontBackground = createSelector(
    state => state.font.fontBackground,
    background => background
)

export const getFontSize = createSelector(
    state => state.font.fontSize,
    size => size
)
