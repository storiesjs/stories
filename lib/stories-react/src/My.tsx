import React, { FC } from "react";

export type MyType = {
    age?: number;
    name?: string;
};

export const My: FC<MyType> = ({age, name}) => {
    return <div className="component">I'm {name ? name : 'anonymous'}. My age is {age ? age : 'unknown'}.</div>
}