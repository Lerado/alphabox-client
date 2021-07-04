// Submodules default state
import singleGameModuleDefaultState from "../modules/modules.singleplay/store/defaultState";

export default {
    // List of languages supported by the server
    supportedLanguages: [],

    // Single game
    ...singleGameModuleDefaultState,
}