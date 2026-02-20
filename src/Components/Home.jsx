import React from 'react'
import FeaturedProduct from './FeaturedProduct'
import Landingpage from './Landingpage'

const Home = () => {
  return (
    <div className="flex flex-col">
     
      <Landingpage/>
      <FeaturedProduct/>
    </div>
  )
}

export default Home