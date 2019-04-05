import Vue from 'vue'
import app from './app.vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import './lib/Mui/css/mui.css'

Vue.use(MintUI);
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);


var vm = new Vue({
    el:"#app",
    render:c=>c(app)
})