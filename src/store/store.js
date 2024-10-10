import { configureStore } from '@reduxjs/toolkit'
import { pasteSlice } from './slices/pasteSlice'

export const store = configureStore({
  reducer: {
    paste: pasteSlice.reducer
  },
})