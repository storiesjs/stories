
```typescript
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Path/To/MyComponent',
  component: MyComponent,
};
```

// ----- BASIC
```typescript
export const Default: Story = () => ({
  props: {},
});

export const WithProp: Story = () => ({
  props: {
    prop: 'value',
  },
});
```

// ----- DYNAMIC DATA
```typescript
export const Text: Story = () => ({
  props: {
    text: 'Hello Button',
    onClick: action('clicked'),
  },
});
```

// with ARGS
```typescript
export const Text: Story = ({ label, onClick }) => ({
  props: {
    label,
    onClick,
  },
});

Text.args = {
  label: 'Hello',
  onClick: action('clicked'),
};
```
// ----- with SIMPLE ARGS
```typescript
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
};

export const Text: Story = (args) => ({
  props: args,
});
```

// ----- MDX
```typescript
import { Canvas, Meta, Story } from '@stories/stories-docs';

import { Checkbox } from './checkbox.component';

<Meta title="MDX/Checkbox" component={Checkbox} />

export const Template = (args) => ({ props: args });
```
# Checkbox

With `MDX`, we can define a story for `Checkbox` right in the middle of our
Markdown documentation.

```html
<Canvas>
  <Story 
    name="Unchecked"
    args={{ 
      label: 'Unchecked',
    }}>
    {Template.bind({})}
  </Story>
</Canvas>
```