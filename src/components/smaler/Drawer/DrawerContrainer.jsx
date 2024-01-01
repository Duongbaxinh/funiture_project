import React from 'react';
import './styles.scss'
function DrawerContrainer({ children, onShowMenu }) {
    return (
        <>
            <div className='drawer_model' onClick={onShowMenu}>
            </div>
            <div className='drawer_container'>
                {children}
            </div>
        </>
    );
}

export default DrawerContrainer;