import { lazy } from "react"

const login = lazy(() => import('../components/header/second-top/login/Login'))
const signup = lazy(() => import('../components/header/second-top/signup/SignUp'))
const home = lazy(() => import('../components/main-body/home/Home'))
const about = lazy(() => import('../components/main-body/about/About'))
const blog = lazy(() => import('../components/main-body/blog/Blog'))
const contact = lazy(() => import('../components/main-body/contact/Contact'))
const cart = lazy(() => import('../components/main-body/home/shopping cart/Cart'))
const checkout = lazy(() => import('../components/main-body/home/shopping cart/checkout/Checkout'))
const cartTable = lazy(() => import('../components/main-body/home/shopping cart/cart-table/CartTable'))
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

export const routes = [
    {
        path: 'signin',
        element: login
    },
    {
        path: 'signup',
        element: signup
    },
    {
        path: '/',
        element: home
    },
    {
        path: 'about',
        element: about
    },
    {
        path: 'blog',
        element: blog
    },
    {
        path: 'contact',
        element: contact
    },
    {
        path: 'cart',
        element: cart,
        children: [{
            path: 'checkout',
            element: checkout
        },
        {
            path: '',
            element: cartTable
        },
        ]
    },

]