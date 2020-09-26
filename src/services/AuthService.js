
import axios from 'axios';
import { API_URL } from '../config';
 /**
 * AuthService for login function
 */
const AuthService = {
  login: function(email, password) {
    return axios.post(API_URL + '/auth', { email: email, password: password });
  },

}

export default AuthService