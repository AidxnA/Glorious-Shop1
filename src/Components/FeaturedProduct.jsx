import React from 'react'
import {fetchProducts } from '../Api/Api'

const FeaturedProduct = async() => {
    const product = await fetchProducts()

    console.log(product)
    return (
        <div className="h-[600px] bg-red-400 w-full">
            <div className="h-[100px]  flex space-x-4 text-4xl items-center mx-auto w-3/4">
                <p>Features</p>
                <p>Bestsellers</p>
                <p>New Arrivals</p>
            </div>{/*Features, BestSellers,New Arrivals*/}
            <div className = 'grid grid-cols-4 gap-4 w-3/4 mx-auto'>

<div className = 'h-[400px] w-[200px] bg-yellow-500'>1</div>
<div className = 'h-[400px] w-[200px] bg-yellow-500'>2</div>
<div className = 'h-[400px] w-[200px] bg-yellow-500'>3</div>
<div className = 'h-[400px] w-[200px] bg-yellow-500'>4</div>

            </div>{/*Render a grid 4 components*/}
        </div>
    )
}

export default FeaturedProduct