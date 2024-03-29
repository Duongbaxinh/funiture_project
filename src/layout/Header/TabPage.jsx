import React from 'react';
import './styles.scss'
import { Link } from 'react-router-dom';
const tabPage = [
    {
        nameTab: 'Home',
        endPoint: '/'
    },
    {
        nameTab: 'Shop',
        endPoint: '/shop'
    },
    {
        nameTab: 'Category',
        endPoint: '/category'
    },

    {
        nameTab: 'Blog',
        endPoint: '/blog'
    },
]
function TabPage({ colorText }) {
    return (
        <div>
            <ul className='header_bottom--tab' >
                {tabPage.map(({ nameTab, endPoint }, index) =>
                    <li key={index} >
                        <Link to={`${endPoint}`} style={{ color: colorText }}>
                            {nameTab}
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default TabPage;