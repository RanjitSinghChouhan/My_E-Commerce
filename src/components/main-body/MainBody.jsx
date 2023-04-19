import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
// import Home from './home/Home';
// import About from './about/About';
// import Blog from './blog/Blog';
// import Contact from './contact/Contact';
// import Cart from './home/shopping cart/Cart';
import { Provider } from 'react-redux';
import store from '../../redux/store';
// import Checkout from './home/shopping cart/checkout/Checkout';
// import CartTable from './home/shopping cart/cart-table/CartTable';
// import SignUp from '../header/second-top/signup/SignUp';
// import Login from '../header/second-top/login/Login';
import { routes } from '../../router/routes';

function MainBody() {
  return (
    <Provider store={store}>
      <Suspense fallback={<div />}>
        <Routes>
          {routes &&
            routes.map((route, index) => (
              <Route path={route.path} key={index} element={<route.element />}>
                {route.children &&
                  route.children.map((childroute, i) =>
                    childroute.path === '' ? (
                      <Route index key={i} element={<childroute.element />} />
                    ) : (
                      <Route path={childroute.path} key={i} element={<childroute.element />} />
                    ),
                  )}
              </Route>
            ))}
          {/* <Route path='/' element={<Home />} />
                    <Route path='cart' element={<Cart />} >
                        <Route index element={<CartTable />} />
                        <Route path="checkout" element={<Checkout />} />
                    </Route>
                    <Route path='about' element={<About />} />
                    <Route path='blog' element={<Blog />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='signup' element={<SignUp />} />
                    <Route path='signin' element={<Login />} /> */}
        </Routes>
      </Suspense>
    </Provider>
  );
}

export default MainBody;
