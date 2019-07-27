import React, { useEffect, useRef } from 'react';
import { initlizeStreetViewPanorama } from '../../../contexts/Geocation/GeocationContext';
import s from './StreetViewPanorama.module.css';
const StreetViewPanorama = ({ visible = true, google = {} }) => {
    const svRef = useRef(null);
    useEffect(
        () => {
            if (google) {
                initlizeStreetViewPanorama(google, svRef);
            }
        },
        [ svRef, google ]
    );
    return <div className={[ s.view, 'panorama', visible ? '' : 'hidden' ].join(' ')} ref={(_ref) => (svRef.current = _ref)} style={{ opacity: visible ? '1.0' : '0' }} />;
};

export default StreetViewPanorama;
