import React from 'react';
import { Meta, Story } from '@stories/stories-react';

import { View, ViewType } from "./View";

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
}  as Meta<ViewType>;

export const ByName: Story<ViewType> = () => <View name="Test"/>

export const ByAge: Story<ViewType> = () => <View age={30} />
ByAge.storyName = "By Name";