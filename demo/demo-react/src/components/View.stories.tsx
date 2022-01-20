import React from 'react';
import { Meta, Story } from '@stories/stories-react';

import { View } from "./View";

export default {
    title: "Stories/View component",
    component: View,
    decorators: [
        (story) => (
            <section className="decorator">
                {story}
            </section>
        ),
    ],
    argTypes: { onClick: { action: 'clicked' } },
    parameters: {}
}  as Meta;

export const ByName: Story = () => <View name="Test"/>

export const ByAge: Story = () => <View age={30} />
ByAge.storyName = "By Name";