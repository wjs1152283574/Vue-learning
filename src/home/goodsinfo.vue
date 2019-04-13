<template>
  <div class="goodsinfo-container">
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-show="ballShow" ref="ball"></div>
    </transition>
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
            <numberBox @getCount="getSelectNumber" :max="goodsinfo.stock_quantity!='undefined'?goodsinfo.stock_quantity:''"></numberBox>
          </p>
          <P>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
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
      goodsinfo: [],
      ballShow: false,
      selectCount:1   //保存选中的商品数量，默认1
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
      this.$router.push({ name: "goodscomment", params: { id } }); //编程式导航：不依靠《router-link》而是靠点击来导航
    },
    goinfos(id) {
      this.$router.push({ name: "goodsinfos", params: { id } }); //编程式导航
    },
    addToShopCar() {
      this.ballShow = !this.ballShow;
      var goodsinfo = { //拼接出一个需要保存到store中的一个商品的数据
          id:this.id,
          count:this.selectCount,
          price:this.goodsinfo.sell_price,
          selected:true
      };
      //此时需要调用mutations中的方法来处理数据--提交保存到store中的state中的car里面
      this.$store.commit("addToCar",goodsinfo)
    },
    beforeEnter(el) {
      el.style.transform = "translate(0,0)";
    },
    enter(el, done) {
      const ballposition = this.$refs.ball.getBoundingClientRect(); //这是DOM对象方法，能获取元素相对于页面的坐标getBoundingClientRect()
      const badgePosition = document
        .getElementById("homeBall")
        .getBoundingClientRect();
      const xdis = badgePosition.left - ballposition.left;
      const ydis = badgePosition.top - ballposition.top;

      el.offsetWidth;
      el.style.transform = `translate(${xdis}px, ${ydis}px)`;
      el.style.transition = "all .6s cubic-bezier(.4,-0.3,1,.68)"; //动画效果
      done(); //代表引用afterEnter（）函数
    },
    afterEnter(el) {
      this.ballShow = !this.ballShow;
    },
    getSelectNumber(conut){
        this.selectCount = conut;
        //console.log(`拿到的数量${conut}`);
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
.ball {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  z-index: 99;
  position: absolute;
  background-color: red;
  top: 380px;
  left: 78px;
}
</style>
