import { uiActions } from "./ui-slice";
import { usernameActions } from "./username-slice";


export const fetchUsers = () => {
    return async dispatch => {
        try {

            dispatch(uiActions.setShowModal(true));
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            if (!response.ok) {
                throw new Error('Failed to fetch data')
            }

            const data = await response.json()
            dispatch(usernameActions.setUsers(data))
            dispatch(uiActions.setShowModal(false))

        } catch (error) {
            console.log('Error fetching data', error)
            dispatch(uiActions.setShowModal(false))
        }



    }
}