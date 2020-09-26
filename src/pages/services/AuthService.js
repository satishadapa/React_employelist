
import axios from 'axios';
import { API_URL } from '../config';

const AuthService = {
  login: function(email, password) {
    return axios.post(API_URL + '/auth', { email: email, password: password });
  },
}

export default AuthService