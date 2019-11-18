const state = {
  openedPlayer: false,
  playlist: null,
  song: null
};

const mutations = {
  TOGGLE_OPENED_PLAYER: (state) => {
    state["openedPlayer"] = !state["openedPlayer"];
  },
  PLAY_LIST_DATA: (state, value) => {
    state["playlist"] = value
  },
  SONG_DATA: (state, value) => {
    state["song"] = value
  }
};

const actions = {
  toggleOpenedPlayer({ commit }) {
    commit("TOGGLE_OPENED_PLAYER");
  },
  playlistData({ commit }, data) {
    commit("PLAY_LIST_DATA", data);
  },
  songData({ commit }, data) {
    commit("SONG_DATA", data);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
