import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeModal: false,
  infoModal: '',
  textError: false,
}

export const modalSlice = createSlice({
  name: 'modalSlice',
  initialState,
  reducers: {
    getModalInfo: (state, action) => {
      state.infoModal = ''
      for (let key in action.payload) {
        state.infoModal += action.payload[key] + ' '
      }
    },
    toggleModal: (state) => {
      state.activeModal = !state.activeModal
      state.infoModal = ''
    },
    toggleTextError: (state, action) => {
      state.textError = action.payload
    },
  },
})

export const { getModalInfo, toggleTextError, toggleModal } = modalSlice.actions

export default modalSlice.reducer
