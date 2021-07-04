import * as types from "./mutations-types"

// Submodules mutations
import singleGameModuleMutations from "../modules/modules.singleplay/store/mutations";

export default {
    /**
     * Commmit supported languages
     * @param {*} state 
     * @param {*} supportedLanguages 
     */
    [types.SET_SUPPORTED_LANGUAGES](state, supportedLanguages) {
        state.supportedLanguages = supportedLanguages;
    },

    // Single game
    ...singleGameModuleMutations,
}