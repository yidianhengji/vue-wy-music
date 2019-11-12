const state = {
  openedPlayer: false
};

const mutations = {
  TOGGLE_OPENED_PLAYER: (state) => {
    state["openedPlayer"] = !state["openedPlayer"];
  }
};

const actions = {
  toggleOpenedPlayer({ commit }) {
    commit("TOGGLE_OPENED_PLAYER");
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
