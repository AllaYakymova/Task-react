import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const checkedUsersId = () => ({ type: 'SET_CHECKED_USER' })

it('should dispatch check action', () => {
  const defaultState = {}
  const store = mockStore(defaultState)

  store.dispatch(checkedUsersId())

  const actions = store.getActions()
  const expectedPayload = { type: 'SET_CHECKED_USER' }

  expect(actions).toEqual([expectedPayload])
})

