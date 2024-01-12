import React from 'react';
import { IoIosAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import './styles.scss'
function QuantityButton({ product_quanity, onUp, onDown }) {
    return (
        <div className='btn-container' >
            <div className='btn-quantity'>
                <i onClick={onDown}><FiMinus /></i>
                <p>{product_quanity}</p>
                <i onClick={onUp}><IoIosAdd /></i>
            </div>
        </div>
    );
}

export default QuantityButton;