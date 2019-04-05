<template>
  <div class="homecomponent-container">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunboimg" :key="item.id">
        <img :src="item.img" alt>
      </mt-swipe-item>
    </mt-swipe>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-home"></span>
          <div class="mui-media-body">新闻资讯</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-email">
            
          </span>
          <div class="mui-media-body">图片分享</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-chatbubble"></span>
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-location"></span>
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-search"></span>
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-phone"></span>
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
      
    </ul>
  </div>
</template>

<script>
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
      this.$http.get("http://www.liulongbin.top:3005/api/getlunbo").then(
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
