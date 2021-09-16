/**
 * 权限配置文件
 */
import router from './router'
import store from './store'
import { Message } from 'element-ui'

//白名单
const whiteList = ['/login', '/404']

//nprogress
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

//添加路由测试
router.addRoute('Home',{
  path: '/test',
  name: 'test',
  component: () => import('@/views/module_1/a.vue')
})
console.log(21, router.getRoutes())

// 在守卫中访问元信息
router.beforeEach((to, from, next)=>
{
  //nprogress
  NProgress.start()
  //获取token
  let { token } = store.state.mod_1.userInfo

  console.log(24, token)
  if(token){
    let requireAuth = to.matched.some(record => record.meta.requireAuth)
    if(requireAuth){
      next('/login')
      Message({
        showClose: true,
        message: `没有权限访问${to.name}页面,要访问请配置requireAuth`,
        type: 'warning'
      })
    }else{
      next()
    }
  }else{
    next()
    //next('/login')
  }
  //next()
})


router.afterEach(() => {
  NProgress.done()
})
