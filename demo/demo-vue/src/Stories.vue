<template>
  <stories-app :modules.prop="modules" @storyChange="storySelected" @storyContextChange="contextSelected">
    <stories-split-pane split="horizontal" min-size="150" default-size="250">
      <stories-sidebar slot="slot1"></stories-sidebar>
      <div slot="slot2">
        <stories-tool-bar>
          <stories-tool-zoom slot="left"></stories-tool-zoom>
        </stories-tool-bar>
        <stories-split-pane split="vertical" min-size="250" default-size="500">
          <stories-preview slot="slot1">
            <story-vue-renderer :story="story"></story-vue-renderer>
          </stories-preview>
          <stories-tabs slot="slot2">
            <stories-tab-bar>
              <!-- <stories-tab-button tab="actions">
                <stories-label color="primary">Actions</stories-label>
              </stories-tab-button> -->
              <stories-tab-button tab="controls">
                <stories-label color="primary">Controls</stories-label>
              </stories-tab-button>
            </stories-tab-bar>
            <!-- <stories-tab tab="actions">
              <stories-addon-actions></stories-addon-actions>
            </stories-tab> -->
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
import { defineComponent } from "vue";
import { StoryComponent, StoryContext } from "@stories-js/components";

import { StoryVueRenderer } from "@stories-js/vue";

import storyModules from "./stories-list";

console.log('storyModules', storyModules)

export default defineComponent({
  name: "stories-browser",
  components: {
    StoryVueRenderer,
  },
  data() {
    return {
      modules: storyModules,
      story: null as StoryComponent | null,
      context: null as StoryContext | null,
    };
  },
  // data: () => ({
  //   modules: storyModules,
  //   story: null as StoryComponent | null,
  //   context: null as StoryContext | null,
  // }),
  methods: {
    storySelected(event: CustomEvent<StoryComponent>) {
      console.log("!!! storySelected", event.detail);
      this.story = event.detail;
    },
    contextSelected(event: CustomEvent<StoryContext>) {
      console.log("contextSelected", event.detail);
      this.context = event.detail;
    }
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
