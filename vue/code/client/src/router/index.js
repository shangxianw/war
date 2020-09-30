import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SubPage from '@/components/SubPage'
import ErrorPage from '@/components/ErrorPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: HelloWorld // 根据文件名来找
    },
    {
      path: "/sub",
      name: "subpage",
      component: SubPage
    },
    {
      path: '/*',
      name: 'error',
      component: ErrorPage // 根据文件名来找
    }
  ]
})
