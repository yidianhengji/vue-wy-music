<template>
  <div style="background: red; height: 100%;width: 100%;">
    <div class="carousel">
      <div class="carousel-container">
        <div class="carousel-item" style="transform: translate3d(0px, 0px, 0px); transition: all 300ms ease 0s;">
          <img
            src="http://p1.music.126.net/KP4T1dHHiH0nYdTI0ublVg==/109951164470734422.jpg?imageView&quality=89"
            alt
          />
        </div>
        <div class="carousel-item" style="transform: translate3d(375px, 0px, 0px); transition: all 300ms 0s;">
          <img
            src="http://p1.music.126.net/v9HRHiUWjx43IfF5t6VpHw==/109951164470689529.jpg?imageView&quality=89"
            alt
          />
        </div>
        <div class="carousel-item" style="transform: translate3d(750px, 0px, 0px); transition: all 300ms 0s;">
          <img
            src="http://p1.music.126.net/A9HPyPW-JWplFLZm2x2cBA==/109951164471348282.jpg?imageView&quality=89"
            alt
          />
        </div>
        <div class="carousel-item" style="transform: translate3d(1125px, 0px, 0px); transition: all 300ms 0s;">
          <img
            src="http://p1.music.126.net/ZiCk9R2hHmbqT1-__7i7jQ==/109951164471046101.jpg?imageView&quality=89"
            alt
          />
        </div>
      </div>
      <ul class="carousel-indicators">
        <li class="active"></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0
    };
  },
  methods: {
    test() {
      this.$message({
        message: "请先勾选同意《用户协议》《隐私政策》《儿童隐私政策》",
        duration: 2000
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.carousel {
  width: 100%;
  height: 200px;

  .carousel-container {
    height: 100%;
    width: 100%;
    position: relative;

    .carousel-item {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: inline-block;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>