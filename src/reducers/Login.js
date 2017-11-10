import Login from '../actions/Login';

const initialState = {
  email: '',
};

const login = (state = initialState, { type, payload }) => {
  switch (type) {
    case Login.LOGIN_REQUEST:
      return { ...state };
    case Login.LOGIN_SUCCESS:
      const { email } = payload;
      return {
        ...state,
        email,
      };
    default:
      return state;
  }
};

export default login;