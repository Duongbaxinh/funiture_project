import React from 'react';
import { ReactComponent as IconSearch } from '../../../assets/svg/icon_search.svg'
import './styles.scss'
import { Link } from 'react-router-dom';
function CardSearch({ product, setIsSearch }) {
    return (
        <div className='cardSearch'>
            <i><IconSearch /></i>
            <Link to={`product/${product.id}`} >
                <div onClick={() => setIsSearch(false)}>
                    {product.product_name}
                </div>
            </Link>
        </div>
    );
}

export default CardSearch;