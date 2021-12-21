import Vue from 'vue'
import App from './App.vue'

/* import '../components/css/demo.scss';
import '../components/css/card.scss';
// import DemoComponent from '../components/lib/demo/src/main.vue';
import DemoComponent from '../components/lib/demo/index';
import CardComponent from '../components/lib/card/index';

Vue.use(DemoComponent);
Vue.use(CardComponent); */

import 'mooc-ui-test/dist/css/index.css';
import MUI from 'mooc-ui-test';
Vue.use(MUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
