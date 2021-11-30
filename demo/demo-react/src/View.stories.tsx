import React from 'react';
import { Meta, Story } from './stories-react';

import { View, ViewType } from "./View";

export default {
    title: "Stories/View component",
    component: View,
    decorators: [
        (StoryFn) => (
            <section className="decorator">
                <StoryFn/>
            </section>
        ),
    ],
    parameters: {}
}  as Meta<ViewType>;

export const ByName: Story<ViewType> = () => <View name="Test"/>

export const ByAge: Story<ViewType> = () => <View age={30} />