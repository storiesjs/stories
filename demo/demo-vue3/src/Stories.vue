<template>
  <stories-app :stories.prop="stories" @story="storySelected">
    <stories-navigator slot="navigator"></stories-navigator>
    <stories-viewer slot="viewer">
      <story-vue-renderer :story="story"></story-vue-renderer>
    </stories-viewer>
  </stories-app>
</template>

<script lang="ts">
import { applyPolyfills, defineCustomElements } from '@stories/stories-ui/loader';
import { defineComponent } from 'vue';
import { StoryModules, StoryModule, modulesToStories, StoryComponent } from '@stories/stories-common';

import { StoryVueRenderer } from '@stories/stories-vue3';

import modules from './stories-list';

// https://v3.vuejs.org/guide/web-components.html#vue-and-web-components
// Bind the custom elements to the window object
applyPolyfills().then(() => {
  defineCustomElements(window);
});

export default defineComponent({
  name: 'Stories',
  components: {
    StoryVueRenderer
  },
  data() {
    return {
      stories: modulesToStories(modules as unknown as StoryModules),
      story: null as (StoryComponent | null),
    }
  },
  methods: {
    storySelected(event: CustomEvent<StoryComponent>) {
      console.log('!!! storySelected', event.detail);
      this.story = event.detail;
    }
  }
});
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
