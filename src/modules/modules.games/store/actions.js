import http from "@/services/http";
import { SET_SUPPORTED_LANGUAGES } from "./mutations-types";

// Routes available server-side
const api = {
    getSupportedLanguages: "/languages/get",
};

export default {
    async fetchSupportedLanguages({ commit }, commitable = true) {
        // Async request
        let response = await http.get(api.getSupportedLanguages);
        if (commitable)
            commit(SET_SUPPORTED_LANGUAGES, response.languages);
    }
};