import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
export const modalRoot = document.getElementsByTagName('BODY')[0];

const Portal = ({ children }) => {
    const el = document.createElement('div');
    el.id = 'portal';
    useEffect(
        () => {
            modalRoot.appendChild(el);
            return () => {
                modalRoot.removeChild(el);
            };
        },
        [ children, el ]
    );
    return ReactDOM.createPortal(children, el);
};

const withPortal = (Component) => (props) => {
    return <Portal id={props.id}>{Component(props)}</Portal>;
};

export default withPortal;
