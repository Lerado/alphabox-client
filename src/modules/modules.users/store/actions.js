import http from '@/services/http';
import { SET_USER } from './mutations-types';

// Routes available server-side
const api = {
    login: '/users/login'
};

export default {
    async attemptLogin({ commit }, { username, password, remember_me }, commitable = true) {
        // Construct request payload
        let user = {
            username: username,
            password: password,
            remember_me: remember_me
        };

        // Async request to server and commit if necessary
        // withCredentials option is to enable Set-Cookie bearer
        let response = await http.post(api.login, { user }, { withCredentials: true });
        if (commitable)
            commit(SET_USER, response.user);
    }
}