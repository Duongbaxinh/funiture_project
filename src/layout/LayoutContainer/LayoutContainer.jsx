import React from 'react';
import { Navigate, Outlet, useOutlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const PrivateRouter = ({ children, enable }) => {
    if (!enable) return children;
    const userInfo = localStorage.getItem('userInfo')
    // eslint-disable-next-line no-unused-expressions
    userInfo ? children : <Navigate to={'/login'} />
}
const LayoutContainer = ({
    isPrivateRouter = false,
    showHeader = true,
    showFooter = true
}) => {
    const ol = useOutlet();
    let props = ol?.props;
    while (props?.children) {
        props = props.children.props;
    }
    return (
        <>
            <PrivateRouter enable={isPrivateRouter} />
            {showHeader && <Header />}
            <Outlet />
            {showFooter && <Footer />}

        </>


    );
}


export default LayoutContainer;