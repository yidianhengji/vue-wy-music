<template>
  <div class="carousel">
    <Swipe height="180px" v-model="initialIndex" autoplay>
      <SwipeItem v-for="(item,index) in imgArr" :key="index" :name="index">
        <img style="width: 100%; height:100%;" :src="item.url" />
      </SwipeItem>
    </Swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      initialIndex: 0,
      imgArr: [
        {
          url:
            "http://p1.music.126.net/KP4T1dHHiH0nYdTI0ublVg==/109951164470734422.jpg?imageView&quality=89"
        },
        {
          url:
            "http://p1.music.126.net/v9HRHiUWjx43IfF5t6VpHw==/109951164470689529.jpg?imageView&quality=89"
        },
        {
          url:
            "http://p1.music.126.net/A9HPyPW-JWplFLZm2x2cBA==/109951164471348282.jpg?imageView&quality=89"
        },
        {
          url:
            "http://p1.music.126.net/ZiCk9R2hHmbqT1-__7i7jQ==/109951164471046101.jpg?imageView&quality=89"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.carousel {
  padding: 0 15px;
}
</style>