import './bootstrap';
import '../sass/app.scss'
import Router from '@/router'
import store from '@/store'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'
import { VuetifyDateAdapter } from 'vuetify/labs/date/adapters/vuetify'
import { createApp } from 'vue/dist/vue.esm-bundler';

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
          mdi,
        },
    },
    adapter: VuetifyDateAdapter,
})
const app = createApp({})
app.use(vuetify)
app.use(Router)
app.use(store)
app.mount('#app')