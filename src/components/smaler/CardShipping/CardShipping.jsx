import React from 'react';
import './styles.scss'
function CardShipping({ title, value, tralling, onFunction, register, name }) {
    return (
        <div className='shipping'>
            <div className="shipping_leading">
                {register &&
                    <input type="radio" name='payment'
                    />
                }
                {onFunction &&
                    <input type="radio" value={value} name={name}
                        onClick={() => onFunction(value)}
                    />
                }

                <p>{title}</p>
            </div>
            <div className="shipping_trailing">
                {tralling}
            </div>

        </div>
    );
}

export default CardShipping;