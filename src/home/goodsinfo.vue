<template>
  <div class="goodsinfo-container">
    <div class="mui-card">
      <swiper :lunbolist="lunboimgage" :isFull="false"></swiper>
    </div>

    <div class="mui-card">
      <div class="mui-card-header">页眉</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）</div>
      </div>
    </div>

    <div class="mui-card">
      <div
        class="mui-card-header mui-card-media"
        style="height:40vw;background-image:url(../images/cbd.jpg)"
      ></div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>Posted on January 18, 2016</p>
          <p style="color: #333;">这里显示文章摘要，让读者对文章内容有个粗略的概念...</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <a class="mui-card-link">Like</a>
        <a class="mui-card-link">Read more</a>
      </div>
    </div>
  </div>
</template>

<script>
import swiper from "../hmoecomponents/swiper.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      lunboimgage: [],
      flag: "true"
    };
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    getLunbotu() {
      this.$http.get("api/getthumimages/" + this.id).then(
        res => {
          if (res.body.status === 0) {
            res.body.message.forEach(item => {
              item.img = item.src;
            });
            this.lunboimgage = res.body.message;
          }
        },
        res => {}
      );
    }
  },
  components: {
    swiper
  }
};
</script>

<style lang="scss" scoped>
.goodsinfo-container {
  background-color: #ccc;
  overflow-y: hidden;
}
</style>
