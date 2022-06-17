# Badge

The Badge (str-badge) is inline block element uses for notification of how many items associated with another element.

<!-- Auto Generated Below -->


## Usage

### Angular / javascript

```html
<!-- Default -->
<str-badge>99</str-badge>

<!-- Colors -->
<str-badge color="primary">11</str-badge>
<str-badge color="secondary">22</str-badge>
<str-badge color="tertiary">33</str-badge>
<str-badge color="success">44</str-badge>
<str-badge color="warning">55</str-badge>
<str-badge color="danger">66</str-badge>
<str-badge color="light">77</str-badge>
<str-badge color="medium">88</str-badge>
<str-badge color="dark">99</str-badge>

<!-- Button with badge on left and right -->
<str-button>
  <str-badge slot="start">11</str-badge>
  <str-label>My Button</str-label>
  <str-badge slot="end">22</str-badge>
</str-item>
```


### React

```tsx
import React from 'react';
import { StoriesBadge, StoriesButton, StoriesLabel } from '@str-js/react';

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
      <str-badge>99</str-badge>,

      // Colors
      <str-badge color="primary">11</str-badge>,
      <str-badge color="secondary">22</str-badge>,
      <str-badge color="tertiary">33</str-badge>,
      <str-badge color="success">44</str-badge>,
      <str-badge color="warning">55</str-badge>,
      <str-badge color="danger">66</str-badge>,
      <str-badge color="light">77</str-badge>,
      <str-badge color="medium">88</str-badge>,
      <str-badge color="dark">99</str-badge>,

      // Button with badge on left and right
      <str-button>
        <str-badge slot="start">11</str-badge>
        <str-label>My Button</str-label>
        <str-badge slot="end">22</str-badge>
      </str-button>
    ];
  }
}
```


### Vue

```html
<template>
  <!-- Default -->
  <str-badge>99</str-badge>

  <!-- Colors -->
  <str-badge color="primary">11</str-badge>
  <str-badge color="secondary">22</str-badge>
  <str-badge color="tertiary">33</str-badge>
  <str-badge color="success">44</str-badge>
  <str-badge color="warning">55</str-badge>
  <str-badge color="danger">66</str-badge>
  <str-badge color="light">77</str-badge>
  <str-badge color="medium">88</str-badge>
  <str-badge color="dark">99</str-badge>

  <!-- Button with badge on left and right -->
  <str-button>
    <str-badge slot="start">11</str-badge>
    <str-label>My Button</str-label>
    <str-badge slot="end">22</str-badge>
  </str-button>
</template>

<script>
import { StoriesBadge, StoriesButton, StoriesLabel } from '@str-js/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { StoriesBadge, StoriesButton, StoriesLabel }
});
</script>
```



## Properties

| Property | Attribute | Description       | Type                                                        | Default     |
| -------- | --------- | ----------------- | ----------------------------------------------------------- | ----------- |
| `size`   | `size`    | The badge's size. | `"large" \| "medium" \| "small"`                            | `'medium'`  |
| `type`   | `type`    | The badge's type. | `"danger" \| "info" \| "primary" \| "success" \| "warning"` | `'primary'` |


## CSS Custom Properties

| Name                   | Description                                                                               |
| ---------------------- | ----------------------------------------------------------------------------------------- |
| `--background-color`   | Background color of the badge                                                             |
| `--border-color`       | Border color of the badge                                                                 |
| `--border-radius`      | Border radius of the badge                                                                |
| `--border-style`       | Border style of the badge                                                                 |
| `--border-width`       | Border width of the badge                                                                 |
| `--clear-color`        | Color of the clear icon                                                                   |
| `--clear-color-hover`  | Color of the clear icon on hover                                                          |
| `--clear-margin-left`  | Margin left of the clear icon                                                             |
| `--clear-margin-right` | Margin right of the clear icon                                                            |
| `--color`              | Text color of the badge                                                                   |
| `--font-size`          | Font size of the badge                                                                    |
| `--height`             | Height of the badge                                                                       |
| `--line-height`        | Line height of the badge                                                                  |
| `--padding-bottom`     | Bottom padding of the badge                                                               |
| `--padding-end`        | Right padding of the badge (will be left padding when we support right-to-left direction) |
| `--padding-start`      | Left padding of the badge (will be right padding when we support right-to-left direction) |
| `--padding-top`        | Top padding of the badge                                                                  |


----------------------------------------------

Built with [StencilJS](https://stenciljs.com/) at StoriesJS
