import React from 'react';
import './styles.scss'
function GroupButton({ items, onSelected, isSelected }) {
    return (
        <div className='group'>
            {
                items.map((item, index) =>
                    <button
                        className={`group_button ${(index === isSelected) ? 'isActive' : ''}`}
                        onClick={() => onSelected(index)}
                        key={index}
                    >
                        {item}
                    </button>
                )
            }
        </div>
    );
}

export default GroupButton;