<template>
  <div class="song">
    <div class="song-bg">
      <div class="song-head">
        <div class="icon-back">
          <a href="javascript:;">
            <i class="icon iconfont iconfanhui1"></i>
          </a>
        </div>
        <div class="text">
          <div>
            <h3>歌单</h3>
            <p>编辑推荐：优质华语新歌，网易云音乐每周二精选</p>
          </div>
        </div>
        <div class="icon-search">
          <a href="javascript:;">
            <i class="icon iconfont iconsousuo"></i>
          </a>
        </div>
        <div class="icon-more">
          <a href="javascript:;">
            <i class="icon iconfont icongengduoxiao"></i>
          </a>
        </div>
      </div>
      <div class="song-body">
        <div class="bg">
          <img src="https://p1.music.126.net/Y6Pxw7CWa4vnsEYNm8jWww==/109951164446788933.jpg" alt />
          <span>
            <i class="icon iconfont iconbofangsanjiaoxing"></i> 6.5亿
          </span>
        </div>
        <div class="text">
          <h2>华语速爆新歌最新华语音乐推荐</h2>
          <div>
            <img src="https://p1.music.126.net/Y6Pxw7CWa4vnsEYNm8jWww==/109951164446788933.jpg" alt /> 网易云音乐
          </div>
          <p>编辑推荐：优质华语新歌，网易云音乐每周二精选</p>
        </div>
      </div>
    </div>
    <div class="song-list">
      <div class="title">
        <div class="text">
          <i class="icon iconfont iconzanting"></i> 播放全部
          <span>(共20首)</span>
        </div>
        <div class="btn-collect">
          <a href="javascript:;">
            <i class="icon iconfont iconcreate_new"></i> 收藏(312.5万)
          </a>
        </div>
      </div>
      <ul class="body">
        <li>
          <div class=""></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/css/variable.styl';

.song {
  position: fixed;
  top: 0px;
  left: 0px;
  bottom: 60px;
  z-index: 9;
  background: #fff;
  width: 100%;

  .song-bg {
    width: 100%;
    background: url('https://p1.music.126.net/Y6Pxw7CWa4vnsEYNm8jWww==/109951164446788933.jpg');
    transform-origin: top;
    background-size: cover;
    padding: 15px 45px 15px;
    box-sizing: border-box;

    .song-head {
      position: relative;

      .icon-back, .icon-search, .icon-more {
        position: absolute;
        top: 0px;
        width: 40px;
        height: 40px;
        flex-center();

        a {
          i {
            font-size: 32px;
            color: #ffffff;
          }
        }
      }

      .icon-back {
        left: 0px;
      }

      .icon-search {
        right: 40px;
      }

      .icon-more {
        right: 0px;
      }

      .text {
        padding: 0 90px 0 50px;
        box-sizing: border-box;
        height: 40px;
        display: flex;
        align-items: center;
        no-wrap();
        width: 100%;

        div {
          width: 100%;

          h3 {
            font-size: 18px;
            color: #ffffff;
            margin-bottom: 5px;
          }

          p {
            font-size: 12px;
            color: #eee;
            no-wrap();
          }
        }
      }
    }

    .song-body {
      display: flex;
      position: relative;
      margin-top: 20px;
      height: 100%;

      .bg {
        width: 120px;
        height: 130px;
        margin-right: 20px;
        position: relative;
        border-radius: 10px;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
        }

        span {
          position: absolute;
          right: 10px;
          top: 4px;
          color: #ffffff;
          font-size: 12px;
          flex-center();
        }
      }

      .text {
        flex: 1;
        padding-right: 10px;

        h2 {
          font-size: 18px;
          font-weight: bold;
          color: #ffffff;
          line-height: 24px;
        }

        div {
          display: flex;
          align-items: center;
          color: #ffffff;
          font-size: 14px;
          margin: 10px 0 10px;

          img {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            margin-right: 6px;
          }
        }

        p {
          font-size: 12px;
          line-height: 16px;
          color: #eee;
        }
      }
    }
  }

  .song-list {
    background: #ffffff;
    border-radius: 20px;
    position: absolute;
    top: 220px;
    left: 0px;
    width: 100%;
    height: 200px;
    padding: 10px 15px 20px;
    box-sizing: border-box;

    .title {
      overflow: hidden;

      .text {
        float: left;
        color: #474747;
        font-size: 16px;
        height: 40px;
        display: flex;
        align-items: center;

        i {
          color: #474747;
          font-size: 26px;
          margin-right: 4px;
        }

        span {
          color: #a0a09e;
          font-size: 14px;
          margin-left: 2px;
        }
      }

      .btn-collect {
        float: right;
        height: 40px;
        background: #ff4146;
        border-radius: 20px;
        flex-center();
        padding: 0 15px;

        a {
          display: block;
          color: #ffffff;
          font-size: 14px;

          i {
            font-size: 14px;
          }
        }
      }
    }
  }

  .song-content {
    height: 100%;
    overflow: hidden;
  }
}
</style>