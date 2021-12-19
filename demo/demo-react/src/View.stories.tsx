import React from 'react';
import { type } from './stories-api';

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
}  as type.Meta<ViewType>;

export const ByName: type.Story<ViewType> = () => <View name="Test"/>

export const ByAge: type.Story<ViewType> = () => <View age={30} />