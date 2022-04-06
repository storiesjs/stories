import { createApp } from 'vue';
import App from './App.vue'
import Stories from './Stories.vue'
import * as StoriesJsVue from '@stories-js/vue';

if (process.env.VUE_APP_STORIES) {
  createApp(Stories).use(StoriesJsVue.StoriesVue).mount("#app");
} else {
  createApp(App).mount("#app");
}
