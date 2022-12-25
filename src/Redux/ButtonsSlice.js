import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tradingBtn: true,
  archiveBtn: false,
}

export const buttonsSlice = createSlice({
  name: 'buttonsSlice',
  initialState,
  reducers: {
    toggleTrading: (state, action) => {
      state.tradingBtn = action.payload
    },
    toggleArchive: (state, action) => {
      state.archiveBtn = action.payload
    },
  },
})

export const { toggleTrading, toggleArchive } = buttonsSlice.actions

export default buttonsSlice.reducer
