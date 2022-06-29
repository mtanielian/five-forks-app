import actionsTypes from '../actions/actionTypes'

const INITIAL_STATE = {
  isAuthenticated: false,
  user: {},
  error: null,
  loading: false,
}

const authReducer = (state = INITIAL_STATE, action)  => {
  switch (action.type) {
    case actionsTypes.login:
      return {
        ...state,
        error: null,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      }
    case actionsTypes.logout:
      return { ...INITIAL_STATE }
    case actionsTypes.loadingAuth:
      console.log('loadingAuth reducer')
      return { ...state, loading: true }
    case actionsTypes.errorAuth:
      return { ...state, error: action.payload, loading: false }
    default:
      return state
  }
}

export default authReducer