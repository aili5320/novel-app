import Vue from 'vue'
import VueRouter from 'vue-router'

import Books from '@/views/Books'
import BookCity from '@/views/BookCity'
import Friends from '@/views/Friends'
import Mine from '@/views/Mine'
import Login from '@/components/Mine/Login'
import Recovery from '@/components/Mine/Recovery'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component:Books,
    meta: {
      TabbarShow: true // 需要显示 底部导航
   }
  },
  {
    path:'/books',
    component:Books,
    meta: {
      TabbarShow: true // 需要显示 底部导航
   }
  },
  {
    path:'/bookcity',
    component:BookCity,
    meta: {
      TabbarShow: true // 需要显示 底部导航
   }
  },
  {
    path:'/friends',
    component:Friends,
    meta: {
      TabbarShow: true // 需要显示 底部导航
   }
  },
  {
    path:'/mine',
    component:Mine,
    meta: {
      TabbarShow: true // 需要显示 底部导航
   },
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/recovery',
    component:Recovery
  },
  {
    path:'/changePsw',
    component: ()=> import('@/components/Mine/ChangePsw')
  },
  {
    path:'/bookPage',
    component: ()=> import('@/components/BookInfo/BookPage')
  }
  
]

const router = new VueRouter({
  mode:'hash',
  routes
})

export default router
