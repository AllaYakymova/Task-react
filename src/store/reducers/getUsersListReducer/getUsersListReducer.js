import {
  REQUEST_USERS_ERROR,
  REQUEST_USERS_IN_PROCESS,
  REQUEST_USERS_SUCCESS,
} from '../../constants'

const initialStore = {
  usersList: [],
  isLoaded: false,
  error: '',
}

const getUsersReducer = (store = initialStore, action) => {
  switch (action.type) {
    case REQUEST_USERS_SUCCESS:
      return {
        ...store,
        isLoaded: true,
        usersList: action.payload,
      }
    case REQUEST_USERS_ERROR:
      return {
        ...store,
        isLoaded: false,
        error: action.payload,
      }
    case REQUEST_USERS_IN_PROCESS:
      return {
        ...store,
        isLoaded: false,
      }
    default:
      return store
  }
}

export default getUsersReducer
