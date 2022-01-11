import { Component, createApp } from 'vue'
import App from './App.vue'
import Stories from './Stories.vue'

let app: Component;

console.log('process.env', process.env);
if (process.env.VUE_APP_STORIES) {
  app = Stories;
} else {
  app = App;
}

createApp(app).mount('#app')