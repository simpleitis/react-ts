import React from 'react';

type HorizontalPosition = 'left' | 'center' | 'right';
type VerticalPosition = 'top' | 'center' | 'bottom';

type ToastProps = {
    // inorder to remove the 'center-center' case we use 'Exclude<>' and get use union to add in just 'center'
    position:
        | Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'>
        | 'center';
};

export const Toast = ({ position }: ToastProps) => {
    return <div>Toast - {position}</div>;
};
