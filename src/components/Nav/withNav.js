import { withRouter as withRouterOutput } from 'react-router-dom';
import React, { useCallback } from 'react';
export const withRouter = withRouterOutput;

export const withNav = (Component) => (props) => {
    const { history } = props;
    const { push: HPush, replace: HReplace } = history;
    const handleOnChange = useCallback(
        (e, data) => {
            if (data.replace) {
                HReplace(data.to);
            } else {
                HPush(data.to);
            }
        },
        [ HPush, HReplace ]
    );

    return <Component {...props} onChange={handleOnChange} />;
};
