import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import aura from '@/../presets/aura';
import App from './App.vue'
import './index.css'
import axios from 'axios'

import { useAxios } from '@vueuse/integrations/useAxios'

const app = createApp(App)
app.provide('axios', app.config.globalProperties.axios)
app.use(PrimeVue, {
    unstyled: true,
    pt: aura
});
app.mount('#app');

