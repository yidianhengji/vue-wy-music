<template>
  <div>
    <Carousel></Carousel>
    <ActionBar></ActionBar>
    <RecommendList></RecommendList>
  </div>
</template>

<script>
import Carousel from "./components/carousel";
import ActionBar from "./components/action-bar";
import RecommendList from "./components/recommend-list";
export default {
  components: {
    Carousel,
    ActionBar,
    RecommendList
  }
};
</script>