import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Login',
      component: resolve => require(['@/components/admin/Login'], resolve)
    },
    {
      path: '/admin',
      name: 'Admin',
      component: resolve => require(['@/components/admin/Admin'], resolve),
      children: [
        {
          path: 'selfinfo',
          name: 'SelfInfo',
          component: resolve => require(['@/components/admin/SelfInfo'], resolve)
        },
        {
          path: 'markdown',
          name: 'Markdown',
          component: resolve => require(['@/components/admin/Markdown'], resolve)
        },
        {
          path: 'articles',
          name: 'Articles',
          component: resolve => require(['@/components/admin/ArticleList'], resolve)
        },
        {
          path: 'user',
          name: 'User',
          component: resolve => require(['@/components/admin/User'], resolve)
        }
      ]
    },
    {
      path: '*',
      name: 'Error',
      component: resolve => require(['@/components/page/ErrorPage'], resolve)
    }
  ]
})
