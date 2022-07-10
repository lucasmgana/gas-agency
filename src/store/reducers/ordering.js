/* eslint-disable prettier/prettier */
import * as ORDER from '../action/authentication';


// authentication reducer
export const orderReducer = (state = {}, action) => {
  switch (action.type) {
    // case for loading login action
    case ORDER.LOADING:
      return {...state};

    // case for login successful
    case ORDER.SUCCESS:
      console.log('dispatched user', action.data.user);
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
    case ORDER.FAILED:
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
