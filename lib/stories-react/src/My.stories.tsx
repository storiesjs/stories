import React from 'react';
import { Story, Meta } from './types';

import { My, MyType } from "./My";

export default {
    title: "Stories/My component",
    component: My,
    decorators: [
        (Story, context) => (
            <section className="decorator">
                <Story/>
            </section>
        ),
    ],
    parameters: {}
}  as Meta<MyType>;

export const Named: Story<MyType> = () => <My name="Test"/>

export const Aged: Story<MyType> = () => <My age={30} />