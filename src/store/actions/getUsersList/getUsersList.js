import {
  REQUEST_USERS_SUCCESS,
  REQUEST_USERS_IN_PROCESS,
  REQUEST_USERS_ERROR,
} from '../../constants'
import axios from 'axios'

const getUsersSuccess = (usersList) => ({
  type: REQUEST_USERS_SUCCESS,
  payload: [...usersList],
})
const getUsersError = (error) => ({ type: REQUEST_USERS_ERROR, payload: error })
const getUsersInProcess = () => ({ type: REQUEST_USERS_IN_PROCESS })

const getUsersList = () => {
  return (dispatch) => {
    dispatch(getUsersInProcess())
    axios
      .get('https://yalantis-react-school-api.yalantis.com/api/task0/users')
      .then((res) => {
        dispatch(getUsersSuccess(res.data))
      })
      .catch((e) => {
        dispatch(getUsersError(e.message))
      })
  }
}
export default getUsersList
