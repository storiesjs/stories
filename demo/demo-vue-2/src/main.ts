import Vue, { VueConstructor } from 'vue'
import App from './App.vue'
import Stories from './Stories.vue'

Vue.config.productionTip = false

let app: VueConstructor<Vue>;

console.log('process.env', process.env);
if (process.env.VUE_APP_STORIES) {
  app = Stories;
} else {
  app = App;
}

new Vue({
  render: h => h(app),
}).$mount('#app')
