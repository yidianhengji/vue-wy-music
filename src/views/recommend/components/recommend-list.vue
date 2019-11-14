<template>
  <div class="recommend">
    <div class="recommend-title">
      <h3>推荐歌单</h3>
      <span>歌单广场</span>
    </div>
    <ul class="recommend-list">
      <li v-for="(item,index) in recommendArr" :key="index" @click="open(item.id)">
        <div class="bg">
          <span>
            <i class="icon iconfont iconbofangsanjiaoxing"></i>
            {{countNumFn(item.playCount)}}
          </span>
          <img :src="item.picUrl" alt />
        </div>
        <p class="details">{{item.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { reqPersonalized } from "@/api";
import { countNum } from "@/utils/common";
export default {
  data() {
    return {
      recommendArr: []
    };
  },
  mounted() {
    this.playlist();
  },
  methods: {
    open(id) {
      this.$router.push({ path: "/song", query: { id } });
    },
    playlist: async function() {
      let values = {
        limit: 6
      };
      const req = await reqPersonalized(values);
      if (req.data.code == 200) {
        this.recommendArr = req.data.result;
      }
    },
    countNumFn(num) {
      return countNum(num);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/css/variable.styl';

.recommend {
  border-top: 1px solid #e3e3e3;
  padding: 15px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;

  .recommend-title {
    h3 {
      font-size: 20px;
      font-weight: bold;
      color: #3f3f3f;
    }

    span {
      border: 1px solid #eaeaea;
      height: 32px;
      line-height: 32px;
      border-radius: 16px;
      padding: 0 14px;
      color: #363636;
      font-size: 14px;
      position: absolute;
      right: 15px;
      top: 8px;
    }
  }

  .recommend-list {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;

    li {
      flex: 0 0 calc(33.3333% - 7px);
      margin-right: 10px;
      margin-bottom: 20px;

      &:nth-child(3n+3) {
        margin-right: 0px;
      }

      &:nth-child(1n+3) {
        margin-bottom: 0px;
      }

      .bg {
        position: relative;
        width: 100%;

        img {
          width: 100%;
          height: 100%;
          border-radius: 10px;
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

      .details {
        color: #313131;
        font-size: 14px;
        line-height: 18px;
        margin: 5px 0 0px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
}
</style>