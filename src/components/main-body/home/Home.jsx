import React from 'react'
import { Provider } from 'react-redux'
import NewTopCategoryList from './NewTopCategory/NewTopCategoryList'
import NewProducts from './Products/NewProducts'
import Slider from './slider/Slider'
import store from '../../../redux/store'

function Home() {
    return (
        <Provider store={store}>
            <div>
                <Slider />
                <NewTopCategoryList />
                <NewProducts />
            </div>
        </Provider>
    )
}

export default Home