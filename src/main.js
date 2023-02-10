import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import { createPinia } from 'pinia';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faBolt, faHand, faBars, faHouse, faMagnifyingGlass, faStar, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faTwitter, faBolt, faFaceSmile, faHand, faBars, faHouse, faMagnifyingGlass, faStar, faRightFromBracket)

// const app = createApp(App).use(router).use(createPinia()).component('font-awesome-icon', FontAwesomeIcon);
const app = createApp(App)
app.config.globalProperties.$axios = axios;
app.use(router)
app.use(createPinia())
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
// createApp(App).mount('#app')
