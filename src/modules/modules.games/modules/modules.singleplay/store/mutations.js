import * as types from "./mutations-types";

export default {
    /**
     * Commit level settings to the state
     * @param {Object} state 
     * @param {Object} levelSettings 
     */
    [types.SET_LEVEL_SETTINGS](state, levelSettings) {
        state.levelSettings = levelSettings
    }
};