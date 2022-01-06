<template>
  <div id="app">
    Stories

  </div>
</template>

<script lang="ts">
/* eslint-disable */
import { applyPolyfills, defineCustomElements } from '@stories/stories-ui/loader';
import { Component, Vue } from 'vue-property-decorator';
import { StoryModules, StoryModule } from '@stories/stories-common';

import * as HelloWorldStory from './components/HelloWorld.stories';

// Tell Vue to ignore all components defined in the test-components
// package. The regex assumes all components names are prefixed
// 'test'
Vue.config.ignoredElements = [/@stories\/\w*/];

// Bind the custom elements to the window object
// applyPolyfills()
// .then(() => {
//   defineCustomElements();
// });

console.log('HelloWorldStory', HelloWorldStory)

@Component({
})
export default class Stories extends Vue {
  modules: StoryModules = [
    HelloWorldStory as unknown as StoryModule
  ];

  onClick (): void {
    window.alert('Length ' + this.modules ? this.modules!.length : ' unnknown')
  }
}
</script>