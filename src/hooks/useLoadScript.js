import { useEffect, useReducer } from 'react';
import { condition } from './redux.hook';
import _ from 'lodash';
import { bodyRect } from '../lib';

const reducer = (state, action) => {
    switch (action.type) {
        case 'start':
            return { ...state, condition: condition.start };
        case 'fail':
            return { ...state, condition: condition.fail };
        case 'success':
            return { ...state, condition: condition.success };
        default:
            return { ...state };
    }
};
const useLoadScript = (attributeObj = {}) => {
    const [ state, dispatch ] = useReducer(reducer, {
        condition: condition.start
    });
    useEffect(() => {
        const script = document.createElement('script');
        const attributeKeys = _.keys(attributeObj);
        attributeKeys.map((attrKey) => {
            console.log(attrKey, attributeObj[attrKey]);
            script.setAttribute(attrKey, attributeObj[attrKey]);
        });

        dispatch({ type: 'start' });
        document.body.appendChild(script);
        script.onload = () => {
            console.log('success');
            dispatch({ type: 'success' });
        };
        script.onerror = (error) => {
            console.log('fail');
            dispatch({ type: 'fail', error });
        };
    }, []);
    return [ state ];
};

export default useLoadScript;
