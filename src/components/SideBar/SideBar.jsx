import React from 'react';
import './styles.scss'
function SideBar(props) {
    return (
        <div className="sidebar">
            <ul className='sidebar--item'>
                <li><h1 style={{ paddingTop: '10px' }}>Avatar</h1></li>
                <li>Thông tin cá nhân</li>
                <li>Voucher</li>
                <li></li>
            </ul>
        </div>
    );
}

export default SideBar;