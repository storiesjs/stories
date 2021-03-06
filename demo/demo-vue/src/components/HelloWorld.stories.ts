import { Meta, Story } from '@stories-js/core';
import HelloWorld from './HelloWorld.vue';

export default {
  /* π The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'HelloWorld',
  component: HelloWorld,
  // decorators: [() => ({template: '<div style="margin: 1rem;"><story/></div>'})]
} as Meta;

// eslint-disable-next-lin
export const Primary: Story = () => ({
  components: { HelloWorld },
  template: '<HelloWorld msg="Welcome to Your Vue.js App"/>',
});
Primary.storyName = 'I am the primary';

export const Secondary: Story = () => ({
  components: { HelloWorld },
  template: '<HelloWorld msg="With icons ππππ―"/>',
});
Secondary.storyName = 'I am the second';

//π We create a βtemplateβ of how args map to rendering
// const Template = (args, context) => ({
//   components: { HelloWorld },
//   props: context ? Object.keys(context.argTypes) : {test: 'Nothing'},
//   template: '<HelloWorld v-bind="$props"/>',
// });

// //π Each story then reuses that template
// export const Primary2 = Template.bind({});
// Primary2.args = { msg: 'Message 1' };

// export const Secondary = Template.bind({});
// Secondary.args = { ...Primary2.args, msg: 'With icons ππππ―' };
