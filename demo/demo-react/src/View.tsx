import React, { FC } from "react";

export type ViewType = {
    age?: number;
    name?: string;
};

export const View: FC<ViewType> = ({age, name}) => {
    return <div className="component">I'm {name ? name : 'anonymous'}. My age is {age ? age : 'unknown'}.</div>
}