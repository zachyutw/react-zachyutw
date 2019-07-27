import React, { useState, useEffect, useRef } from 'react';
import s from './Polyline.module.css';
const defaultConfig = {
    path: [],
    geodesic: true,
    strokeColor: '#FFFFFF',
    strokeOpacity: 0.8,
    strokeWeight: 5
};

const Polyline = ({ config, path, google, visible = true }) => {
    const ref = useRef(null);
    const [ pointPath, setPointPath ] = useState(null);
    useEffect(
        () => {
            if (pointPath && google) {
                const { map } = google;
                pointPath.visible = visible;
                pointPath.setMap(map);
            }
        },
        [ visible ]
    );

    useEffect(
        () => {
            if (pointPath && google) {
                const { map } = google;
                pointPath.setPath(path);
                pointPath.setMap(map);
            }
        },
        [ path ]
    );
    useEffect(
        () => {
            if (google) {
                const { maps } = google;
                const _pointPath = new maps.Polyline({ ...defaultConfig, ...config });
                setPointPath(_pointPath);
            }
        },
        [ google ]
    );

    return <div className={[ s.view, 'polyline' ].join(' ')} ref={(_ref) => (ref.current = _ref)} style={{ opacity: true ? '1.0' : '0' }} />;
};

export default Polyline;
