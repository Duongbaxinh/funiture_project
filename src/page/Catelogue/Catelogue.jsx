import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as SvgIconArrowRS } from '../../assets/svg/icon_arrowRS.svg';
import { ReactComponent as IconStartA } from '../../assets/svg/icon_startA.svg';
import './style.scss';
import { PageContextState } from '../../context/PageContext';
import LoadingPage from '../LoadingPage';

function Catelogue(props) {
    const { dataProduct, changeSearch } = PageContextState()

    const [dataSearch, setDataSearch] = useState(null)
    useEffect(() => {
        setTimeout(() => {
            setDataSearch(dataProduct)
        }, 2000)
    }, [changeSearch])

    return (
        <>
            {!dataSearch ? <LoadingPage /> :
                <div className='catelogue'>
                    <Link>Home</Link> <span> <i><SvgIconArrowRS /></i>Chair&Benches</span>
                    <div className='category_linkpage'>
                    </div>
                    <h1>RESULTS</h1>
                    <div className='Body'>
                        <div className='grid_container2'>
                            {dataSearch.map((product, index) => (
                                <Link to={`/product/${product.id}`}>
                                    <div className={`item${index} content`}>
                                        <div className={`itemt${index}`}>

                                            <div className="images">
                                                <img src={product.product_thumbnail} alt='' />
                                            </div>
                                            <div className='details'>
                                                <h2>{product.product_name}</h2>
                                                <p className='details_des'>{product.product_des}</p>
                                                <h4>${product.product_price}</h4>
                                            </div>

                                        </div>
                                        <div className="item_over">
                                            <Link to={`/product/${product.id}`}>
                                                <button>View Detail</button>
                                            </Link>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>
            }
        </>
    );
}

export default Catelogue;