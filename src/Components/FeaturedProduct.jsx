import React from 'react'
import { productdata } from './data'
import Productcardinternal from './Productcardinternal'

const FeaturedProduct = () => {
  const products = productdata

  return (
    <div className="w-full">
      <div className="h-[100px] flex space-x-9 text-4xl items-center text-gray-900">
        <p>Features</p>
        <p>Bestsellers</p>
        <p>New Arrivals</p>
      </div>
      <div className="grid grid-cols-4 gap-4 w-full">
        {products.map((item, index) => (
          <Productcardinternal products={item} key={index} />
        ))}
      </div>
      <section className="bg-green-400 py-16 text-center text-black mt-12">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl font-bold mb-4">GMMK 3</h2>
          <p className="text-xl font-semibold mb-2">Over 1 Billion Keyboards in 1</p>
          <p className="mb-6">
            Get the most out of the world’s most customizable keyboard.
            9 points of modularity allow you to design your keyboard’s aesthetics,
            performance, and typing experience.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-md font-bold hover:bg-gray-800 transition">
            Build Now
          </button>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6 mt-12">
          <span className="font-semibold">Featured In:</span>
          <span className="font-medium">Digital Trends</span>
          <span className="font-medium">TechRadar</span>
          <span className="font-medium">The Verge</span>
          <span className="font-medium">IGN</span>
          <span className="font-medium">Dexerto</span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
          <div className="bg-white p-4 rounded-lg shadow">
            <span className="block font-bold">SHAUN'S BUILD</span>
            <p className="text-sm mt-2">"Solid performance and smooth typing experience."</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <span className="block font-bold">PURPLE HAZE</span>
            <p className="text-sm mt-2">"Unique aesthetic with great modularity options."</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <span className="block font-bold">SARA'S BUILD</span>
            <p className="text-sm mt-2">"Comfortable and customizable, perfect for long sessions."</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FeaturedProduct