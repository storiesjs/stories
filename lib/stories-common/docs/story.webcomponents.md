
```typescript
import './demo-button';

export default {
  title: 'Button',
};
```

// ---- BASIC
```typescript
import { html } from 'lit-html';

export const Primary = () => html`<demo-button primary></demo-button>`;
```

// ---- DYNAMIC DATA
```typescript
export const Basic = () => html`<Button .label="Hello" @click={action('clicked')} />`;
```

// ---- with AGRS
```typescript
export const Text = ({ label, onClick }) => html`<Button .label="label" @click={onClick} />`;

Text.args = {
  label: 'Hello',
  onClick: action('clicked'),
};
```

// with SIMPLE ARGS
```typescript
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Path/To/MyComponent',
  component: MyComponent,
};

export const Text = (args) => html`<Button {...args} />`;
```

// ----- MDX
```typescript
import { Canvas, Meta, Story } from '@stories/stories-docs';
import { html } from 'lit-html';

import Checkbox from './Checkbox.vue';

<Meta title="MDX/Checkbox" />

//👇 We create a “template” of how args map to rendering
const Template = ({ background, label }) =>
  html`<demo-button .background=${background} .label=${label}></demo-button>`;
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