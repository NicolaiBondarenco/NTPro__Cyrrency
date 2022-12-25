import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  fullTime: '',
}

export const timeSlice = createSlice({
  name: 'timeSlice',
  initialState,
  reducers: {
    changeMainTime: (state, action) => {
      let time = ''
      for (let i in action.payload) {
        if (action.payload[i] < 10) {
          time += 0
        }
        if (i !== 'secondTime') {
          time += action.payload[i] + ':'
        } else {
          time += action.payload[i]
        }
      }
      state.fullTime = time
    },
  },
})

export const { changeMainTime } = timeSlice.actions

export default timeSlice.reducer
