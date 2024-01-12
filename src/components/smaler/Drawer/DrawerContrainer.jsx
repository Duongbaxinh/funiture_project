import React from 'react';
import './styles.scss'
function DrawerContrainer({ children, onShowMenu, position }) {
    return (
        <>
            <div className='drawer_model' onClick={onShowMenu}>
            </div>
            <div className={`drawer_container${position}`}>
                {children}
            </div>
        </>
    );
}

export default DrawerContrainer;