const getters = {
  openedPlayer: state => state.app.openedPlayer,
  playlist: state => state.app.playlist,
  song: state => state.app.song,
  currentIndex: state => state.app.currentIndex
};
export default getters;
