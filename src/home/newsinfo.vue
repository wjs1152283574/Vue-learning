<template>
  <div class="newsinfo-innerdiv">
    <!-- <h3>这是新闻详情组件--{{ $route.params.id }}</h3> 获取ID-->
    <h3 class="title">{{newsinfo.title}}</h3>
    <p class="pinner">
      <span>发表时间：{{newsinfo.add_time | timeF}}</span>
      <span>点击：{{newsinfo.click}} 次</span>
    </p>
    <div class="content" v-html="newsinfo.content"></div>
    <comments :id="id"></comments>
  </div>
</template>

<script>
import coments from "../puplicComponents/arguement.vue";
export default {
  data() {
    return {
      id: this.$route.params.id, //获取ID
      newsinfo: {}
    };
  },
  created() {
    this.getnewsinfos();
  },
  methods: {
    getnewsinfos() {
      this.$http.get("api/getnew/" + this.id).then(
        res => {
          if (res.body.status === 0) {
            this.newsinfo = res.body.message[0];
            //console.log(res.bodyText);
          }
        },
        res => {
          Toast("获取新闻失败！");
        }
      );
    }
  },
  components: {
    comments: coments
  }
};
</script>

<style lang="scss" scoped>
.newsinfo-innerdiv {
  padding: 0 4px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .pinner {
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
  .content {
  }
}
</style>
