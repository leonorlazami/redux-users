import { createSlice } from '@reduxjs/toolkit'


const usernameSlice = createSlice({
    name: 'dropdown',
    initialState: {
        users: [],
        selectedUsers: [],


    },
    reducers: {
        setUsers(state, action) {
            state.users = action.payload
        },
        setSelectedUsers(state, action) {
            state.selectedUsers.push(action.payload)
        },
        sortSelectedUsers(state, action) {
            state.selectedUsers = action.payload
        },
        removeSelectedUser(state, action) {
            const selectedUserID = action.payload;
            const filteredSelectedUsers = state.selectedUsers.filter(user => user.id !== selectedUserID)
            state.selectedUsers = filteredSelectedUsers
            console.log(state.selectedUsers)
        }


    }
})


export default usernameSlice;

export const usernameActions = usernameSlice.actions