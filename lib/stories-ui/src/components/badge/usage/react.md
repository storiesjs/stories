```tsx
import React from 'react';
import { StoriesBadge, StoriesButton, StoriesLabel } from '@stories/react';

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
