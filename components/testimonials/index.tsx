import React from 'react'
import { InfiniteMovingCards } from '../ui/InfiniteMovingCards'
import { testimonials } from '@/data'

const Clients = () => {
  return (
    <div className='py-20' id='testimonials'>
      <h1 className='justify-center items-center flex uppercase text-2xl lg:text-4xl font-bold'>
        Feedback & {" "}
        <span className='pl-1 text-[#304847]'>
        Reactions
        </span>
      </h1>
      <div className=' m-8 flex flex-col items-center max-lg:mt-10'>
        <InfiniteMovingCards 
        items={testimonials}
        direction='right'
        speed='slow'
        />
      </div>
    </div>
  )
}

export default Clients