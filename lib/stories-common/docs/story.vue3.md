
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
export const Basic = () => ({
  components: { MyComponent },
  template: '<MyComponent />',
});

export const WithProp = () => ({
  components: { MyComponent },
  template: '<MyComponent prop="value"/>',
});
```

// ----- DYNAMIC DATA
```typescript
export const Text = () => ({
  components: { Button },
  template: '<Button label="Hello" @click="onClick" />',
  setup(){
    return {
      onClick: action('clicked'),
    };
  },
});
```

// ----- with ARGS
```typescript
export const Text = ({ label, onClick }) => ({
  components: { Button },
  setup() {
    return {
      label,
      onClick,
    };
  },
  template: '<Button @onClick="onClick" :label="label" />',
});

Text.args = {
  label: 'Hello',
  onClick: action('clicked'),
};
```

// ----- with SIMPLE ARGS
```typescript
export default {
  /*
   * See https://storybook.js.org/docs/vue/essentials/actions#action-argtype-annotation
   * to learn how to set up argTypes for actions
   */
  argTypes: {
    onClick: {},
  },
};

export const Text = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args" />',
});
```

// ----- MDX
```typescript
import { Canvas, Meta, Story } from '@stories/stories-docs';

import Checkbox from './Checkbox.vue';

<Meta title="MDX/Checkbox" component={Checkbox} />

export const Template = (args) => ({
  components: { Checkbox },
  setup() {
    return { args };
  },
  template: '<Checkbox v-bind="args" />',
});
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