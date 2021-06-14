import { createStore } from 'vuex';

// State
import state from './state';

// Getters
import getters from './getters';

// Mutations
import mutations from './mutations';

// Actions
import actions from './actions';

// Modules - Here we import store from our different modules
import usersModuleStore from '@/modules/modules.users/store';
import gamesModuleStore from "@/modules/modules.games/store";

export default createStore({
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions,
  modules: {
    users: usersModuleStore,
    games: gamesModuleStore
  }
})
