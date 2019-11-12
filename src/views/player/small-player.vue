<template>
  <div class="small-player" @click="open">
    <div class="left">
      <div class="player-bg">
        <img
          class="rotation"
          src="https://p1.music.126.net/Y6Pxw7CWa4vnsEYNm8jWww==/109951164446788933.jpg"
          alt
        />
      </div>
      <div class="player-info">
        <h4>世间美好与你换换相扣</h4>
        <h5>横滑可以切换上下首哦</h5>
      </div>
    </div>
    <div class="right">
      <span class="player">
        <i class="icon iconfont iconzanting"></i>
      </span>
      <span class="list">
        <i class="icon iconfont iconliebiao"></i>
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters({
      openedPlayer: "openedPlayer"
    })
  },
  methods: {
    open() {
      this.$store.dispatch("app/toggleOpenedPlayer", true);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/css/variable.styl';

.small-player {
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 60px;
  overflow: hidden;
  border-top: 1px solid #ebebeb;
  padding: 0 10px;
  box-sizing: border-box;
  background: #ffffff;
  z-index: 999;

  .left {
    height: 100%;
    float: left;
    display: flex;
    align-items: center;

    .player-bg {
      width: 50px;
      height: 50px;
      overflow: hidden;
      margin-right: 10px;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }

      @keyframes rotation {
        from {
          -webkit-transform: rotate(0deg);
        }

        to {
          -webkit-transform: rotate(360deg);
        }
      }

      .rotation {
        -webkit-transform: rotate(360deg);
        animation: rotation 5s linear infinite;
        -moz-animation: rotation 5s linear infinite;
        -webkit-animation: rotation 5s linear infinite;
        -o-animation: rotation 5s linear infinite;
      }
    }

    .player-info {
      h4 {
        color: #353535;
        font-size: 16px;
      }

      h5 {
        margin-top: 6px;
        color: #808080;
        font-size: 14px;
      }
    }
  }

  .right {
    height: 100%;
    float: right;
    display: flex;
    align-items: center;

    .player {
      i {
        color: #555555;
        font-size: 40px;
      }
    }

    .list {
      i {
        color: #555555;
        font-size: 40px;
      }
    }
  }
}
</style>