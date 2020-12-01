import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import routes from './routes/routes';


import { BootstrapVue } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use( BootstrapVue );
Vue.use( VueRouter );

const router = new VueRouter({

  mode: 'history',
  routes

});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
