import { useState, useCallback } from 'react';

const useToggle = (initState) => {
    const [ actived, setActived ] = useState(initState);
    const toggleActived = useCallback(
        () => {
            setActived((actived) => !actived);
        },
        [ setActived ]
    );
    return [ actived, toggleActived, setActived ];
};

export default useToggle;
