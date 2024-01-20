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
import ErrorPage from '../page/Error/Error';
import Admin from '../page/Admin/Admin';
import EditProduct from '../page/Admin/components/EditProdct/EditProduct';
function AppRouter(props) {
    return (
        <Router>
            <Routes>
                <Route path='/'>
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/admin' element={<LayoutContainer
                        isAdmin={true}
                        showFooter={false}
                        showHeader={false}
                        isPrivate={true}
                    ><Admin /></LayoutContainer>} />
                    <Route path='/home' element={<LayoutContainer><Home /></LayoutContainer>} />
                    <Route path='/editproduct/:productId' element={<EditProduct />} />
                    <Route path='/category' element={<LayoutContainer><Category /></LayoutContainer>} />
                    <Route path='/product/:productId' element={<LayoutContainer><Product /></LayoutContainer>} />
                    <Route path='/search' element={<LayoutContainer><Catelogue /></LayoutContainer>} />
                    <Route path='/blog' element={<LayoutContainer><Blog /></LayoutContainer>} />
                    <Route path='/cart' element={<LayoutContainer><Cart /></LayoutContainer>} />
                </Route>
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;