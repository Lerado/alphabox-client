import state from './state';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
    isRegistered: true,
    namespaced: true,
    state: state,
    mutations,
    actions,
    getters
}