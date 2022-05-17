import Vue from 'vue'
import App from './App.vue'

/* Bootstrap */
const bootstrap = require('bootstrap')
Vue.use(bootstrap)

/* Font Awesome icons*/
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons 👇 QUI AGGIUNGI LE ICONE che vuoi usare in camelCase */
import { faRoad, faVideo, faDroplet, faGear, faBuilding, faChartColumn, faChevronUp} from '@fortawesome/free-solid-svg-icons'

import { faGoogle, faInstagram, faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library 👇 QUI AGGIUNGI IL NOME DELL'ICONA in camelCase*/
library.add(faRoad, faVideo, faDroplet, faGoogle, faGear, faBuilding, faChartColumn, faInstagram, faFacebook, faTwitter, faYoutube, faChevronUp) 

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
