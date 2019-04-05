import Vue from 'vue'
import app from './app.vue'
import MintUI from 'mint-ui'
import VueRouter from 'vue-router'
import router from './router'
import Vueresource from "vue-resource"

import 'mint-ui/lib/style.css'

import './lib/Mui/css/mui.min.css'
import './lib/Mui/css/icons-extra.css'
import './lib/Mui/fonts/mui.ttf'
import './lib/Mui/fonts/mui-icons-extra.ttf'
Vue.use(Vueresource)
Vue.use(VueRouter)
Vue.use(MintUI);
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);


var vm = new Vue({
    el:"#app",
    render:c=>c(app),
    router
})