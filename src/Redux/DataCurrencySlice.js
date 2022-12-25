import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const dataCurrencySlice = createSlice({
  name: 'dataCurrencySlice',
  initialState,
  reducers: {
    getItems: (state, action) => {
      state.items = action.payload
    },
  },
})

export const { getItems } = dataCurrencySlice.actions

export default dataCurrencySlice.reducer
