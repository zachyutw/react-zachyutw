import { useEffect, useReducer } from 'react';
const reducer = (state, action) => {
    switch (action.type) {
        case 'url':
            return { ...state, url: action.url };
        case 'imageUrl':
            return { ...state, imageUrl: action.imageUrl };
        case 'clipText':
            return { ...state, clipText: action.clipText };
        case 'fail':
            return { ...state, clipText: '' };
        default:
            return { ...state };
    }
};
const useClipboard = () => {
    const [ textState, dispatch ] = useReducer(reducer, { clipText: '' });
    const { clipText } = textState;
    useEffect(
        () => {
            if (clipText.match(/.png|.jpg|.jpeg|.gif/gi)) {
                dispatch({ type: 'imageUrl', imageUrl: clipText });
            } else if (clipText.match(/https|http/gi)) {
                dispatch({ type: 'url', url: clipText });
            }
        },
        [ clipText ]
    );
    useEffect(() => {
        document.addEventListener('copy', function (e){
            e.preventDefault(); // We want our data, not data from any selection, to be written to the clipboard
        });
        navigator.clipboard
            .readText()
            .then((clipText) => {
                dispatch({ type: 'clipText', clipText });
                return clipText;
            })
            .catch((err) => {
                dispatch({ type: 'fail' });
                return '';
            });
    }, []);
    // console.log(textState);
    return [ textState ];
};
export default useClipboard;
