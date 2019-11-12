const state = {
  sidebar: {
    opened: true
  },
  setting: {
    theme: 1
  }
};

const mutations = {
  TOGGLE_SIDEBAR: state => {
    state.sidebar.opened = !state.sidebar.opened;
  },
  CHANGE_THEME: (state, { key, value }) => {
    state[key] = value;
  }
};

const actions = {
  toggleSideBar({ commit }) {
    commit("TOGGLE_SIDEBAR");
  },
  changeTheme({ commit }, data) {
    commit("CHANGE_THEME", data);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
