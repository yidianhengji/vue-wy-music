<template>
  <div
    class="swipe"
    :style="'height:'+ height"
    @touchstart.capture="touchStart"
    @touchend.capture="touchEnd"
  >
    <div class="swipe-container">
      <slot></slot>
    </div>
    <div class="spot">
      <span v-for="(item,index) in len" :key="index" :class="current===index ? 'active':''"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Swipe",
  props: {
    height: {
      type: String,
      default: "200px"
    },
    value: {
      type: Number,
      default: 0
    },
    autoplay: {
      type: Boolean,
      default: false
    },
    interval: {
      type: Number,
      default: 5000
    }
  },
  data() {
    return {
      current: null,
      len: null,
      timer: null,
      startX: 0,
      endX: 0
    };
  },
  watch: {
    value() {
      this.isChildren();
    }
  },
  mounted() {
    this.len = this.$children.length;
    this.isChildren();
    this.play();
  },
  methods: {
    left() {
      this.current--;
      if (this.current < 0) {
        this.current = this.len - 1;
      }
      this.$emit("input", this.current);
    },
    right() {
      if (this.current == this.len - 1) {
        this.current = 0;
      } else {
        this.current++;
      }
      this.$emit("input", this.current);
    },
    isChildren() {
      this.$children.forEach((item, index) => {
        item.select = null;
        if (this.value === item.name) {
          item.select = this.value;
          this.current = this.value;
        }
      });
    },
    play() {
      if (this.autoplay) {
        this.timer = setInterval(() => {
          if (this.current == this.len - 1) {
            this.current = 0;
          } else {
            this.current++;
          }
          this.$emit("input", this.current);
        }, this.interval);
      }
    },
    touchStart(e) {
      clearInterval(this.timer);
      this.timer = null;
      e.preventDefault();
      this.startX = e.touches[0].clientX;
    },
    touchEnd(e) {
      e.preventDefault();
      this.endX = e.changedTouches[0].clientX;
      // 左滑
      if (this.startX - this.endX > 30) {
        this.right();
      }
      // 右滑
      if (this.startX - this.endX < -30) {
        this.left();
      }
      this.startX = 0;
      this.endX = 0;
      this.play();
    }
  },
  destroyed() {
    clearInterval(this.timer);
    this.timer = null;
  }
};
</script>

<style lang="stylus" scoped>
.swipe {
  overflow: hidden;
  width: 100%;
  position: relative;
  border-radius: 10px;

  .swipe-container {
    height: 100%;
    width: 100%;
    position: relative;
  }

  .spot {
    position: absolute;
    left: 0px;
    bottom: 10px;
    z-index: 9;
    display: flex;
    justify-content: center;
    width: 100%;

    span {
      width: 10px;
      height: 10px;
      background: rgba(255, 255, 255, 0.7);
      border-radius: 50%;
      margin: 0 5px;

      &.active {
        background: #f22a25;
      }
    }
  }
}
</style>