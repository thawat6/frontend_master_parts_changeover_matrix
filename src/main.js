/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import JsonExcel from "vue-json-excel3";

const app = createApp(App)

registerPlugins(app)
app.component("downloadExcel", JsonExcel);
app.mount('#app')
