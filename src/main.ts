import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'virtual:uno.css'
import {useRouter} from "vue-router";
createApp(App)
    .use(ElementPlus)
    .use(useRouter)
    .mount('#app')
switch (import.meta.env.MODE) {
    case "development":
        console.log("console ready to use,\n" +
            "L's rock!");
        break
    case "production":
        console.log("wow，你发现了宝藏！" +
            "💎🪙💷🪙🪙💶🪙💴📿")
        break

    default:
        break
}