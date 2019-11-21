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
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: "1",
      radio1: "1",
      data: [
        { name: "备选项", label: "1", disabled: true },
        { name: "备选项", label: "2", disabled: false },
        { name: "备选项", label: "3", disabled: false }
      ]
    };
  },
  methods: {}
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
</style>