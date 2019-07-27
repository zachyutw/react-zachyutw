import { useReducer, useEffect, useState, useCallback, useMemo } from 'react';
import axios from 'axios';
import { Controller, dispatchAction } from '../hooks/redux.hook';

const API_URL = 'https://dev.askmirror.local:5001/api/crawler/html';
const reducer = (state, action) => {
    switch (action.type) {
        case 'start':
            return { ...state, isLoading: true, isSuccess: null };
        case 'getHtml':
            return { ...state, isLoading: false, isSuccess: true, ...action, __html: action.html };
        case 'fail':
            return { ...state, isLoading: false, isSuccess: false, ...action };
        default:
            return { ...state };
    }
};

const useHtmlPreview = (url) => {
    const [ fetchUrl, setFetchUrl ] = useState(url);
    const [ state, dispatch ] = useReducer(reducer, { html: '' });
    const getHtml = useCallback(dispatchAction(dispatch, { type: 'getHtml', name: 'getHtml', url: API_URL, method: 'get' }, axios), [ dispatch, dispatchAction ]);

    useEffect(
        () => {
            if (fetchUrl) {
                getHtml({ params: { URL: encodeURIComponent(fetchUrl) } });
            }
        },
        [ fetchUrl ]
    );

    return [ state, setFetchUrl, getHtml ];
};
export default useHtmlPreview;
