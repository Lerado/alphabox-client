import * as types from './mutations-types'

export default {
    /**
     * Save user to state
     * @param {*} state 
     * @param {*} user 
     */
    [types.SET_USER](state, user) {
        // Never store the token in the state, in HTTP cookie only
        // Delete user database id
        delete user.token;
        delete user._id;
        state.user = user;
    },

    /**
     * Save auth resolve status in the state
     * @param {Object} state 
     * @param {Boolean} status 
     */
    [types.SET_HAS_AUTH_BEEN_CHECKED](state, status) {
        state.hasAuthBeenChecked = status;
    }
}