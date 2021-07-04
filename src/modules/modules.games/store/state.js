// Submodules state
import singleGameModuleState from "../modules/modules.singleplay/store/state";

export default {
    // List of languages supported by the server
    supportedLanguages: [],

    // Single game
    ...singleGameModuleState,
}