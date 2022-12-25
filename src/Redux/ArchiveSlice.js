import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  archiveOperations: [],
  modalValue: 0,
}

export const archiveSlice = createSlice({
  name: 'archiveSlice',
  initialState,
  reducers: {
    addOperation: (state, action) => {
      const archiveArr = action.payload.split(' ')
      let archiveObj = {
        side: archiveArr[0],
        price: archiveArr[1],
        instrument: archiveArr[2],
        valume: archiveArr[3],
        timeStamp: archiveArr[4] + ' ' + archiveArr[5],
        id: archiveArr[6],
      }
      state.archiveOperations = [...state.archiveOperations, archiveObj]
      state.modalValue = 0
    },
    changeValue: (state, action) => {
      state.modalValue = action.payload
    },
    eraseValue: (state) => {
      state.modalValue = 0
    },
  },
})

export const { addOperation, eraseValue, changeValue } = archiveSlice.actions

export default archiveSlice.reducer
