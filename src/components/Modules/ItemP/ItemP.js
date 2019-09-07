import React, { useCallback } from 'react';

const Exsit = ({ exsit, children, className, ...rest }) => {
    return (
        <div className={[ className, exsit ? '' : 'hidden' ].join(' ')} {...rest}>
            {children}
        </div>
    );
};
const CoverImage = ({ src }) => {
    const handleOnLoad = useCallback((e) => {
        // console.log(e);
    }, []);
    return <img onLoad={handleOnLoad} src={src} />;
};
const ItemP = ({
    className,
    onChange = (e, data) => {
        // console.log(data);
    },
    icon,
    src,
    text,
    children,
    value,
    name,
    index,
    actionType,
    ...rest
}) => {
    const handleOnChange = useCallback(
        (e) => {
            onChange(e, { name, value, actionType });
        },
        [ name, value, onChange, actionType ]
    );

    return (
        <div onClick={handleOnChange} className={[ 'itemP', className ].join(' ')} {...rest}>
            <Exsit exsit={src} className='imgContent'>
                <CoverImage src={src} />
            </Exsit>
            <Exsit exsit={icon} className='iconContent'>
                <i className={[ 'icon', icon ].join('  ')} />
            </Exsit>

            <div className='itemContent'>
                <Exsit exsit={text} className='text'>
                    {window.t(text)}
                </Exsit>
                <Exsit exsit={children} className='childContent'>
                    {children}
                </Exsit>
            </div>
        </div>
    );
};

export default ItemP;
