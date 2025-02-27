import React from 'react'
import { assets, dummyTestimonial } from '../../assets/assets'

const Testimaonial = () => {
  return (
    <div className='pb-14 px-8 md:px-0'>
      <h2 className='text-3xl font-medium text-gray-800'>Testimonials</h2>
      <p className='md:text-base text-gray-500 mt-3'>Here from our learners as they share their journys of transformation, success and how our<br/> platform has mad a difference in their lifes</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-10 gap-4 mt-14">
        {dummyTestimonial.map((testimaonial, index) =>(
          <div  className="text-sm text-left border border-gray-500/30 pb-6 rounded-lg bg-white  shadow-md overflow-hidden" key={index}>
            <div className='flex  items-center gap-4 px-5 py-4 bg-gray-500/10'>
              <img className='h-12 w-12 rounded-full' src={testimaonial.image} alt={testimaonial.name} />
              <div className="">
                <h1 className='text-lg font-medium text-gray-800'>{testimaonial.name}</h1>
                <p className='text-gray-800/80'>{testimaonial.role}</p>
              </div>
              
            </div>
            <div  className='p-5 pb-7'>
                <div className="flex gap-0.5">{[...Array(5)].map((_, i)=>(
                  <img className='h-5' key={i} src={ i <Math.floor(testimaonial.rating) ? assets.star : assets.star_blank} alt="star" />
                ))}
                </div>
                <p className='text-gray-500 mt-5 '>{testimaonial.feedback}</p>
              </div>
              <a className='text-blue-500 underline px-5' href="#">read more</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimaonial