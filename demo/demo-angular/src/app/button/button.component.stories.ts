import type { Meta, Story } from '@stories-js/angular';

import { ButtonComponent } from './button.component';

export default {
  /* π The title prop is optional.
  * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'ButtonComponent',
  component: ButtonComponent,
} as Meta;

function eventListener(event: MouseEvent) {
  console.log('Mouse event', event.type);
}

export const Primary: Story = () => ({});
Primary.storyName = 'I am the primary';

export const Labled: Story = () => ({
  props: {
    label: 'Button',
    onClick: eventListener
  },
});

// //π We create a βtemplateβ of how args map to rendering
const Template: Story = (args) => ({
  props: args,
});

// // π Each story then reuses that template
export const Primary2 = Template.bind({});
Primary2.args = {
  label: 'Button2',
  backgroundColor: '#ff0',
};


export const Tertiary= Template.bind({});
Tertiary.args={
  ...Primary2.args,
  label: 'Icons: ππππ€!',
};
