
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getOpenModal } from '../../utils/getOpenModal'


const initialState = {
  loginOpen: getOpenModal()
}

export const loginClise = createSlice({
  name: 'login',
  initialState,

  reducers: {
    setOpen: (state, bool: PayloadAction<boolean>) => {
      state.loginOpen = bool.payload
    }
  },
})

export const { setOpen } = loginClise.actions

export default loginClise.reducer

