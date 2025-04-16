
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import "@/assets/less/index.less"
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import "@/api/mock.js"
import api from "@/api/api"
const pinia = createPinia()
const app =createApp(App)
app.config.globalProperties.$api = api
app.use(pinia)
app.use(ElementPlus)
app.use(router).mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}