## Component Story Format
We are following the CSF format specification and defining stories in files follows ES6 module-based standards. There are two main concepts absorbed from the ES6 standards:
- default export
- set of named exports

### Default export
There is the story metadata organised as default export to keep general information belongs to all stories defined in ES6 module:
```typescript
import { Meta } from '@stories/stories-common';

export default {
  title: 'Path/To/MyComponent',
  component: MyComponent,
  args: {
    name: 'Teste',
    ages: [10, 11, 12],
    onClick: (e) => alert('clicked')
  },
  argTypes: {
    name: String,
    ages: Array,
    onClick: Function
  },
  decorators: [
    (story, context) => <div style='background: red'>{story(context)}</div>
  ]
} as Meta;
```
All properties of the Meta are optional, so you may ommit the default export completelly and only create stories.

### Named exports
Each named export describes the independant story you components will transform.