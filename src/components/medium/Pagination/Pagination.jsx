import React from 'react';
import './styles.scss'
function Paginationpage({ items, isSelected, onNext, onPreviod }) {
    const numberarr = Array.from({ length: items }, (_, index) => index + 1);
    return (
        <ul className='pagination'>
            <li><button onClick={() => onPreviod(isSelected > 1 ? isSelected - 1 : 1)}>Prev</button></li>
            {numberarr.map((item, index) => (
                <li onClick={() => onNext(index + 1)}
                    className={`item ${isSelected === index + 1 ? 'selected' : ''}`}>{item}</li>
            ))}
            <li> <button onClick={() => onNext(isSelected + 1)}>Next</button></li>
        </ul>
    );
}

export default Paginationpage;