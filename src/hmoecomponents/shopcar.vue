<template>
  <div class="shopcar-container">
    <div class="goodslist">
      <div class="mui-card" v-for="item in getGoodsLists" :key="item.id">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch></mt-switch>
            <img :src="item.thumb_path" alt>
            <div class="info">
              <h1>{{item.title}}</h1>
              <p>
                <span class="price">￥{{item.sell_price}}</span>
                <shopcarNumBox></shopcarNumBox>
                <a href="#">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="mui-card">
        <div class="mui-card-content">
          <div
            class="mui-card-content-inner"
          >这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等</div>
        </div>
      </div>-->
    </div>
  </div>
</template>

<script>
import shopcarNumBox from "./shopcarNumBox.vue";
export default {
  data() {
    return {
      getGoodsLists: []
    };
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    getGoodsList() {
      //访问获取store中的car中的数据即可---获取商品ID
      var idArr = [];
      this.$store.state.car.forEach(item => {
        idArr.push(item.id);
      });
      if (idArr.length == 0) {
        return;
      }
      this.$http.get("api/goods/getshopcarlist/" + idArr.join(",")).then(
        res => {
          if (res.body.status === 0) {
            this.getGoodsLists = res.body.message;
          }
        },
        res => {}
      );
    }
  },
  components: {
    shopcarNumBox
  }
};
</script>

<style lang="scss" scoped>
.shopcar-container {
  background-color: #eee;
  overflow: hidden;
  .goodslist {
    img {
      width: 60px;
      height: 60px;
     
    }
    p {
      display: flex;
      justify-content: space-between;
      margin-bottom: 2px;
    }
    h1 {
      font-size: 12px;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .price {
        color: red;
      }
    }
  }
  .mui-card-content-inner {
    display: flex;
    align-items: center;
  }
}
</style>
