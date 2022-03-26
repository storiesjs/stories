import { Component, createApp } from 'vue';
import { applyPolyfills, defineCustomElements } from "@stories-js/components/loader";
import App from './App.vue'
import Stories from './Stories.vue'

let inst: Component;

if (process.env.VUE_APP_STORIES) {
  inst = Stories;
} else {
  inst = App;
}

const app = createApp(inst);
// https://v3.vuejs.org/guide/web-components.html#vue-and-web-components
// Bind the custom elements to the window object
app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith("stories-");
applyPolyfills().then(() => {
  defineCustomElements(window);
});
app.mount("#app");