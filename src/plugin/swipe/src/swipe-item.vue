<template>
  <transition name="swipe" :class="false">
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
      select: null
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
    }
  }
};
</script>

<style lang="stylus">
.swipe-enter-active, .swipe-leave-active {
  transition: all 0.5s ease;
}

.swipe-leave-to {
  transform: translate(-100%);
  opacity: 0;
}

.swipe-enter {
  transform: translate(100%);
  opacity: 0;
}

.swipe-enter-active {
  position: absolute;
  left: 0px;
  top: 0px;
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