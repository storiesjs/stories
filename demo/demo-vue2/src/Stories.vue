<template>
  <div id="app">
    <stories-app :stories.prop="stories" @story="storySelected">
      <stories-navigator slot="navigator"></stories-navigator>
      <stories-viewer slot="viewer">
        <story-vue-renderer :story="story"></story-vue-renderer>
      </stories-viewer>
    </stories-app>
  </div>
</template>

<script lang="ts">
import { applyPolyfills, defineCustomElements } from '@stories/stories-ui/loader';
import { Component, Vue } from 'vue-property-decorator';
import { StoryModules, modulesToStories, StoryComponent } from '@stories/stories-common';

import { StoryVueRenderer } from '@stories/stories-vue2';

import modules from './stories-list';

// https://v3.vuejs.org/guide/migration/custom-elements-interop.html#_2-x-syntax
// Tell Vue to ignore all components defined in the stories-ui package.
Vue.config.ignoredElements = [/stories-\w*/];

// Bind the custom elements to the window object
applyPolyfills().then(() => {
  defineCustomElements(window);
});

// console.log('HelloWorldStory', HelloWorldStory)

// const modules: StoryModules = [HelloWorldStory as unknown as StoryModule];

@Component({
  components: {StoryVueRenderer}
})
export default class Stories extends Vue {
  stories = modulesToStories(modules as unknown as StoryModules);
  story: StoryComponent | null = null;

  storySelected(event: CustomEvent<StoryComponent>): void {
    console.log('storySelected', event.detail);
    this.story = event.detail;
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>