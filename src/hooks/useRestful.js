import { useReducer, useMemo } from 'react';
import { Controller, restfulFields, initRestfulState, restfulReducer } from '../contexts/redux';

const useRestful = (apiAxios, objectName) => {
    const [ state, dispatch ] = useReducer(restfulReducer, initRestfulState);
    const controller = useMemo(
        () => {
            const controller = Controller(dispatch, restfulFields, apiAxios, objectName);
            return controller;
        },
        [ dispatch, apiAxios, objectName ]
    );
    return [ state, controller ];
};

export default useRestful;
