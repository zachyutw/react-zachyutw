import React, { useState } from 'react';
const Point = ({ title }) => {
    const [ isShow, setShow ] = useState(false);
    return (
        <div style={{ position: 'relative', zIndex: isShow ? '999' : '10' }}>
            <div className={[ 'point' ].join(' ')} onClick={() => setShow(true)} />

            <div className={[ 'content', isShow ? 'show' : 'hidden' ].join(' ')}>{<h1 onClick={() => setShow(false)}>{title}</h1>}</div>
        </div>
    );
};

export default Point;
