import { DELETE_CHECKED_USER, SET_CHECKED_USER } from '../../constants'

const initialStore = {
  checkedUsersId: JSON.parse(localStorage.getItem('checkedUsersId')) || [],
}

const actionsWithCheckedUsersReducer = (store = initialStore, action) => {
  switch (action.type) {
    case SET_CHECKED_USER:
      return {
        ...store,
        checkedUsersId: action.payload,
      }
    case DELETE_CHECKED_USER:
      return {
        ...store,
        checkedUsersId: action.payload,
      }
    default:
      return store
  }
}

export default actionsWithCheckedUsersReducer
