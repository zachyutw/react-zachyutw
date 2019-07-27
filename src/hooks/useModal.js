import { useState, useEffect } from 'react';

const useModal = (propActived = false, propConfirm) => {
    const [ onConfirm, setOnConfirm ] = useState(propConfirm);
    const [ actived, setAcitved ] = useState(propActived);
    const [ controller, setController ] = useState({});

    useEffect(
        () => {
            if (onConfirm) {
                setAcitved(true);
            }
        },
        [ onConfirm ]
    );
    // console.log(onConfirm);

    return [ actived, setAcitved, onConfirm, setOnConfirm, controller, setController ];
};

export default useModal;
