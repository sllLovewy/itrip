import Vue from 'vue'
import App from './App'
import router from './router'
import './common/mui/css/icons-extra.css'
import  './common/mui/css/mui.min.css'

import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
