import http from "@/services/http";
import { SET_SUPPORTED_LANGUAGES } from "./mutations-types";

// Submodules actions
import singleGameModuleActions from "../modules/modules.singleplay/store/actions";

// Routes available server-side
const api = {
    getSupportedLanguages: "/languages/get",
};

export default {
    /**
     * Fetch languages supported by the server
     * 
     * @param {*} param0 vuex
     * @param {*} commitable Commit or not
     */
    async fetchSupportedLanguages({ commit }, commitable = true) {
        // Async request
        let response = await http.get(api.getSupportedLanguages);
        if (commitable)
            commit(SET_SUPPORTED_LANGUAGES, response.languages);
    },

    

    // Single game
    ...singleGameModuleActions,
};