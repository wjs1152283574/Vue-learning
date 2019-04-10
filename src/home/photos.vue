<template>
  <div>
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            :class="['mui-control-item',item.id ==0?'mui-active':'']"
            href="#item2mobile"
            data-wid="tab-top-subpage-2.html"
            v-for="item in photolist"
            :key="item.id"
            @click="getcontents(item.id)"
          >{{item.title}}</a>
        </div>
      </div>
    </div>
    <ul class="photo-list">
      <li class="photos-list" v-for="item in list" :key="item.id">
        <img v-lazy="item.img_url">
        <div class="info">
          <h1 class="info-title">{{item.title}}</h1>
          <div class="info-body">{{item.zhaiyao}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import mui from "../lib/Mui/js/mui.min.js";

export default {
  data() {
    return {
      photolist: [],
      list: []
    };
  },
  mounted() {
    //组件挂载完毕后执行这个钩子函数
    mui(".mui-scroll-wrapper").scroll({
      //当组件中的DOM结构被渲染好并放到页面中后才初始化这个滚动条
      deceleration: 0.0005
    });
    this.getAllphotos();
    this.getcontents(0);
  },
  methods: {
    getAllphotos() {
      this.$http.get("api/getimgcategory").then(
        res => {
          if (res.body.status === 0) {
            res.body.message.unshift({ title: "全部", id: 0 });
            this.photolist = res.body.message;
          }
        },
        res => {}
      );
    },
    getcontents(getid) {
      this.$http.get("api/getimages/" + getid).then(
        res => {
          if (res.body.status === 0) {
            this.list = res.body.message;
            console.log(res.bodyText);
          }
        },
        res => {}
      );
    }
  }
};
</script>

<style lang="scss" scoped>
img[lazy="loading"] {
  width: 40px;
  height: 300px;
  margin: auto;
}

.photo-list {
  margin: 0;
  padding: 0 5px;
  padding-bottom: 0;
  .photos-list {
    position: relative;
    list-style: none;
    margin: 0 5px;
    box-shadow: 0 0 9px #999;
    margin-bottom: 10px;
    .info {
      color: white;
      text-align: left;
      position: absolute;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.4);
      max-height: 84px;
      .info-title {
        font-size: 14px;
      }
      .info-body {
        font-size: 13px;
      }
    }
  }
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
