import { useState, useCallback, useMemo } from 'react';

const useDragItems = () => {
    const [ draggingIndex, setDIndex ] = useState(null);
    const [ dragOverIndex, setDOIndex ] = useState(null);
    const [ isDragging, setIsDraggin ] = useState(false);
    const updateItems = useCallback((items, draggingIndex, dragOverIndex) => {
        if (draggingIndex !== null && dragOverIndex !== null) {
            if (draggingIndex !== dragOverIndex);
            {
                let temp = items[draggingIndex];
                items[draggingIndex] = items[dragOverIndex];
                items[dragOverIndex] = temp;
            }
        }
        return items;
    }, []);

    const handlers = useMemo(
        () => {
            return {
                onDragStart: (e) => {
                    e.target.classList.add('actived');
                    setIsDraggin(true);
                    setDIndex(+e.target.getAttribute('data-index'));
                },
                onDragOver: (e) => {
                    setDOIndex(+e.target.getAttribute('data-index'));
                },
                onDragEnd: (e) => {
                    e.target.classList.remove('actived');
                    setDIndex(null);
                    setDOIndex(null);
                    setIsDraggin(false);
                },

                draggable: true
            };
        },
        [ window.innerWidth ]
    );

    return { handlers, draggingIndex, dragOverIndex, updateItems, isDragging };
};
export default useDragItems;
