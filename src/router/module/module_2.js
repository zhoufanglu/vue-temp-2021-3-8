const b = () => import('@/views/module_2/b.vue')
const theme = () => import('@/views/module_2/theme.vue')

const module_2 = [
  {
    path: '/b',
    meta: {
      requireAuth: true // 在需要登录的路由的meta中添加响应的权限标识
    },
    name: 'b',
    component: b
  },
  {
    path: '/theme',
    meta: {
      requireAuth: false // 在需要登录的路由的meta中添加响应的权限标识
    },
    name: 'theme',
    component: theme
  }
]

export default module_2
