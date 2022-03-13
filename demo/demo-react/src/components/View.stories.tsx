import React from 'react';
import { Meta, Story } from '@stories-js/stories-react';

import { View, ViewType } from "./View";

export default {
    title: "Stories/View component",
    component: View,
    decorators: [
        ( Story: any) => {
            // console.log('*** context', context)
            return (
                <section style={{ margin: '3em' }}>
                    <Story/>
                </section>
            )
        },
    ],
    args: {name: 'Potter'},
    argTypes: { onClick: { action: 'clicked' } },
    parameters: {}
}  as Meta<ViewType>;

export const ByName: Story<ViewType> = () => <View name="Test"/>

export const ByAge: Story<ViewType> = () => <View age={30} />
ByAge.storyName = "By Lovely Age";

// export const ByArgs: Story<ViewType> = (args) => <View {...args}/>

const Template: Story<ViewType> = (args: any) => <View {...args} />;

export const ByArgs: Story<ViewType> = Template.bind({});
ByArgs.args = {
    name: 'Harry Potter'
};