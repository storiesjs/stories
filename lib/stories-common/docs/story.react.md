
```typescript
export default {
  title: 'Path/To/MyComponent',
  component: MyComponent,
};
```
// ------- BASIC
```typescript
export const Basic: ComponentStory<typeof MyComponent> = () => <MyComponent/>;
export const WithProp: ComponentStory<typeof MyComponent> = () => <MyComponent prop="value"/>;
```

// ------- DYNAMIC DATA
```typescript
export const Basic: ComponentStory<typeof Button> = () => <Button label="Hello" onClick={action('clicked')} />;
```

// ------- with AGRS
```typescript
export const Text = ({ label, onClick }) => <Button label={label} onClick={onClick} />;

Text.args = {
  label: 'Hello',
  onClick: action('clicked'),
};
```

```typescript
// with SIMPLE ARGS
export default {
  title: 'Path/To/MyComponent',
  component: MyComponent,
};

export const Text = (args) => <Button {...args} />;
```

// ------- MDX
```typescript
import { Canvas, Meta, Story } from '@stories/stories-docs';

import { Checkbox } from './Checkbox';

<Meta title="MDX/Checkbox" component={Checkbox} />

export const Template = (args) => <Checkbox {...args} />;
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