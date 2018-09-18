import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login/login'
import register from '../components/register/register'
import index from '../components/index/index'

Vue.use(Router)

export default new Router({
  routes: [
    /*{
      path: '/',
      name:'index'
    }*/
    /*{
      path: '/',
      name:'register'
    }*/
    /*{
      path: '/',
      name:'login'
    },*/
    {
      path: '/',
      name:'index'
    }

  ]
})
