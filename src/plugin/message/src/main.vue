<template>
  <div class="alert bounceInUp animated" ref="el-message" :style="positionStyle">
    <slot>
      <span>{{message}}</span>
    </slot>
  </div>
</template>

<script>
export default {
  name: "message",
  data() {
    return {
      timer: null,
      duration: 3000,
      message: "",
      verticalOffset: 20,
      onClose: null
    };
  },
  computed: {
    positionStyle() {
      return {
        bottom: `${this.verticalOffset}px`
      };
    }
  },
  methods: {
    close() {
      if (typeof this.onClose === "function") {
        this.onClose(this);
      }
    },
    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          this.close();
        }, this.duration);
        console.log(this.duration)
      }
    }
  },
  mounted() {
    this.startTimer();
  }
};
</script>

<style lang="stylus" scoped>
.alert {
  position: fixed;
  transform: translate(0%, -50%);
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 10%;
  box-sizing: border-box;

  span {
    background: rgba(0, 0, 0, 0.4);
    color: #ffffff;
    font-size: 14px;
    padding: 4px 10px;
    border-radius: 6px;
    display: block;
    line-height: 16px;
  }
}
</style>
