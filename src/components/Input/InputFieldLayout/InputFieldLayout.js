import React, { useMemo, useContext } from 'react';
import _ from 'lodash';
import s from './InputFeildLayout.module.css';
import GlobalContext from '../../../contexts/Global/GlobalContext';
const getMetaClassNames = (meta) => _.keys(_.pickBy(meta['touched'] ? meta : _.omit(meta, 'error'), _.identity)).join(' ');

const InputIconLabel = ({ icon, label }) => {
    const globalContext = useContext(GlobalContext);
    const { t } = globalContext;
    return (
        <label>
            {icon && (
                <span>
                    <i className={[ icon, 'icon' ].join(' ')} />
                </span>
            )}
            <span>{t(label)}</span>
        </label>
    );
};
const InputMeta = ({ hint, meta = {}, isTouched }) => {
    const globalContext = useContext(GlobalContext);
    const { t } = globalContext;
    const { touched, error } = meta;
    return (
        <div className='meta'>
            <div className={[ 'hint', hint ? '' : 'hidden' ].join(' ')}>{t(hint)}</div>
            <div className={[ 'errorMessage', touched && error ? '' : 'hidden' ].join(' ')}>{t(error)}</div>
        </div>
    );
};

const InputFeildLayout = ({ display = true, hint, label, icon, meta, className, style, hiddenOuter, children, ...rest }) => {
    const metaClassNames = useMemo(() => getMetaClassNames(meta), [ meta ]);
    return (
        <div className={[ 'legend', display ? '' : 'hidden', className, metaClassNames ].join(' ')} {...rest}>
            {hiddenOuter ? (
                <div className={s.field}>{children}</div>
            ) : (
                <React.Fragment>
                    <div className='content'>
                        <InputIconLabel label={label} icon={icon} />
                        <div className={s.field}>{children}</div>
                    </div>
                    <InputMeta hint={hint} meta={meta} />
                </React.Fragment>
            )}
        </div>
    );
};

export default InputFeildLayout;
