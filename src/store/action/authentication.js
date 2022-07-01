/* eslint-disable prettier/prettier */

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGIN_LOADING = 'LOGIN_LOADING';

export const login = () => {
  return dispatch => {
    // dispatch({
    //   type: LOGIN_LOADING,
    //   data: {
    //     loading: true,
    //   },
    // });

    dispatch({
      type: LOGIN_SUCCESS,
      data: {
        user: {
          username: 'abdele man',
          usertype: 'admin',
        },
        isAuthenticated: true,
        error: '',
        loading: false,
      },
    });
    // dispatch({
    //   type: LOGIN_FAILED,
    //   data: {
    //     user: null,
    //     isAuthenticated: false,
    //     error: 'invalid credentials',
    //     loading: false,
    //   },
    // });
  };
};
