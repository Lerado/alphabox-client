import { createApp } from 'vue'

// Import main component 
import App from './App.vue'

// Vue router config file
import router from './router'

// Vuex store management
import store from './store'

// Equal vue components library
import Equal from 'equal-vue'
import 'equal-vue/dist/style.css'

// Tailwind CSS
import 'tailwindcss/tailwind.css'

// Mount app in main entry point and load plugins
createApp(App)
    .use(store)
    .use(router)
    .use(router)
    .use(Equal)
    .mount('#app')
