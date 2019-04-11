//，路由模块抽离：需要注意路径问题。以下为标准写法
import VueRouter from 'vue-router'
import Home from './hmoecomponents/home.vue'
import Menber from './hmoecomponents/member.vue'
import Shopcar from './hmoecomponents/shopcar.vue'
import Search from './hmoecomponents/search.vue'
import Newlist from './home/newslist.vue'
import Cantact from './home/cantacts.vue'
import Medias from './home/medias.vue'
import Photos from './home/photos.vue'
import Shopping from './home/shopping.vue'
import Newsinfo from './home/newsinfo.vue'
import Goodsinfo from './home/goodsinfo.vue'

var router = new VueRouter({
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/member',
      component: Menber
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/shopcar',
      component: Shopcar
    },
    {
      path: '/home/newslist',
      component: Newlist
    },
    {
      path: '/home/photos',
      component: Photos
    },
    {
      path: '/home/shopping',
      component: Shopping
    },
    {
      path: '/home/medias',
      component: Medias
    },
    {
      path: '/home/cantacts',
      component: Cantact
    },
    {
      path: '/home/newsinfo/:id',
      component: Newsinfo
    },
    {
      path: '/home/goodsinfo/:id',
      component: Goodsinfo
    }
  ],
  linkActiveClass: "mui-active"
})

export default router
