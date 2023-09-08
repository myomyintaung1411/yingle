import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueScroll from 'vue-scrollto'
import md5 from "js-md5"
import global_ from "./api/global"
import i18n from "./i18n/index"

// import axios from "axios"
// import VueAxios from "vue-axios"
import Message from "./components/Message/index.js";
import MobileMessage from "./components/MobileMessage/index.js";
import "../src/assets/iconfonts/iconfont.css";
import ScrollAnimation from './directives/scrollanimation'
Vue.directive('scrollanimation', ScrollAnimation);
Vue.config.productionTip = false
import Loading from './components/Loading/loading'
Vue.prototype.$Global = global_;
Vue.prototype.$md5 = md5
Vue.prototype.$message = Message;
Vue.prototype.$mobilemessage = MobileMessage
Vue.use(vueScroll)
Vue.use(Loading)
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
