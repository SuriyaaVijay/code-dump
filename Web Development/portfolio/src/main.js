import Vue from 'vue'
import App from './App.vue'
import router from './router'
import CoolLightBox from 'vue-cool-lightbox';
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
import './assets/scss/style.scss'

Vue.use(CoolLightBox);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
