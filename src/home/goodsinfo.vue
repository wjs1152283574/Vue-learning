<template>
  <div class="goodsinfo-container">
    <div class="mui-card">
      <swiper :lunbolist="lunboimgage" :isFull="false"></swiper>
    </div>

    <div class="mui-card">
      <div class="mui-card-header">{{goodsinfo.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：
            <del>￥{{goodsinfo.market_price}}</del> &nbsp;&nbsp;销售价:
            <span class="now_price">￥{{goodsinfo.sell_price}}</span>
          </p>
          <p>
            购买数量：
            <numberBox></numberBox>
          </p>
          <P>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small">加入购物车</mt-button>
          </P>
        </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号:{{goodsinfo.goods_no}}</p>
          <p>库存情况:{{goodsinfo.stock_quantity}}</p>
          <p>上架时间:{{goodsinfo.add_time | timeF}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" @click="goinfos(id)">图文介绍</mt-button>
        <mt-button type="danger" size="large" @click="goincomment(id)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import swiper from "../hmoecomponents/swiper.vue";
import numberBox from "./numberBox.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      lunboimgage: [],
      flag: "true",
      goodsinfo: []
    };
  },
  created() {
    this.getLunbotu();
    this.getgoodsinfo();
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
    },
    getgoodsinfo() {
      this.$http.get("api/goods/getinfo/" + this.id).then(
        res => {
          if (res.body.status === 0) {
            this.goodsinfo = res.body.message[0];
            console.log(res.bodyText);
          }
        },
        res => {}
      );
    },
    goincomment(id) {
      this.$router.push({ name: "goodscomment", params: { id } });
    },
    goinfos(id) {
      this.$router.push({ name: "goodsinfos", params: { id } });
    }
  },
  components: {
    swiper,
    numberBox
  }
};
</script>

<style lang="scss" scoped>
.goodsinfo-container {
  background-color: #ccc;
  overflow-y: hidden;
}
.mui-card-footer {
  display: block;
  button {
    margin: 15px 0;
  }
}
.now_price {
  color: red;
}
</style>
