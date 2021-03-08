import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home'

import module_1 from '@/router/module/module_1'
import module_2 from '@/router/module/module_2'

import {Message} from 'element-ui'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requireAuth: false // 在需要登录的路由的meta中添加响应的权限标识
    }
  },
  ...module_1,
  ...module_2
]

const router = new VueRouter({
  routes
})

// 在守卫中访问元信息
router.beforeEach((to, from, next)=>
{
  let requireAuth = to.matched.some(record => record.meta.requireAuth)
  //console.log(35, requireAuth)  //可自己打印出来看一下
  if(requireAuth){
    Message({
      showClose: true,
      message: `没有权限访问${to.name}页面,要访问请配置requireAuth`,
      type: 'warning'
    })
    return false
  }
  next()
})

export default router
