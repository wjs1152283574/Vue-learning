<template>
  <div class="shopcar-container">
    <div class="goodslist">
      <div class="mui-card" v-for="(item, index) in getGoodsLists" :key="item.id">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <!-- 以下v-modal是mintui里面提供的语法 --绑定一个布尔值-->
            <mt-switch
              v-model="$store.getters.getSelected[item.id]"
              @change="selected(item.id,$store.getters.getSelected[item.id])"
            ></mt-switch>
            <img :src="item.thumb_path" alt>
            <div class="info">
              <h1>{{item.title}}</h1>
              <p class="innerp">
                <span class="price">￥{{item.sell_price}}</span>
                <shopcarNumBox :count="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></shopcarNumBox>
                <a href="#" @click.prevent="delated(item.id,index)">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner jiesuan">
            <div class="left">
              <p>总计(不含运费)</p>
              <p>
                已勾选
                <span class="red">{{$store.getters.getGoodsCountAndCost.count}}</span> 件，总价 ￥
                <span class="red">{{$store.getters.getGoodsCountAndCost.cost}}</span>
              </p>
            </div>
            <mt-button type="danger">去结算</mt-button>
          </div>
        </div>
      </div>
    </div>
    {{$store.getters.getSelected}}
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
    },
    delated(id, index) {
      this.getGoodsLists.splice(index, 1);
      this.$store.commit("remove", id);
    },
    selected(id, val) {
      //每当switch开关状态改变时，传入对应ID和状态值
      //console.log(id + "----" + val);
      this.$store.commit("updateSelected", { id: id, selected: val });
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
    .innerp {
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
    // justify-content: space-between;
  }
}
.jiesuan {
  display: flex;
  justify-content: space-between;
}
.red {
  color: red;
}
</style>
