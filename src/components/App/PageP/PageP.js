import React from 'react';

const PageP = ({ children, className, ...rest }) => {
    return (
        <div className={[ 'page', 'className' ].join(' ')} {...rest}>
            {children}
        </div>
    );
};
export default PageP;
