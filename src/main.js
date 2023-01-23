import { createApp } from 'vue'
import App from './App'
import components from '@/components/ui'

const app = createApp(App)

components.forEach(com => {
    app.component(com.name, com)
})

app.mount('#app')
