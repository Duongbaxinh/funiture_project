import React from 'react';
import './styles.scss'
function StepCart({ icon, label, isActive }) {
    return (
        <div className='stepCard' style={{ borderBottom: `${isActive ? ' 3px solid black' : ''}` }}>
            <p className={`stepCard_icon ${isActive ? 'active' : ''}`}>{icon}</p>
            <p className='stepCard_text'>{label}</p>

        </div>
    );
}

export default StepCart;