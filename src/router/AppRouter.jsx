import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LayoutContainer from '../layout/LayoutContainer/LayoutContainer';
import Register from '../layout/Register/Register';
import Login from '../layout/Login/Login';
import Category from '../page/Category/Category';
import Product from '../page/Product/Product';
import Cart from '../page/Cart/Cart';
import Home from '../page/Home/Home';
function AppRouter(props) {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<LayoutContainer />}>
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/category' element={<Category />} />
                    <Route path='/product' element={<Product />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/home' element={<Home />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default AppRouter;