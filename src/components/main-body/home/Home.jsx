import React from 'react'
import NewTopCategoryList from './NewTopCategory/NewTopCategoryList'
import Slider from './slider/Slider'

function Home() {
    return (
        <div>
            <Slider />
            <NewTopCategoryList />
        </div>
    )
}

export default Home