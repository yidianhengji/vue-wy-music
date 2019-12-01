const state = {
  openedPlayer: false,
  smallPlayer: false,
  playlist: null,
  song: null,
  currentIndex: 0
};

const mutations = {
  TOGGLE_OPENED_PLAYER: (state) => {
    state["openedPlayer"] = !state["openedPlayer"];
  },
  TOGGLE_SMALL_PLAYER: (state, value) => {
    state["smallPlayer"] = value
  },
  PLAY_LIST_DATA: (state, value) => {
    state["playlist"] = value
  },
  SONG_DATA: (state, value) => {
    state["song"] = value
  },
  CURRENT_INDEX: (state, value) => {
    state["currentIndex"] = value
  }
};

const actions = {
  toggleOpenedPlayer ({ commit }) {
    commit("TOGGLE_OPENED_PLAYER");
  },
  toggleSmallPlayer ({ commit }, data) {
    commit("TOGGLE_SMALL_PLAYER", data);
  },
  playlistData ({ commit }, data) {
    commit("PLAY_LIST_DATA", data);
  },
  songData ({ commit }, data) {
    commit("SONG_DATA", data);
  },
  currentIndexData ({ commit }, data) {
    commit("CURRENT_INDEX", data);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
