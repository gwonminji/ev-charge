import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faUserSecret, faCoffee, faBolt } from '@fortawesome/free-solid-svg-icons'
import { faAddressBook  } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faTwitter, faUserSecret, faCoffee, faAddressBook, faBolt)

const app = createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
// createApp(App).mount('#app')
