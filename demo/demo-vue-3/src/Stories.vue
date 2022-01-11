<template>
  <stories-app :stories.prop="stories" @storySelected="storySelected">
    <stories-navigator slot="navigator"></stories-navigator>
    <stories-viewer slot="viewer">
      <story-renderer :story="story"></story-renderer>
    </stories-viewer>
  </stories-app>
</template>

<script lang="ts">
import { applyPolyfills, defineCustomElements } from '@stories/stories-ui/loader';
import { defineComponent } from 'vue';
import { StoryModules, StoryModule, modulesToStories, StoryComponent } from '@stories/stories-common';

import * as HelloWorldStory from './components/HelloWorld.stories';
import StoryRenderer from './StoriesVueRenderer.vue';

// https://v3.vuejs.org/guide/web-components.html#vue-and-web-components
// Bind the custom elements to the window object
applyPolyfills().then(() => {
  defineCustomElements(window);
});

console.log('HelloWorldStory', HelloWorldStory)

const modules: StoryModules = [HelloWorldStory as unknown as StoryModule];
const _stories = modulesToStories(modules as StoryModules);
// const _story = _stories[Object.keys(_stories)[0]]

console.log('_stories', _stories);
// console.log('_story', _story);

export default defineComponent({
  name: 'Stories',
  components: {
    StoryRenderer
  },
  data() {
    return {
      stories: _stories,
      story: null as (StoryComponent | null),
      // story: _story,
    }
  },
  methods: {
    storySelected(event: any) { //CustomEvent<StoryComponent>) {
      console.log('!!! storySelected', event.detail);
      // this.story = event.detail;
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
