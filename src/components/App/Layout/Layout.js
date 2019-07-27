import React, { useCallback } from 'react';
import ButtonMenu from '../../Button/ButtonMenu/ButtonMenu';
// import ScreenP from '../../Screen/ScreenP/ScreenP';
// import useToggle from '../../../hooks/useToggle';
const Navbar = React.memo(() => {
    const handleOnClick = useCallback((e, data) => {
        console.log(data);
    }, []);
    return (
        <div className='nav'>
            <ButtonMenu name='menu' value='menu' onClick={handleOnClick} />
        </div>
    );
});

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />

            {children}
        </div>
    );
};
export default React.memo(Layout);
