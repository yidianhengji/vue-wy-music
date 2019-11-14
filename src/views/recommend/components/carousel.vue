<template>
  <div class="carousel" v-if="imgArr.length>0">
    <Swipe height="180px" v-model="initialIndex" autoplay>
      <SwipeItem v-for="(item,index) in imgArr" :key="index" :name="index">
        <img style="width: 100%; height:100%;" :src="item.imageUrl" />
      </SwipeItem>
    </Swipe>
  </div>
</template>

<script>
export default {
  props: {
    imgArr: {
      type: Array
    }
  },
  data() {
    return {
      initialIndex: 0
    };
  }
};
</script>

<style lang="stylus" scoped>
.carousel {
  padding: 0 15px;
}
</style>