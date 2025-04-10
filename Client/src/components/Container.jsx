import clsx from 'clsx';
import React from 'react';

const Container = ({children, className}) => {
    return (
        <div className={clsx('max-w-screen-xl mx-auto px-4', className)}>
            {children}
        </div>
    );
};

export default Container;