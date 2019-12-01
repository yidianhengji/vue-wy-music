<template>
  <div class="home">
    <Header></Header>
    <div class="main" :style="mainHeight">
      <router-view />
    </div>
    <LargePlayer></LargePlayer>
  </div>
</template>

<script>
import Header from "./components/header";
import LargePlayer from "../player/large-player.vue";
import { mapGetters, mapMutations } from "vuex";
export default {
  components: {
    Header,
    LargePlayer
  },
  data() {
    return {
      isShow: false
    };
  },
  computed: {
    ...mapGetters({
      smallPlayer: "smallPlayer",
      openedPlayer: "openedPlayer"
    }),
    mainHeight: function() {
      return this.smallPlayer
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
