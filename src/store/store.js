import { configureStore } from '@reduxjs/toolkit'
import usernameSlice from './username-slice'
import uiSlice from './ui-slice'



const store = configureStore({
    reducer: { users: usernameSlice.reducer, ui: uiSlice.reducer }
})


export default store