import React from 'react';

type ButtonProps = {
    variant: 'primary' | 'secondary';
    // we are using the 'Omit' function to set the Button component to only accept strings as children
    children: string;
} & Omit<React.ComponentProps<'button'>, 'children'>;

export const CustomButton = ({ variant, children, ...rest }: ButtonProps) => {
    return (
        <button className={`class-with-${variant}`} {...rest}>
            {children}
        </button>
    );
};
