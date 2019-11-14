<template>
  <div class="carousel" v-if="imgArr.length>0">
    <Swipe height="180px" v-model="initialIndex" autoplay>
      <SwipeItem v-for="(item,index) in imgArr" :key="index" :name="index">
        <img style="width: 100%; height:100%;" :src="item.picUrl" />
      </SwipeItem>
    </Swipe>
  </div>
</template>

<script>
import { reqBanner } from "@/api";
export default {
  data() {
    return {
      initialIndex: 0,
      imgArr: []
    };
  },
  mounted() {
    this.bannerList();
  },
  methods: {
    bannerList: async function() {
      const req = await reqBanner();
      if (req.data.code == 200) {
        this.imgArr = req.data.banners;
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.carousel {
  padding: 0 15px;
}
</style>