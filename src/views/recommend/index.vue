<template>
  <Scroll class="recommend-content">
    <Carousel></Carousel>
    <ActionBar></ActionBar>
    <RecommendList></RecommendList>
  </Scroll>
</template>

<script>
import Carousel from "./components/carousel";
import ActionBar from "./components/action-bar";
import RecommendList from "./components/recommend-list";
import Scroll from "../../components/scroll/scroll";
export default {
  components: {
    Carousel,
    ActionBar,
    RecommendList,
    Scroll
  }
};
</script>

<style lang="stylus" scoped>
.recommend-content {
  height: 100%;
  overflow: hidden;
}
</style>