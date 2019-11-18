<template>
  <div class="song">
    <div class="song-head">
      <div class="icon-back">
        <a href="javascript:;" @click="back">
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
    <div class="song-bg" ref="bgImage" v-if="playlist">
      <div class="song-body">
        <div class="bg">
          <img ref="conf0" :src="playlist.coverImgUrl" alt />
          <span>
            <i class="icon iconfont iconbofangsanjiaoxing"></i> 6.5亿
          </span>
        </div>
        <div class="text">
          <h2>{{playlist.name}}</h2>
          <div>
            <img :src="playlist.creator.avatarUrl" alt />
            {{playlist.creator.nickname}}
          </div>
          <p v-html="playlist.description"></p>
        </div>
      </div>
    </div>
    <div class="song-list" ref="list">
      <div class="title">
        <div class="text">
          <i class="icon iconfont iconzanting"></i> 播放全部
          <span>(共{{playlist.tracks.length}}首)</span>
        </div>
        <div class="btn-collect">
          <a href="javascript:;">
            <i class="icon iconfont iconcreate_new"></i> 收藏(312.5万)
          </a>
        </div>
      </div>
      <Scroll
        class="body-height"
        @scroll="scroll"
        :before-scroll="beforeScroll"
        :listen-scroll="listenScroll"
      >
        <ul class="body">
          <li v-for="(item,index) in playlist.tracks" :key="index" @click="open(index)">
            <div class="order-num">{{index+1}}</div>
            <div class="text">
              <h2>
                {{item.name}}
                <!-- <span>{{item.ar[0].name}}</span> -->
              </h2>
              <p>
                <!-- <span class="red">独家</span>
                <span class="yellow">SQ</span>-->
                {{item.ar[0].name}}-{{item.al.name}}
              </p>
            </div>
            <div class="icon-list">
              <a href="javascript:;">
                <i class="icon iconfont iconbofangsanjiaoxing"></i>
              </a>
              <a href="javascript:;">
                <i class="icon iconfont icongengduoxiao"></i>
              </a>
            </div>
          </li>
        </ul>
      </Scroll>
    </div>
  </div>
</template>

<script>
import Scroll from "@/components/scroll/scroll";
import { mapGetters, mapMutations } from "vuex";
import { reqSongUrl } from "@/api";
export default {
  components: {
    Scroll
  },
  data() {
    return {
      beforeScroll: true,
      listenScroll: true
    };
  },
  computed: {
    ...mapGetters({
      playlist: "playlist"
    })
  },
  mounted() {
    if (!this.playlist) {
      this.$router.push({ path: `/` });
    }
    this.imageHeight = this.$refs.bgImage.clientHeight;
    this.$refs.list.style.top = `${this.imageHeight - 20}px`;
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    scroll(pos) {
      console.log(pos);
    },
    open: async function(index) {
      let id = this.playlist.trackIds[index].id;
      let desc = this.playlist.tracks[index];
      let values = { id };
      const req = await reqSongUrl(values);
      if (req.data.code == 200) {
        let data = {
          id: id,
          url: req.data.data[0].url,
          name: desc.name,
          picUrl: desc.al.picUrl,
          author: desc.ar[0].name + "-" + desc.al.name
        };
        this.$store.dispatch("app/songData", data);
        this.$store.dispatch("app/toggleOpenedPlayer");
      }
    }
  },
  watch: {
    playlist() {
      this.$router.push({ path: `/` });
    }
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
  z-index: 10;
  background: #fff;
  width: 100%;
  overflow: hidden;

  .song-head {
    position: fixed;
    left: 15px;
    right: 15px;
    top: 10px;

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

  .song-bg {
    width: 100%;
    background: url('https://p1.music.126.net/Y6Pxw7CWa4vnsEYNm8jWww==/109951164446788933.jpg');
    background: rgba(0, 0, 0, 0.2);
    transform-origin: top;
    background-size: cover;
    padding: 15px 15px 35px;
    box-sizing: border-box;

    .song-body {
      display: flex;
      position: relative;
      margin-top: 50px;
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
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }
    }
  }

  .song-list {
    background: #ffffff;
    border-radius: 20px;
    width: 100%;
    padding: 10px 15px 0px;
    box-sizing: border-box;
    position: absolute;
    left: 0px;
    bottom: 0px;

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

    .body-height {
      height: calc(100% - 40px);
      overflow: hidden;

      .body {
        li {
          position: relative;
          display: flex;
          align-items: center;
          padding: 10px 0;

          .order-num {
            font-size: 14px;
            color: #9c9c9c;
            width: 30px;
            height: 40px;
            display: flex;
            align-items: center;
          }

          .text {
            flex: 1;
            height: 40px;
            overflow: hidden;
            padding-right: 10px;

            h2 {
              color: #363636;
              font-size: 15px;
              font-weight: 500;
              margin-bottom: 6px;
              no-wrap();

              span {
                color: #a7a7a7;
              }
            }

            p {
              font-size: 12px;
              color: #828284;
              no-wrap();
              display: flex;
              align-items: center;

              span {
                padding: 0 2px;
                border-radius: 2px;
                margin-right: 4px;
              }

              .red {
                border: 1px solid #db525a;
                color: #db525a;
              }

              .yellow {
                border: 1px solid #df7c39;
                color: #df7c39;
              }
            }
          }

          .icon-list {
            width: 60px;
            height: 40px;
            display: flex;

            a {
              width: 30px;
              display: block;
              height: 100%;
              flex-center();
              color: #b8b8b8;

              i {
                font-size: 24px;
              }
            }
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