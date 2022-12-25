import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  theme: true,
}

export const themeSlice = createSlice({
  name: 'themeSlice',
  initialState,
  reducers: {
    onChangeTheme: (state, action) => {
      state.theme = action.payload
    },
  },
})

export const { onChangeTheme } = themeSlice.actions

export default themeSlice.reducer
