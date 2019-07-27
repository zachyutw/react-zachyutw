import React, { useCallback } from 'react';
import _ from 'lodash';
import useToggle from '../../../hooks/useToggle';
const SectionP = ({ children, toggle, parallax = {}, className, absolute, ...rest }) => {
    const [ actived, toggleActived ] = useToggle(true);
    return (
        <section className={[ !_.isEmpty(parallax) ? 'parallax' : '', absolute ? 'absolute' : '' ].join(' ')}>
            {toggle && (
                <div className='section toggle' onClick={toggle ? toggleActived : () => console.log('click')}>
                    {toggle}
                </div>
            )}
            <div className='bg' style={{ ...parallax }} />
            <div className={[ 'content', className, actived ? '' : 'hidden' ].join(' ')} {...rest}>
                {children}
            </div>
        </section>
    );
};
export default React.memo(SectionP);
