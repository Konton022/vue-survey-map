import { createApp } from 'vue'
import App from './App.vue'
import YmapPlugin from 'vue-yandex-maps'
import yaConfig from "./yaConfig"

createApp(App).use(YmapPlugin, yaConfig).mount('#app')
