import * as types from './mutations-types'

export default {
    /**
     * Save user to state
     * @param {*} state 
     * @param {*} user 
     */
    [types.SET_USER](state, user) {
        state.user = user;
    }
}