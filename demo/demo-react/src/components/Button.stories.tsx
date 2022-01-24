/* eslint-disable import/no-anonymous-default-export */
// Button.stories.js|jsx

import { Meta, Story } from '@stories/stories-react';
import React, { useState } from 'react';

import { Button, ButtonType } from './Button';

export default {
  title: 'Button',
  component: Button,
  decorators: [
    (Story) => (
      <div style={{ margin: '3rem', background: 'red' }}>
        <Story />
      </div>
    ),
    (Component) => (
      <div style={{padding: '2rem', background: 'green'}}>
        <Component/>
      </div>
    )
  ],
} as Meta<ButtonType>;

export const PrimaryButton: Story<ButtonType> = () => <Button primary>Button</Button>;
PrimaryButton.storyName = "NewPrimaryButton";

/*
 * Example Button story with React Hooks.
 * See note below related to this example.
 */
export const HookButton = () => {
  // Sets the hooks for both the label and primary props
  const [value, setValue] = useState('Secondary');
  const [isPrimary, setIsPrimary] = useState(false);

  // Sets a click handler to change the label's value
  const handleOnChange = () => {
    if (!isPrimary) {
      setIsPrimary(true);
      setValue('Primary');
    }
  };
  return <Button primary={isPrimary} onClick={handleOnChange} label={value} />;
};


//👇 We create a “template” of how args map to rendering
const Template: Story<ButtonType> = (args: any) => <Button {...args} />;

// 👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { primary: true, label: 'Primary Button' };