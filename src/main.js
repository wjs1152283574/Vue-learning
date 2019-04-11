import Vue from 'vue'
import app from './app.vue'
import MintUI from 'mint-ui'
import VueRouter from 'vue-router'
import router from './router'
import Vueresource from "vue-resource"
import 'mint-ui/lib/style.css'
import VuePreview from 'vue-preview'

Vue.use(VuePreview)
import './lib/Mui/css/mui.css'
import './lib/Mui/css/icons-extra.css'
import './lib/Mui/js/mui.min.js'

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
Vue.component(Header.name, Header); //导入时间格式插件
import moment from 'moment'
//定义全局过滤器
Vue.filter("timeF", function (timestr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(timestr).format(pattern)
})
var vm = new Vue({
  el: "#app",
  render: c => c(app),
  router
})
