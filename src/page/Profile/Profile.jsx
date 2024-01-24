import React from 'react';
import './styles.scss';

function Profile(props) {

    return (
        <div className='profile'>
            {/* SIDEBAR */}
            <div className="profile_sidebar">
                <ul className='profile_sidebar--item'>
                    <li><h1 style={{ paddingTop: '10px' }}>Avatar</h1></li>
                    <li>Thông tin cá nhân</li>
                    <li>Voucher</li>
                    <li></li>
                </ul>
            </div>
            {/* ORDER */}
            <div className="profile_info">
                <h1>Hồ sơ của tôi</h1>
            </div>

        </div>
    );
}

export default Profile;