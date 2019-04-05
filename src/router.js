//，路由模块抽离：需要注意路径问题。以下为标准写法
import VueRouter from 'vue-router'
import Home from './hmoecomponents/home.vue'
import Menber from './hmoecomponents/member.vue'
import Shopcar from './hmoecomponents/shopcar.vue'
import Search from './hmoecomponents/search.vue'
var router = new VueRouter({
    routes:[
        {path:'/', redirect:'/home'},
        {path:'/home',component:Home},
        {path:'/member',component:Menber},
        {path:'/search',component:Search},
        {path:'/shopcar',component:Shopcar},
    ],
    linkActiveClass:"mui-active"
})

export default router