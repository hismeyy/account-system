import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index';
import Layui from '@layui/layui-vue'
import '@layui/layui-vue/lib/index.css'

createApp(App)
    .use(router)
    .use(Layui)
    .mount('#app')
