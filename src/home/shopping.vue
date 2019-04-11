<template>
  <div class="goodslist">
    <router-link
      :to="'/home/goodsinfo/' + item.id "
      class="goods-item"
      v-for="item in goodslist"
      :key="item.id"
    >
      <img :src="item.img_url" alt>
      <h1 class="title">{{item.title}}</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{item.sell_price}}</span>
          <span class="old">￥{{item.market_price}}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{item.stock_quantity}}件</span>
        </p>
      </div>
    </router-link>
    <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodslist: [],
      pageindex: 1
    };
  },
  created() {
    this.getgoodslist();
  },
  methods: {
    getgoodslist() {
      //获取商品列表
      this.$http.get("api/getgoods?pageindex=" + this.pageindex).then(
        res => {
          if (res.body.status === 0) {
            this.goodslist = this.goodslist.concat(res.body.message);
          }
        },
        res => {}
      );
    },
    getMore() {
      this.pageindex++;
      this.getgoodslist();
    }
  }
};
</script>

<style lang="scss" scoped>
.goodslist {
  display: flex;
  flex-wrap: wrap;
  padding: 8px;
  justify-content: space-between;
  .goods-item {
    min-height: 293px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2px;
    border: 1px solid #ccc;
    width: 49%;
    box-shadow: 0 0 8px #ccc;
    margin: 5px 0;
    img {
      width: 100%;
    }
    .title {
      font-size: 14px;
    }
  }
}

.info {
  background-color: #ccc;
  p {
    margin: 0;
    padding: 5px;
  }
  .price {
    .now {
      color: red;
      font-weight: bold;
      font-size: 10px;
    }
    .old {
      text-decoration: line-through;
      font-size: 12px;
      margin-left: 10px;
    }
  }
  .sell {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }
}
</style>
