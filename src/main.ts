import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'virtual:uno.css'
createApp(App)
    .use(ElementPlus)
    // .use(router)
    .mount('#app')
if (import.meta.env.MODE === "development") {

}