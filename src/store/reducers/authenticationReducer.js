/* eslint-disable prettier/prettier */
import * as AUTH from '../action/authentication';

// initial state
const initialState = {
  user: {
    username: '',
    usertype: '',
  },
  isAuthenticated: false,
  error: '',
  loading: false,
};

// authentication reducer
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // case for loading login action
    case AUTH.LOGIN_LOADING:
      return {...state};

    // case for login successful
    case AUTH.LOGIN_SUCCESS:
      return {
        ...state,
        user: {
          username: action.data.user.username,
          usertype: action.data.user.usertype,
        },
        isAuthenticated: action.data.isAuthenticated,
        error: '',
        loading: false,
      };

    // case for login failed
    case AUTH.LOGIN_FAILED:
      return {
        user: null,
        isAuthenticated: false,
        error: action.data.error,
        loading: false,
      };

    default:
      return state;
  }
};
