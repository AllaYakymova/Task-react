import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'


jest.mock('axios')
const middlewares = [thunk]
const mockStore = configureStore(middlewares)

function success() {
  return {
    type: 'REQUEST_USERS_SUCCESS',
  }
}

function fetchData() {
  return (dispatch) => {
    return fetch(
      'https://yalantis-react-school-api.yalantis.com/api/task0/users'
    ).then(() => dispatch(success()))
  }
}

it('should execute fetch data', () => {
  const store = mockStore({})

  return store.dispatch(fetchData()).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual(success())
  })
})

describe('Check usersList', () => {
  let user = {
    id: '5e00928d91e7feaa9872ec08',
    firstName: 'Yang',
    lastName: 'Carson',
    dob: '2019-02-26T16:52:36.244Z',
  }
  const array = [user]
  test('list item should be an object', () => {
    expect(array).toContain(user)
  })

  test('User item contains four descriptions, which have defined values', () => {
    expect(user.id).toBeDefined()
    expect(user.firstName).toBeDefined()
    expect(user.lastName).toBeDefined()
    expect(user.dob).toBeDefined()
    expect(user).toHaveProperty('id')
    expect(user).toHaveProperty('firstName')
    expect(user).toHaveProperty('lastName')
    expect(user).toHaveProperty('dob')
  })
})
