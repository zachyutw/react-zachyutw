import React from 'react';
const Marker = ({ text, className, onClick, imgSrc }) => {
    return (
        <div className={[ 'marker', className ].join(' ')} onClick={onClick} style={{ backgroundColor: imgSrc ? 'transparant' : '' }}>
            <p> {text}</p>
            {/* <img src={imgSrc} className='cover' /> */}
        </div>
    );
};
export default Marker;
