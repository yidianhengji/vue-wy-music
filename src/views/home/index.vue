<template>
  <div class="home">
    <Header></Header>
    <div class="main" :style="mainHeight">
      <router-view />
    </div>
    <SmallPlayer v-show="!openedPlayer"></SmallPlayer>
    <LargePlayer v-show="openedPlayer"></LargePlayer>
  </div>
</template>

<script>
import Header from "./components/header";
import SmallPlayer from "../player/small-player";
import LargePlayer from "../player/large-player";
import { mapGetters, mapMutations } from "vuex";
export default {
  components: {
    Header,
    SmallPlayer,
    LargePlayer
  },
  data() {
    return {
      isShow: false
    };
  },
  computed: {
    ...mapGetters({
      openedPlayer: "openedPlayer"
    }),
    mainHeight: function() {
      return !this.openedPlayer
        ? "padding-bottom: 60px; height: calc(100% - 108px);"
        : "";
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
    height: calc(100% - 48px);
    overflow: hidden;
  }
}
</style>
