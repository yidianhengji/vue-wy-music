<template>
  <div class="large-player">
    <div class="row">
      <g-button>默认按钮</g-button>
      <g-button type="primary">主要按钮</g-button>
      <g-button type="success">成功按钮</g-button>
      <g-button type="info">信息按钮</g-button>
      <g-button type="warning">警告按钮</g-button>
      <g-button type="danger">危险按钮</g-button>
    </div>
    <div class="row">
      <g-radio
        v-for="(item,index) in data"
        :key="index"
        v-model="radio"
        :label="item.label"
        block
        :disabled="item.disabled"
      >{{item.name}}</g-radio>
    </div>
    <div class="row">
      <g-radio
        v-for="(item,index) in data"
        :key="index"
        v-model="radio1"
        :label="item.label"
      >{{item.name}}</g-radio>
    </div>
    <div class="row">
      <g-checkbox v-model="checked" disabled>备选项</g-checkbox>
      <g-checkbox v-model="checked1">备选项</g-checkbox>
      <g-checkbox v-model="checked2">备选项</g-checkbox>
    </div>

    <div class="row">
      <g-checkbox-group v-model="checkList">
        <g-checkbox label="复选框 A"></g-checkbox>
        <g-checkbox label="复选框 B"></g-checkbox>
        <g-checkbox label="复选框 C"></g-checkbox>
        <g-checkbox label="禁用" disabled></g-checkbox>
        <g-checkbox label="选中且禁用" disabled></g-checkbox>
      </g-checkbox-group>
    </div>

    <div class="progress-wrapper">
      <span class="time time-l">1</span>
      <div class="progress-bar-wrapper">
        <div class="progress-bar" ref="progressBar">
          <div class="bar-inner" ref="progress" @click="progressClick">
            <div
              class="progress-btn-wrapper"
              ref="progressBtn"
              @touchstart.prevent="progressTouchStart"
              @touchmove.prevent="progressTouchMove"
              @touchend="progressTouchEnd"
            ></div>
          </div>
        </div>
      </div>
      <span class="time time-r">11111</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkList: ["选中且禁用", "复选框 A"],
      checked: true,
      checked1: false,
      checked2: false,
      radio: "1",
      radio1: "1",
      data: [
        { name: "备选项", label: "1", disabled: true },
        { name: "备选项", label: "2", disabled: false },
        { name: "备选项", label: "3", disabled: false }
      ]
    };
  },
  created() {
    this.touch = {};
  },
  methods: {
    progressTouchStart(e) {
      let bodyWidth = document.body.clientWidth;
      let progressWidth = this.$refs.progress.clientWidth;
      let progressBtn = this.$refs.progressBtn.offsetWidth;
      this.touch.initiated = true; // 是否启动
      this.touch.startX = (bodyWidth - progressWidth) / 2; // 线的起始位置
      this.touch.endX = bodyWidth - this.touch.startX; // 线的终点位置
      this.touch.left = this.$refs.progress.clientWidth; // 线的长度
      this.touch.spotWidth = progressBtn / 2; // 点一半的宽度
    },
    progressTouchMove(e) {
      if (!this.touch.initiated) {
        return;
      }
      if (e.touches[0].pageX > this.touch.startX) {
        this.$refs.progressBtn.style.left =
          e.touches[0].pageX - this.touch.startX - this.touch.spotWidth + "px";
      }
      if (e.touches[0].pageX > this.touch.endX) {
        this.$refs.progressBtn.style.left =
          this.touch.left - this.touch.spotWidth + "px";
      }
    },
    progressTouchEnd(e) {
      this.touch.initiated = false;
    },
    progressClick(e) {
      let bodyWidth = document.body.clientWidth;
      let progressWidth = this.$refs.progress.clientWidth;
      let progressBtn = this.$refs.progressBtn.offsetWidth;
      this.touch.initiated = true; // 是否启动
      this.touch.startX = (bodyWidth - progressWidth) / 2; // 线的起始位置
      this.touch.endX = bodyWidth - this.touch.startX; // 线的终点位置
      this.touch.left = this.$refs.progress.clientWidth; // 线的长度
      this.touch.spotWidth = progressBtn / 2; // 点一半的宽度
      if (e.pageX > this.touch.startX) {
        this.$refs.progressBtn.style.left =
          e.pageX - this.touch.startX - this.touch.spotWidth + "px";
      }
      if (e.pageX > this.touch.endX) {
        this.$refs.progressBtn.style.left =
          this.touch.left - this.touch.spotWidth + "px";
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/css/variable.styl';

.large-player {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 1000;

  .g-button+.g-button {
    margin-left: 10px;
  }
}

.row {
  margin-bottom: 20px;
  padding: 20px;
  box-sizing: border-box;
}

.progress-wrapper {
  display: flex;
  align-items: center;
  width: 80%;
  margin: 0px auto;
  padding: 10px 0;

  .progress-bar-wrapper {
    width: 100%;

    .progress-bar {
      height: 30px;

      .bar-inner {
        position: relative;
        top: 13px;
        height: 4px;
        background: rgba(0, 0, 0, 0.3);

        .progress {
          position: absolute;
          height: 100%;
          background: #ffcd32;
        }

        .progress-btn-wrapper {
          position: absolute;
          top: -6px;
          left: -6.5px;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          width: 16px;
          height: 16px;
          border: 3px solid #fff;
          border-radius: 50%;
          background: #ffcd32;
        }
      }
    }
  }

  .time {
    color: #fff;
    font-size: 12px;
    flex: 0 0 30px;
    line-height: 30px;
    width: 30px;

    &.time-l {
      text-align: left;
    }

    &.time-r {
      text-align: right;
    }
  }
}
</style>