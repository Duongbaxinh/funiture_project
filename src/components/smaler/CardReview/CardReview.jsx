import React from 'react';
import './styles.scss'
import { ReactComponent as SvgIconStar } from '../../../assets/svg/icon_startA.svg';

function CardReview({ user, content, rate, createAt }) {
    return (
        <div className='cartReview'>
            <div className="cartReview_avatar">
                <img src={user.avatar} alt="" />
            </div>
            <div className="cartReview_info">
                <h2>{user.name}</h2>
                <div style={{ display: 'flex', gap: '5px' }}>
                    <i><SvgIconStar /></i>
                    <i><SvgIconStar /></i>
                    <i><SvgIconStar /></i>
                    <i><SvgIconStar /></i>
                    <i><SvgIconStar /></i>
                </div>
                <p>{content}</p>
                <div className="cartReview_info-time">
                    <p>about 1 hour ago</p>
                    <p>Like</p>
                    <p>Reply</p>
                </div>
                <hr />
            </div>
        </div>
    );
}

export default CardReview;