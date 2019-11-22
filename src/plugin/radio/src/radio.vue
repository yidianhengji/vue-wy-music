<template>
  <label
    class="g-radio"
    :class="[
    value===label ? 'is-checked':'',
    block ? 'is-block' : '',
    disabled ? 'is-disabled' : ''
  ]"
  >
    <span class="g-radio__input">
      <span class="g-radio__inner"></span>
      <input
        class="g-radio__original"
        :name="name"
        type="radio"
        :value="label"
        @click="handleClick"
        :disabled="disabled"
        @change="handleChange"
      />
    </span>
    <span class="g-radio__label">
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  name: "GRadio",
  props: {
    label: {},
    value: {},
    name: {
      default: 1
    },
    block: {
      type: Boolean,
      default: false
    },
    disabled: Boolean
  },
  computed: {},
  methods: {
    handleChange(e) {
      this.$emit("input", e.target.value);
    },
    handleClick(e) {
      this.$emit("click", e);
    }
  }
};
</script>

<style lang="stylus" scoped>
.g-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;

  .g-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;

    .g-radio__inner {
      border: 1px solid #DCDFE6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;

      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }

    .g-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }

  .g-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}

.is-checked {
  .g-radio__input {
    .g-radio__inner {
      border-color: #409EFF;
      background: #409EFF;

      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }

  .g-radio__label {
    color: #409EFF;
  }
}

.is-block {
  display: block;
  line-height: 30px;
}

.is-disabled {
  cursor: not-allowed;
  color: #c0c4cc;
}
</style>