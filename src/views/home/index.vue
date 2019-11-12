<template>
  <div class="home">
    <Header></Header>
    <div class="main">
      <router-view />
    </div>
    <SmallPlayer></SmallPlayer>
    <LargePlayer v-if="isShow"></LargePlayer>
    <div class="large-player">大播放器</div>
  </div>
</template>

<script>
import Header from "./components/header";
import SmallPlayer from "../player/small-player";
import LargePlayer from "../player/large-player";
export default {
  components: {
    Header,
    SmallPlayer,
    LargePlayer
  },
  data() {
    return {
      isShow: false
    }
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
