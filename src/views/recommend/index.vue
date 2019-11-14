<template>
  <Scroll v-if="recommendArr.length>0" ref="recommend" class="recommend-content">
    <ul>
      <Carousel :imgArr="imgArr"></Carousel>
      <ActionBar></ActionBar>
      <RecommendList :recommendArr="recommendArr"></RecommendList>
    </ul>
  </Scroll>
</template>

<script>
import Carousel from "./components/carousel";
import ActionBar from "./components/action-bar";
import RecommendList from "./components/recommend-list";
import Scroll from "@/components/scroll/scroll";
import { reqBanner, reqPersonalized } from "@/api";
export default {
  components: {
    Carousel,
    ActionBar,
    RecommendList,
    Scroll
  },
  data() {
    return {
      imgArr: [],
      recommendArr: []
    };
  },
  mounted() {
    this.bannerList();
    this.playlist();
  },
  methods: {
    bannerList: async function() {
      const req = await reqBanner();
      if (req.data.code == 200) {
        this.imgArr = req.data.banners;
      }
    },
    playlist: async function() {
      let values = {
        limit: 6
      };
      const req = await reqPersonalized(values);
      if (req.data.code == 200) {
        this.recommendArr = req.data.result;
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.recommend-content {
  height: 100%;
}
</style>