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
import Shop from '../page/Shop/Shop';
import Purchase from '../page/Purchase/Purchase';
import Profile from '../page/Profile/Profile';
import AdminProduct from '../page/Admin/Page/AdminProduct/AdminProduct';
import AdminOrder from '../page/Admin/Page/AdminOrder/AdminOrder';
import AddProduct from '../page/Admin/components/AddProduct/AddProduct';
function AppRouter(props) {
    return (
        <Router>
            <Routes>
                <Route path='/'>
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/admin/product' element={<LayoutContainer
                        isAdmin={true}
                        showFooter={false}
                        showHeader={false}
                        isPrivate={true}
                    ><AdminProduct /></LayoutContainer>} />
                    <Route path='/admin/order' element={<LayoutContainer
                        isAdmin={true}
                        showFooter={false}
                        showHeader={false}
                        isPrivate={true}
                    ><AdminOrder /></LayoutContainer>} />
                    <Route path='/' element={<LayoutContainer><Home /></LayoutContainer>} />
                    <Route path='/shop' element={<LayoutContainer><Shop /></LayoutContainer>} />
                    <Route path='/profile' element={<LayoutContainer><Profile /></LayoutContainer>} />
                    <Route path='/purchase' element={<LayoutContainer><Purchase /></LayoutContainer>} />
                    <Route path='/editproduct/:productId' element={<EditProduct />} />
                    <Route path='/addproduct' element={<AddProduct />} />
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