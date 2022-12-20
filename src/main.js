import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/main.css'
import './assets/styles/reset.css'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faFilter)
library.add(faArrowLeft)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
