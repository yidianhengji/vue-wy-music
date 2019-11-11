<template>
  <div class="home">
    <Header></Header>
    <div class="main">
      <router-view />
    </div>
    <smallPlayer></smallPlayer>
    <div class="large-player">大播放器</div>
  </div>
</template>

<script>
import Header from "./components/header";
import smallPlayer from "../player/small-player";
export default {
  components: {
    Header,
    smallPlayer
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/css/variable.styl';

.home {
  width: 100%;
  height: 100%;

  .main {
    padding-top: 48px;
  }
}
</style>
