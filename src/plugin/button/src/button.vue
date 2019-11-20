<template>
  <button @click="handleClick" class="g-button" :class=" type ? 'g-button--' + type : ''">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "GButton",
  props: {
    type: {
      type: String,
      default: "default"
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    }
  }
};
</script>

<style lang="stylus" scoped>
.g-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  border-style: solid;
  border-width: 1px;
}

.g-button--default {
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;

  &:active {
    color: #3a8ee6;
    border-color: #3a8ee6;
    outline: none;
  }

  &:hover, &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}

.g-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;

  &:active {
    background: #3a8ee6;
    border-color: #3a8ee6;
    color: #fff;
  }

  &:hover, &:focus {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
  }
}

.g-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;

  &:active {
    background: #5daf34;
    border-color: #5daf34;
    color: #fff;
  }

  &:hover, &:focus {
    background: #85ce61;
    border-color: #85ce61;
    color: #fff;
  }
}

.g-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;

  &:active {
    background: #82848a;
    border-color: #82848a;
    color: #fff;
  }

  &:hover, &:focus {
    background: #a6a9ad;
    border-color: #a6a9ad;
    color: #fff;
  }
}

.g-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;

  &:active {
    background: #cf9236;
    border-color: #cf9236;
    color: #fff;
  }

  &:hover, &:focus {
    background: #ebb563;
    border-color: #ebb563;
    color: #fff;
  }
}

.g-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;

  &:active {
    background: #dd6161;
    border-color: #dd6161;
    color: #fff;
  }

  &:hover, &:focus {
    background: #f78989;
    border-color: #f78989;
    color: #fff;
  }
}
</style>