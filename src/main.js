import Vue from 'vue'
import app from './app.vue'
import MintUI from 'mint-ui'
import VueRouter from 'vue-router'
import router from './router'
import Vueresource from "vue-resource"
import 'mint-ui/lib/style.css'
import VuePreview from 'vue-preview' //缩略图插件
import Vuex from 'vuex'
import './lib/Mui/css/mui.css'
import './lib/Mui/css/icons-extra.css'
import './lib/Mui/js/mui.min.js'
Vue.use(Vuex)
Vue.use(VuePreview)
Vue.use(Vueresource)
Vue.http.options.root = 'http://www.liulongbin.top:3005' //配置根路径
Vue.http.options.emulateJSON = true; //全局设计post 表单格式
Vue.use(VueRouter)
Vue.use(MintUI);
import {
  Header,
  Button
} from 'mint-ui';
Vue.use(Button.name, Button)
Vue.component(Header.name, Header);
import moment from 'moment' //导入时间格式插件

Vue.filter("timeF", function (timestr, pattern = "YYYY-MM-DD HH:mm:ss") { //定义全局过滤器*---使用moment插件定义
  return moment(timestr).format(pattern)
})
//每次进入网站都会读取本地存储中的数据car  注意：需要添加判断--如果car为空则手动返回一个[]空数组，不然会报市局类型错误
//JSON.parse把本地存储的字符串转成数组/对象
var car = JSON.parse(localStorage.getItem("car") || '[]')
var store = new Vuex.Store({ //全局注册注册一个Vuex实例 ---项目组件公共数据的管理工具 --Store 首字母大写。。。
  state: { //state属性类似于DATA属性，是用来存储公共数据的 调用：this.$store.state.***
    car: car
  },
  mutations: { //mutations类似于methods  ，是用来写业务逻辑的   不推荐让组件们直接操作state中的数据--不好维护; 应该通过mutations里面的方法操作数据
    //组件们调用mutations里面的方法的书写格式为：this.$store.commit('mutations内的方法名')
    //mutations里的方法函数的第一个参数只能是state,第二个参数是组件们传过来的；注意：mutations最多只接受两个参数
    addToCar(state, goodsinfo) { //点击“加入购物车”把商品数据添加到“car”
      var flag = false;
      state.car.some(item => {
        if (item.id == goodsinfo.id) {
          item.count += parseInt(goodsinfo.count);
          flag = true;
          return true;
        }
      });
      if (!flag) {
        state.car.push(goodsinfo)
      };
      localStorage.setItem("car", JSON.stringify(state.car)); //商品数据存储到本地存储--需要转成字符串才可以存储到本地
    }

  },
  getters: { //如果store中state的数据在向外提供的时候需要做一层包装则推荐使用getters来定义包装函数/getters里的函数接受的参数跟mutations一样
    //如果组件们需要使用getters，则用this.$store.getters.getters内部的方法（参数）
    getAllCount(state) { //在徽标里面直接使用差值表达式调用{{$store.getters.getAllCount}}
      var c = 0; //先初始化一个值；然后把car里面的每一项的count相加--实现徽标显示所有已添加的商品的数量（所有不同商品）
      state.car.forEach(item => {
        c += item.count;
      });
      return c;
    }
  }
})

var vm = new Vue({
  el: "#app",
  render: c => c(app),
  router, //挂载抽离的路由文件--router.js
  store //挂载vuex实例--store状态管理对象
})
