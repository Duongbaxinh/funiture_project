import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';
const LayoutContainer = ({
    isAdmin = false,
    isPrivate = false,
    children,
    showHeader = true,
    showFooter = true
}) => {
    const naviage = useNavigate()
    if (isPrivate) {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'))
        !userInfo && naviage('/login')
    }
    return (
        <>
            {showHeader && <Header />}
            <div style={{
                padding: !isAdmin ? '0 60px' : '',
                marginTop: !isAdmin ? '130px' : 0
            }}>{children}</div>
            {showFooter && <Footer />}
        </>
    );
}


export default LayoutContainer;