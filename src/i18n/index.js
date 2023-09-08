import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n);

// 以下为语言包单独设置的场景，单独设置时语言包需单独引入
const messages = {
    'cz': require('./config/zh.json'),   // 中文语言包
    'en': require('./config/en.json')    // 英文语言包
}

// 最后 export default，这一步肯定要写的。

const i18n = new VueI18n({
    locale: localStorage.getItem('l') || 'cz', // set locale 默认显示中文
    messages: messages // set locale messages 
})

export default i18n;