import Vue from 'vue'
import App from './App.vue'
import router from '@/plugins/vuerouter.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft, faArrowRight, faBan, faChevronLeft, faGavel, faGem, faGlobe, faGlobeAmericas, faMale, faPiggyBank, faSuitcase, faTree, faUniversity } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faGlobe, faSuitcase, faTree, faUniversity, faGavel, faBan, faGlobeAmericas, faGem, faMale, faPiggyBank, faChevronLeft, faArrowLeft, faArrowRight)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
