import { socialMedia } from '@/data'
import { ThumbsUp } from 'lucide-react'
import React from 'react'
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='w-full mb-[100px] md:mb-5 pb-10' id='contact'>
        <div className='flex flex-col items-center'>
            <h1 className="justify-center items-center flex flex-wrap text-center text-2xl lg:text-4xl font-bold lg:max-w-[45vw] ">
            Ready to take your digital experience to the{" "}
            <span className="text-[#304847] pl-1">next level?
            </span> Let&apos;s connect today to explore how I can support you in reaching your goals.
            </h1>
            <a
                href="mailto:olasimboolajuwon@gmail.com"
                className="inline-flex h-12 animate-shimmer items-center justify-center rounded-xl border bg-[#c3dae8d3] dark:bg-[#1c182bd3] border-red-400/[0.7] bg-[length:200%_100%] px-5 font-medium text-gray-700 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-5 hover:px-2 hover:h-10 flex-row gap-2"
                >
                Click to connect <ThumbsUp size={'18px'} />
            </a>
            <div className='flex flex-col mt-15 md:flex-row justify-between items-center'>
                <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2025 PhantomDev
                </p>
                <div className='flex items-center md:gap-3 gap-6'>
                    {socialMedia.map((profile) => (
                       <div 
                        key={profile.id} 
                        className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter  backdrop-blur-lg saturate-200 bg-[#16131ed3] rounded-lg border mt-2'
                        >
                            <a href={profile.link} target='_blank' rel='noopener noreferrer'>
                                <Image src={profile.img} alt={profile.img} width={20} height={20} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>

        </div>

    </footer>
  )
}

export default Footer