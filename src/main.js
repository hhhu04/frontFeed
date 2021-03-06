import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import axios from 'axios'
import VueCookies from 'vue-cookies'


// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.prototype.$eventBus = new Vue();
Vue.prototype.$axios = axios;



Vue.prototype.$cookies = VueCookies;


// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
    router,
  render: h => h(App),
}).$mount('#app')
