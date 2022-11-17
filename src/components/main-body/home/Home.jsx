import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NewTopCategoryList from './NewTopCategory/NewTopCategoryList'
import NewProducts from './Products/NewProducts'
import Slider from './slider/Slider'

function Home() {
    return (
        <div>
            <Slider />
            <NewTopCategoryList />
            <NewProducts />
        </div>
    )
}

export default Home