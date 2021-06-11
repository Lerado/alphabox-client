import http from '@/services/http';
import { SET_USER } from './mutations-types';

// Routes available server-side
const api = {
    login: '/users/login',
    register: '/users'
};

export default {
    /**
     * Attempts to log a user in the system
     * @param {*} param0 
     * @param {*} param1 User's credentials
     * @param {*} commitable Commit to state or not
     */
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
    },

    /**
     * Attempts to register a user into the system
     * @param {*} param0 
     * @param {*} param1 User's informations
     * @param {*} commitable Commit to state or not
     */
    async attemptRegister({ commit }, { username, email, password, password_confirmation }, commitable = true) {
        let user = {
            username: username,
            email: email,
            password: password,
            password_confirmation: password_confirmation
        };

        // Async request
        let response = await http.post(api.register, { user });
        if (commitable)
            commit(SET_USER, response.user)
    }
}