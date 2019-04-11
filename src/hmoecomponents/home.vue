<template>
  <div class="homecomponent-container">
    <swiper :lunbolist="lunboimg" :isFull="true"></swiper>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <span class="mui-icon mui-icon-pengyouquan"></span>
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photos">
          <span class="mui-icon mui-icon-image"></span>
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/shopping">
          <span class="mui-icon mui-icon-extra mui-icon-extra-gold"></span>
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/coments">
          <span class="mui-icon mui-icon-chat"></span>
          <div class="mui-media-body">留言反馈</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/medias">
          <span class="mui-icon mui-icon-extra mui-icon-extra-classroom"></span>
          <div class="mui-media-body">视频专区</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/cantacts">
          <span class="mui-icon mui-icon-extra mui-icon-extra-custom"></span>
          <div class="mui-media-body">联系我们</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import swiper from "./swiper.vue";
export default {
  data() {
    return {
      lunboimg: []
    };
  },
  created() {
    this.getimg();
    console.log(123456);
  },
  methods: {
    getimg() {
      this.$http.get("api/getlunbo").then(
        result => {
          console.log(result.body);
          if (result.body.status === 0) {
            this.lunboimg = result.body.message;
          }
        },
        res => {
          console.log("获取轮播图失败！");
        }
      );
    }
  },
  components: {
    swiper
  }
};
</script>

<style lang="scss" scoped>
.homecomponent-container {
  .mint-swipe {
    height: 200px;
    .mint-swipe-item {
      &:nth-child(1) {
        background-color: aqua;
      }
      &:nth-child(2) {
        background-color: aquamarine;
      }
      &:nth-child(3) {
        background-color: yellowgreen;
      }
    }
  }
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
