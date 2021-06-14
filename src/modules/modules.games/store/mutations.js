import * as types from "./mutations-types"

export default {
    /**
     * Commmit supported languages
     * @param {*} state 
     * @param {*} supportedLanguages 
     */
    [types.SET_SUPPORTED_LANGUAGES](state, supportedLanguages) {
        state.supportedLanguages = supportedLanguages;
    }
}