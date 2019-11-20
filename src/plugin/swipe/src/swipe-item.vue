<template>
  <transition :name="isName">
    <div class="swipe-item" v-if="isShow">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: "SwipeItem",
  data() {
    return {
      select: null,
      direction: "right"
    };
  },
  props: {
    name: {
      type: Number
    }
  },
  computed: {
    isShow() {
      return this.name === this.select;
    },
    isName() {
      return this.direction == "left" ? "left-swipe" : "right-swipe";
    }
  }
};
</script>

<style lang="stylus">
.left-swipe-enter-active, .left-swipe-leave-active, .right-swipe-enter-active, .right-swipe-leave-active {
  transition: all 0.5s ease;
}

.left-swipe-leave-to, .right-swipe-enter {
  transform: translate(100%);
  opacity: 0;
}

.left-swipe-enter, .right-swipe-leave-to {
  transform: translate(-100%);
  opacity: 0;
  z-index: 998;
}

.left-swipe-enter-active, .right-swipe-enter-active {
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 999;
}

.swipe-item {
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>