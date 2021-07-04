import http from "@/services/http";
import { SET_LEVEL_SETTINGS } from "./mutations-types";

const api = {
    getLevelSettings: "/games/lang/:lang/level/:level",
    getDemoLevelSettings: "/games/demo/lang/:lang/level/:level",
    findWordsResults: "/games/lang/:lang/level/:level/findwords/results"
};

export default {
    /**
     * Get game level settings
     * 
     * @param {Object} vuex 
     * @param {Object} params Route parameters
     * @param {Object} commitable True by default
     */
    async getLevelSettings({ commit }, params, commitable = true) {
        // Replace parameters in api route
        let route = api.getLevelSettings;
        Object.getOwnPropertyNames(params).forEach(name => {
            route = route.replace(`:${ name }`, params[name]);
        });

        // Async request to the server
        let response = await http.get(route, { withCredentials: true });
        if (commitable)
            commit(SET_LEVEL_SETTINGS, response);
    },

    /**
     * Get demo level settings
     * Does not required authentication
     * 
     * @param {Object} vuex 
     * @param {Object} params Route parameters
     * @param {Object} commitable True by default
     */
     async getDemoLevelSettings({ commit }, params, commitable = true) {
        // Replace parameters in api route
        let route = api.getDemoLevelSettings;
        Object.getOwnPropertyNames(params).forEach(name => {
            route = route.replace(`:${ name }`, params[name]);
        });

        // Async request to the server
        let response = await http.get(route);
        if (commitable)
            commit(SET_LEVEL_SETTINGS, response);
    },

    /**
     * Compute results for the find words game
     * @param {*} param0 
     * @param {*} param1 
     * @param {*} commitable 
     * @returns 
     */
    async findWordsResults({ commit }, { lang, words, level }, commitable = false) {
        // Replace parameters in api route
        let route = api.findWordsResults;
        route = route.replace(`:lang`, lang);
        route = route.replace(`:level`, level);

        // Async request to the server
        let response = await http.post(route, { lang, words, level });
        if (commitable)
            commit();
        
        return response;
    },
}