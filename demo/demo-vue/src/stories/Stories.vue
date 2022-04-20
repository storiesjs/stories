<template>
  <str-app :modules.prop="modules" @strChange="storySelected" @strContextChange="contextSelected">
    <str-split-pane split="horizontal" min-size="150" default-size="250">
      <str-sidebar slot="slot1"></str-sidebar>
      <div slot="slot2">
        <str-tool-bar>
          <str-tool-zoom slot="left"></str-tool-zoom>
        </str-tool-bar>
        <str-split-pane split="vertical" min-size="250" default-size="500">
          <str-preview slot="slot1">
            <str-renderer :story="story"></str-renderer>
          </str-preview>
          <str-tabs slot="slot2">
            <str-tab-bar>
              <!-- <str-tab-button tab="actions">
                <str-label color="primary">Actions</str-label>
              </str-tab-button> -->
              <str-tab-button tab="controls">
                <str-label color="primary">Controls</str-label>
              </str-tab-button>
            </str-tab-bar>
            <!-- <str-tab tab="actions">
              <str-addon-actions></str-addon-actions>
            </str-tab> -->
            <str-tab tab="controls">
              <str-addon-controls></str-addon-controls>
            </str-tab>
          </str-tabs>
        </str-split-pane>
      </div>
    </str-split-pane>
  </str-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { StoryComponent, StoryContext } from "@stories-js/core";

import { StrRenderer } from "@stories-js/vue";

import storyModules from "./stories-list";

console.log('storyModules', storyModules)

export default defineComponent({
  name: "str-browser",
  components: {
    StrRenderer,
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
