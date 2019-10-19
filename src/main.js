import Vue from 'vue'
import App from './App.vue'

// 关闭Vue的开发提示
Vue.config.productionTip = false

// 声明当前的组件App代表的是整个应用
App.mpType = 'app'

// 生成当前组件的实例
const app = new Vue(App)

// 挂载当前的实例
app.$mount()
