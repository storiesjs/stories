import React from 'react';
import { Meta, Story } from '@stories/stories-common';

import { View } from "./View";

export default {
    title: "Stories/View component",
    component: View,
    // decorators: [
    //     (StoryFn) => (
    //         <section className="decorator">
    //             <StoryFn/>
    //         </section>
    //     ),
    // ],
    // parameters: {}
}  as Meta;

export const ByName: Story = () => <View name="Test"/>

export const ByAge: Story = () => <View age={30} />