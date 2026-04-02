import { createApp } from 'vue'
// @ts-expect-error anyway
import App from './App.vue'
// @ts-expect-error anyway
import 'uno.css'

createApp(App).mount('#app')
