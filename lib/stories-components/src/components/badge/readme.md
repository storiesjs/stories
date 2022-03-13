# stories-badge

Badges are inline block elements for adding context to another element. They could easily show statuses, notifications, and short messages in application.

<!-- Auto Generated Below -->


## Usage

### Angular / javascript

```html
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
</stories-item>
```


### React

```tsx
import React from 'react';
import { StoriesBadge, StoriesButton, StoriesLabel } from '@stories-js/react';

export const BadgeExample: React.FC = () => (
  <div>
    {/*-- Default --*/}
    <StoriesBadge>99</StoriesBadge>

    {/*-- Colors --*/}
    <StoriesBadge color="primary">11</StoriesBadge>
    <StoriesBadge color="secondary">22</StoriesBadge>
    <StoriesBadge color="tertiary">33</StoriesBadge>
    <StoriesBadge color="success">44</StoriesBadge>
    <StoriesBadge color="warning">55</StoriesBadge>
    <StoriesBadge color="danger">66</StoriesBadge>
    <StoriesBadge color="light">77</StoriesBadge>
    <StoriesBadge color="medium">88</StoriesBadge>
    <StoriesBadge color="dark">99</StoriesBadge>

    {/*-- Button with badge on left and right --*/}
    <StoriesButton>
      <StoriesBadge slot="start">11</StoriesBadge>
      <StoriesLabel>My Button</StoriesLabel>
      <StoriesBadge slot="end">22</StoriesBadge>
    </StoriesButton>
  </fiv>
);
```


### Stencil

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'badge-example',
  styleUrl: 'badge-example.css'
})
export class BadgeExample {
  render() {
    return [
      // Default
      <stories-badge>99</stories-badge>,

      // Colors
      <stories-badge color="primary">11</stories-badge>,
      <stories-badge color="secondary">22</stories-badge>,
      <stories-badge color="tertiary">33</stories-badge>,
      <stories-badge color="success">44</stories-badge>,
      <stories-badge color="warning">55</stories-badge>,
      <stories-badge color="danger">66</stories-badge>,
      <stories-badge color="light">77</stories-badge>,
      <stories-badge color="medium">88</stories-badge>,
      <stories-badge color="dark">99</stories-badge>,

      // Button with badge on left and right
      <stories-button>
        <stories-badge slot="start">11</stories-badge>
        <stories-label>My Button</stories-label>
        <stories-badge slot="end">22</stories-badge>
      </stories-button>
    ];
  }
}
```


### Vue

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



## Properties

| Property | Attribute | Description                                                                                                                                                                                                                                                            | Type     | Default     |
| -------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| `color`  | `color`   | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics). | `string` | `undefined` |


## CSS Custom Properties

| Name               | Description                                                                                              |
| ------------------ | -------------------------------------------------------------------------------------------------------- |
| `--background`     | Background of the badge                                                                                  |
| `--color`          | Text color of the badge                                                                                  |
| `--padding-bottom` | Bottom padding of the badge                                                                              |
| `--padding-end`    | Right padding if direction is left-to-right, and left padding if direction is right-to-left of the badge |
| `--padding-start`  | Left padding if direction is left-to-right, and right padding if direction is right-to-left of the badge |
| `--padding-top`    | Top padding of the badge                                                                                 |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
