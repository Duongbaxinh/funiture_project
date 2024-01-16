import React from 'react';
import { IoIosAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import './styles.scss'
function QuantityButton({ quantity, onUp, onDown }) {
    return (
        <div className='btn-container' >
            <div className='btn-quantity'>
                <i onClick={onDown}><FiMinus /></i>
                <p>{quantity}</p>
                <i onClick={onUp}><IoIosAdd /></i>
            </div>
        </div>
    );
}

export default QuantityButton;