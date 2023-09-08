import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: false,
    myAccount: "",
    myPassowrd: "",
    scrolldata: "",
    LoginData: {
      Agentid: '',
      Agentname: "",
      QQ: "",
      WX: "",
      PH: "",
      enable: "",
      androidAddr: "",
      iosAddr: "",
      customerAddr: "",
      downloadUrl: "",
      gameAddr: "",
      tAgent: ""
    }
  },
  getters: {
    // login: this.state.login
    loginGetter: state => {
      return state.login
    },
    scrollData: state => {
      return state.scrolldata
    }
  },
  mutations: {
    SCROLL_DATA(state, payload) {
      state.scrolldata = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
