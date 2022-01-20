<template>
  <stories-app :modules.prop="modules" @story="storySelected">
    <stories-split-pane split="horizontal" minSize="150" defaultSize="250">
      <stories-sidebar slot="slot1"></stories-sidebar>
      <div slot="slot2">
        <stories-tool-bar>
          <stories-tool-zoom slot="left"></stories-tool-zoom>
        </stories-tool-bar>
        <stories-split-pane split="vertical" minSize="250" defaultSize="500">
          <stories-preview slot="slot1">
            <story-vue-renderer :story="story"></story-vue-renderer>
          </stories-preview>
          <stories-tabs slot="slot2">
            <stories-tab-bar>
              <stories-tab-button tab="actions">
                <stories-label color="primary">Actions</stories-label>
              </stories-tab-button>
              <stories-tab-button tab="controls">
                <stories-label color="primary">Controls</stories-label>
              </stories-tab-button>
            </stories-tab-bar>
            <stories-tab tab="actions">
              <stories-addon-actions></stories-addon-actions>
            </stories-tab>
            <stories-tab tab="controls">
              <stories-addon-controls></stories-addon-controls>
            </stories-tab>
          </stories-tabs>
        </stories-split-pane>
      </div>
    </stories-split-pane>
  </stories-app>
</template>

<script lang="ts">
import {
  applyPolyfills,
  defineCustomElements,
} from "@stories/stories-ui/loader";
import { defineComponent } from "vue";
import { StoryComponent } from "@stories/stories-common";

import { StoryVueRenderer } from "@stories/stories-vue3";

import storyModules from "./stories-list";

// https://v3.vuejs.org/guide/web-components.html#vue-and-web-components
// Bind the custom elements to the window object
applyPolyfills().then(() => {
  defineCustomElements(window);
});

export default defineComponent({
  name: "Stories",
  components: {
    StoryVueRenderer,
  },
  data() {
    return {
      modules: storyModules,
      story: null as StoryComponent | null,
    };
  },
  methods: {
    storySelected(event: CustomEvent<StoryComponent>) {
      console.log("!!! storySelected", event.detail);
      this.story = event.detail;
    },
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 0px;
}
</style>
