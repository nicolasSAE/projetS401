import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMeta from 'vue-meta';
import Vuetify from "vuetify";
import vuetify from './plugins/vuetify'
import cookie from "vue-cookie";

Vue.use(VueMeta).use(Vuetify)
Vue.config.productionTip = false
Vue.use(cookie);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
