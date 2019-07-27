import { useState, useEffect, useMemo } from 'react';

const getResponsiveSize = (scrollWidth, length, minWidth, rows) => {
    let _coursor;
    if (scrollWidth < 769) {
        _coursor = Math.floor(scrollWidth / minWidth) * rows;
    } else if (Math.floor(scrollWidth / minWidth) * rows < length) {
        _coursor = Math.floor(scrollWidth / minWidth) * rows;
    } else {
        _coursor = length;
    }
    return _coursor;
};

const useResponsiveGrid = (ref, propMinWidth, propRows = 3) => {
    const [ page, setPage ] = useState(1);
    const [ length, setLength ] = useState(0);
    const [ scrollWidth, setScrollWidth ] = useState(window.innerWidth);
    const [ rows, setRows ] = useState(propRows);
    const [ minWidth, setMinWidth ] = useState(propMinWidth);

    useEffect(
        () => {
            if (ref.current.scrollWidth) {
                setScrollWidth(ref.current.scrollWidth);
            }
        },
        [ ref.current.scrollWidth ]
    );

    const columns = useMemo(() => Math.floor(scrollWidth / minWidth), [ scrollWidth, minWidth ]);
    const size = useMemo(() => getResponsiveSize(scrollWidth, length, minWidth, rows), [ scrollWidth, length ]);

    const cursor = useMemo(
        () => {
            return scrollWidth ? size * page : 5 * page;
        },
        [ page, size ]
    );

    const isDataBottom = useMemo(() => size * page >= length, [ size, length, page ]);
    return { cursor, size, page, length, scrollWidth, columns, rows, minWidth, setPage, setRows, setLength, setMinWidth, isDataBottom };
};

export default useResponsiveGrid;
