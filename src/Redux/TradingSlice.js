import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activePopup: false,
  item: {
    id: '1',
    name: 'USD/CAD',
    buy: 1.5546,
    sell: 1.5532,
  },
}

export const tradingSlice = createSlice({
  name: 'tradingSlice',
  initialState,
  reducers: {
    changePopup: (state, action) => {
      state.activePopup = action.payload
    },
    changeItem: (state, action) => {
      state.item = action.payload
    },
  },
})

export const dataTradingSlice = (state) => state.tradingSlice
export const { changePopup, changeItem } = tradingSlice.actions

export default tradingSlice.reducer
