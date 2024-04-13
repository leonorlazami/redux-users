import { createSlice } from '@reduxjs/toolkit'



const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        showModal: false
    },
    reducers: {
        setShowModal(state, action) {
            state.showModal = action.payload
        }
    }
})


export const uiActions = uiSlice.actions;

export default uiSlice;