<template>
  <div class="goodsdesc">
    <h3>{{goodsinfos.title}}</h3>
    <hr>
    <div class="content" v-html="goodsinfos.content"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsinfos: []
    };
  },
  created() {
    this.getgoodsinfos();
  },
  methods: {
    getgoodsinfos() {
      this.$http.get("api/goods/getdesc/" + this.$route.params.id).then(
        res => {
          if (res.body.status === 0) {
            console.log(res.bodyText);

            this.goodsinfos = res.body.message[0];
            console.log(this.goodsinfos);
          }
        },
        res => {}
      );
    }
  }
};
</script>

<style lang="scss">
.goodsdesc {
  padding: 8px;
  h3 {
    font-size: 16px;
    color: #226aff;
    text-align: center;
    margin: 15px 0;
  }
  .content {
    img {
      width: 100%;
    }
  }
}
</style>
