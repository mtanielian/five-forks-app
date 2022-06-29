import actionsTypes from "./actionTypes"

export const doLoading = (loading) => async (dispatch) => {
  dispatch({
    type: actionsTypes.loadingAuth,
    payload: loading
  })
}

export const doError = (error) => async (dispatch) => {
  dispatch({
    type: actionsTypes.errorAuth,
    payload: error
  })
}

export const doLogin = (form) => async (dispatch) => {
  dispatch(doLoading(true))

  setTimeout(() => {
    dispatch({
      type: actionsTypes.login,
      payload: {...form, user: 'Martin yo', token: '12345', id: '12345'}
    })
  }, 5000)
  
}