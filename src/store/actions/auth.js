import AuthService from '../../services/AuthService';
import {getErrors } from "./actionCreators";

/**
 * Login user action
 */
export const loginUser = (state, history) => dispatch => {
  AuthService.login(state.email, state.password).then(resp => {
    if (resp.data.success) {
      history.push('/dashboard');
    }
  }).catch(error => {
    if (error.response) {
      dispatch(getErrors({
        loginError: error.response.data.error
      }));
    }
  });
}
