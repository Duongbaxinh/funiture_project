import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as SvgIconArrowRS } from '../../../assets/svg/icon_arrowRS.svg';
function LinkHeader({ titlePage }) {
    return (
        <>
            <div className='cart_linkpage'>
                <Link>Home</Link> <span> <i><SvgIconArrowRS /></i>{titlePage}</span>
            </div>
        </>
    );
}

export default LinkHeader;