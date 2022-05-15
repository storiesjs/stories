import { createApp } from 'vue';
import App from './App.vue'
import Stories from './stories/Stories.vue'
import { StoriesVue } from '@stories-js/vue';

if (process.env.VUE_APP_STORIES) {
  // const app = createApp(Stories);
  // app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('str-')
  // app.use(StoriesVue).mount("#app");
  createApp(Stories).use(StoriesVue).mount("#app");
} else {
  createApp(App).mount("#app");
}
