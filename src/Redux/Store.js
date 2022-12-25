import { configureStore } from '@reduxjs/toolkit'
import tradingSlice from './TradingSlice'
import dataCurrencySlice from './DataCurrencySlice'
import buttonsSlice from './ButtonsSlice'
import modalSlice from './ModalSlice'
import archiveSlice from './ArchiveSlice'
import timeSlice from './TimeSlice'
import themeSlice from './ThemeSlice'

export const store = configureStore({
  reducer: {
    tradingSlice,
    dataCurrencySlice,
    buttonsSlice,
    modalSlice,
    archiveSlice,
    timeSlice,
    themeSlice,
  },
})
