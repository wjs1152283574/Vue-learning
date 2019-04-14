<template>
  <div class="app-container" style="background-color:withe">
    <mt-header style="z-index:99;" fixed title="One Of Casso`s Objects">
      <span slot="left">
        <mt-button icon="back" @click="goBack" v-show="flag">返回</mt-button>
      </span>
    </mt-header>

    <transition mode="out-in">
      <router-view></router-view>
    </transition>

    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>

      <router-link class="mui-tab-item" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" id="homeBall">{{$store.getters.getAllCount}}</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>

      <router-link class="mui-tab-item" to="search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      flag: ""
    };
  },
  created() {
    //路由不在首页位置，但是刷新了页面--路由地址并未改变，所以无法监听到，即需要在页面创建的时候也进行一次判断
    this.flag = this.$route.path === "/home" ? false : true;
  },
  methods: {
    goBack() {
      this.$router.go(-1); //编程式导航
    }
  },
  watch: {
    "$route.path": function(nval) {
      //监听路由地址：当路由回到首页的时候影藏“返回按钮”
      if (nval === "/home") {
        this.flag = false;
      } else {
        this.flag = true;
      }
    }
  }
};
</script>  


<style lang="scss" scoped>
.app-container {
  overflow-x: hidden;
  padding-top: 40px;
  padding-bottom: 50px;
}
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}
</style>
