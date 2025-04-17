//引入两个方法，第一个创建路由器对象，第二个是开启hash模式的方法
import { createRouter, createWebHashHistory } from 'vue-router'

//路由规则
const routes = [
    {
      path: '/',
      name: 'main',
      component: () => import('@/views/Main.vue'),
      redirect: '/home',
      children:[   ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue')
      }
  ]

const router = createRouter({
    //history设置路由模式
    history: createWebHashHistory(),
    routes
})

//把路由器暴露出去
export default  router