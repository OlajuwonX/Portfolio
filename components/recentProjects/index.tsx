import { projects } from '@/data'
import React from 'react'
import { PinContainer } from '../ui/3dPin'
import { Send } from 'lucide-react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const Projects = () => {
  return (
    <div className='py-20' id='projects'>
      <h1 className='uppercase text-2xl lg:text-4xl font-bold'>
        A small selection of my {' '}
        <span className='pl-[5px] text-[#304847]'>
        recent projects
        </span>
      </h1>
      <div className=' flex flex-wrap items-center justify-center p-4 gap-x-13 mt-4'>
        {projects.map(({id, title, des, img, iconLists, link, imgHeight, imgWidth }) =>
        <div key={id} className='sm:h-[28rem] lg:min-h-[32.5rem] h-[32rem] flex  items-center justify-center sm:w-[570px] w-[70vw] lg:mb-0.5 mb-[-5px]'>
          <PinContainer title={link} href={link}>
            <div className='relative flex items-center justify-center sm:w-[570px] w-[67vw] lg:w-[35vw] overflow-hidden sm:h[40vh] h-[15vh] min-h-[240px] mb-9 '>
              {/* <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d] '>
                <Image src="/bg.png" alt="bg-img" />
              </div> */}
              <Image src={img} alt={title} height={imgHeight} width={imgWidth} className='w-full h-auto object-contain  z-10 relative '/>
            </div>
            <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
              {title}
            </h1>

            <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
              {des}
            </p>

            <div className='flex items-center justify-between mt-7 mb-3'>
              <div className='flex items-center'>
                {iconLists.map((icon, index) => (
                  <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center' 
                  style={{
                    transform: `translateX(-${5 * index * 2}px)`}}
                  >
                    <Image src={icon} alt={icon} width={38} height={38} className='p-2'/>
                  </div>
                ))}
              </div>

              <div className='flex justify-center items-center'>
                <p className='flex lg:text-xl md:text-sm text-sm'>Visit Project</p>
                <Send className='m-3' size={18} color='green' />
              </div>
            </div>
          </PinContainer>
        </div>
        )}
      </div>
    </div>
  )
}

export default Projects