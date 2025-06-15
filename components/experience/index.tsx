import { workExperience } from '@/data'
import React from 'react'
import { Button } from '../ui/MovingBorder'

const Experience = () => {
  return (
    <div className='py-20' id='testimonials '>
      <h1 className='justify-center items-center flex uppercase text-2xl lg:text-4xl font-bold '>
        work  
        <span className='pl-[10px] text-[#304847]'>
          experience
        </span>
      </h1>
      <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-7'>
        {workExperience.map((card) =>(
            <Button key={card.id} 
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius='1.75rem' 
            className='flex-1 text-gray-500 dark:text-white border-red-400/[0.4]'
            >
                <div className='flex lg:flex-row flex-col lg:items-center px-3 py-6 md:p-5 lg:p-8 gap-2'>
                 <img src={card.thumbnail} alt={card.thumbnail} className='lg:w-32 md:w-20 w-16' />
                 <div className='lg:ms-5'>
                    <h1 className='text-start text-xl md:text-2xl font-bold'>
                        {card.title}
                    </h1>
                    <p className='text-start text-white-100 mt-3 font-semibold'>
                        {card.desc}
                    </p>
                 </div>
                </div>
            </Button>
        ))}
      </div>
    </div>
  )
}

export default Experience