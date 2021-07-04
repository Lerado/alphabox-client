export default {
    /**
     * Gets authenticated user
     * @param {*} state 
     * @returns {*} The authenticated user
     */
    getUser: state => state.user,

    /**
     * Is a user logged in ?
     * @param {*} state 
     * @returns {Boolean}
     */
    isAuthenticated: state => Object.getOwnPropertyNames(state.user).length > 0,
}