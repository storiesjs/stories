import React, { FC } from "react";

export type ButtonType = {
    primary?: boolean;
    label?: string;
    onClick?: (event: any) => void;
    children?: any;
};

export const Button: FC<ButtonType> = ({primary, label, onClick, children}) => {
    return (
        <button className={primary ? 'primary' : ''} onClick={onClick}>{label} {children}</button>
    );
}