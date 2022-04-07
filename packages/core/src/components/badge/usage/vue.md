```html
<template>
  <!-- Default -->
  <stories-badge>99</stories-badge>

  <!-- Colors -->
  <stories-badge color="primary">11</stories-badge>
  <stories-badge color="secondary">22</stories-badge>
  <stories-badge color="tertiary">33</stories-badge>
  <stories-badge color="success">44</stories-badge>
  <stories-badge color="warning">55</stories-badge>
  <stories-badge color="danger">66</stories-badge>
  <stories-badge color="light">77</stories-badge>
  <stories-badge color="medium">88</stories-badge>
  <stories-badge color="dark">99</stories-badge>

  <!-- Button with badge on left and right -->
  <stories-button>
    <stories-badge slot="start">11</stories-badge>
    <stories-label>My Button</stories-label>
    <stories-badge slot="end">22</stories-badge>
  </stories-button>
</template>

<script>
import { StoriesBadge, StoriesButton, StoriesLabel } from '@stories-js/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { StoriesBadge, StoriesButton, StoriesLabel }
});
</script>
```