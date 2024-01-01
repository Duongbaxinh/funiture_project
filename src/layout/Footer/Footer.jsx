import React from 'react';
import { ReactComponent as SvgIconFace } from '../../assets/svg/icon_facebook.svg';
import { ReactComponent as SvgIconIn } from '../../assets/svg/icon_instagram.svg';
import { ReactComponent as SvgIconYo } from '../../assets/svg/icon_youtube.svg';
import { Link } from 'react-router-dom';
import './styles.scss';
function Footer(props) {
    const tabPage = [
        {
            nameTab: 'Home',
            endPoint: '/home'
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
            nameTab: 'Product',
            endPoint: '/product'
        },
        {
            nameTab: 'Contact Us',
            endPoint: '/contact'
        },
    ]
    const tabPolicy = [
        {
            nameTab: 'Copyright © 2023 Iconic. All rights reserve',
            endPoint: '/copy'
        },
        {
            nameTab: 'Private Policy',
            endPoint: '/private'
        },
        {
            nameTab: 'Terms of Use',
            endPoint: '/term'
        },
    ]
    const icons = [<SvgIconFace />, <SvgIconIn />, <SvgIconYo />];
    return (
        <div className='footer'>
            <div className="footer_top">
                <div className="footer_top--left">
                    <h1 className='footer_top--icon'>Iconic</h1>
                    <p>Design furniture Store</p>
                </div>
                <div className="footer_top--right">
                    <ul className='footer_top--tab' >
                        {tabPage.map(({ nameTab, endPoint }, index) =>
                            <li key={index} >
                                <Link to={`${endPoint}`} style={{ color: 'white' }} >
                                    {nameTab}
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
            <hr />
            <div className="footer_bottom">
                <ul className='footer_bottom--left'>
                    {tabPolicy.map(({ nameTab, endPoint }, index) =>
                        <li><Link to={endPoint} style={{ color: 'white' }}>
                            {nameTab}
                        </Link></li>
                    )}
                </ul>
                <div className="footer_bottom--right">
                    {icons.map((icon, index) => <i key={index} className='icon'>{icon}</i>)}
                </div>
            </div>
        </div>
    );
}

export default Footer;