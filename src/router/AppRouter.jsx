import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LayoutContainer from '../layout/LayoutContainer/LayoutContainer';
import Register from '../layout/Register/Register';
import Login from '../layout/Login/Login';
import Category from '../page/Category/Category';
import Product from '../page/Product/Product';
import Cart from '../page/Cart/Cart';
import Home from '../page/Home/Home';
import Blog from '../page/Blog/Blog';
import Catelogue from '../page/Catelogue/Catelogue';
function AppRouter(props) {
    return (
        <Router>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/' element={<LayoutContainer />}>
                    <Route path='/category' element={<Category />} />
                    <Route path='/search' element={<Catelogue />} />
                    <Route path='/product/:productId' element={<Product />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/blog' element={<Blog />} />
                    <Route errorElement={<Blog />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default AppRouter;