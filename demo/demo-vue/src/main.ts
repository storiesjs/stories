import { createApp } from 'vue';
import App from './App.vue'
import Stories from './stories/Stories.vue'
import { StoriesVue } from '@stories-js/vue';

if (process.env.VUE_APP_STORIES) {
  createApp(Stories).use(StoriesVue).mount("#app");
} else {
  createApp(App).mount("#app");
}
