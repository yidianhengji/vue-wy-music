<template>
  <div class="checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GCheckboxGroup",
  props: {
    vlaue: {
      type: Array
    }
  }
};
</script>