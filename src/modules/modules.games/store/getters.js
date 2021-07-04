// Submodules getters
import singleGameModuleGetters from "../modules/modules.singleplay/store/getters";

export default {
    getSupportedLanguages: state => state.supportedLanguages,

    // Single game
    ...singleGameModuleGetters,
}