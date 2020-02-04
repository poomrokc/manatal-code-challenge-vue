import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import {
  VToolbar,
  VBtn,
  VIcon,
  VSpacer,
} from 'vuetify/lib';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.component('v-toolbar', VToolbar);
Vue.component('v-btn', VBtn);
Vue.component('v-icon', VIcon);
Vue.component('v-spacer', VSpacer);
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
