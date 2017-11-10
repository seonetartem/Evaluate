const types = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
}

export default types;

export const login = payload => ({
  type: types.LOGIN_REQUEST,
  payload,
})