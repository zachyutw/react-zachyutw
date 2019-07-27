import React, { useState, useEffect, useReducer } from 'react';

const userCamera = (dispatch) => (constraints) => {
    if (navigator.mediaDevices) {
        navigator.mediaDevices
            .getUserMedia(constraints)
            .then((stream) => {
                // videoRef.current.srcObject = stream;
                dispatch({ type: 'success', stream, enumerateDevices: navigator.mediaDevices.enumerateDevices() });
            })
            .then((deviceInfos) => {
                dispatch({ type: 'deviceInfos', deviceInfos });
            })
            .catch((err) => {
                dispatch({ type: 'fail', errorMessage: err.message });
            });
    } else {
        dispatch({ type: 'fail', errorMessage: 'navigator.mediaDevices not found' });
    }
};
const reducer = (state, action) => {
    switch (action.type) {
        default:
            return { ...state };
    }
};
const useCamera = (config) => {
    const [ state, dispatch ] = useReducer(reducer, { stream: null, deviceInfo: null });

    const [ camera, setCamera ] = useState({ stream: null, deviceInfo: null });
    return [ state ];
};

export default useCamera;
