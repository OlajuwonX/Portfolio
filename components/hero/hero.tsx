'use client'

import React, { useEffect, useState } from 'react'
import { Spotlight } from '../ui/Spotlight'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import { TextGenerateEffect } from '../ui/TextGenerateEffect'
import { TextRevealCard } from '../ui/TextRevealCard'
import { Send } from 'lucide-react'

const Hero = () => {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setMounted(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  if (!mounted) return null

  return (
    <div className="pb-20 pt-16 relative overflow-hidden cursor-pointer">
      
      {theme === 'dark' && (
        <>
          <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill="white" />
          <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill="purple" />
          <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill="blue" />
        </>
      )}

     
      <div className="absolute inset-0 z-0 bg-zinc-300 dark:bg-gray-950" />

      
      <div className="pointer-events-none absolute inset-0 z-[1] flex items-center justify-center bg-gray-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-gray-950" />

     
      <div
        className="pointer-events-none absolute z-20 h-50 w-60 rounded-full blur-3xl opacity-50 bg-blue-900 transition-transform duration-200 ease-out cursor-pointer"
        style={{
          transform: `translate(${mousePosition.x - 80}px, ${mousePosition.y - 80}px)`
        }}
      />

      {/* Hero */}
      <div className="flex justify-center relative my-20 z-20">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] relative z-10 flex flex-col items-center justify-center px-4 text-center">    
            <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4, ease: 'easeIn' }}
            className="uppercase tracking-widest text-[14px] text-center font-bold text-[#5a5a7f] ">
              PhantomDev Portfolio powered by Next.js
            </motion.h2>

            <TextRevealCard 
            revealText=''
            text='Bridging Creativity and Usability.'
            /> 

            <TextGenerateEffect 
            words='I&apos;m Olajuwon Olasimbo, a frontend developer with over 2 years of experience building websites using React, Next.js and TypeScript. I specialize in creating fast, responsive and user-friendly interfaces with modern tools like Tailwind CSS, ShadCN and Aceternity UI. My focus is on clean code and seamless user experiences. Let&apos;s work together to bring your ideas to life.'
            className='text-center md:tracking-wider mb-4 text-[18px] md:text-lg lg:text-2xl'
            />

            <a href="#about">
              <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-xl border bg-[#c3dae8d3] dark:bg-[#1c182bd3] border-red-400/[0.7] bg-[length:200%_100%] px-5 font-medium text-gray-700 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-5 hover:px-2 hover:h-10 flex-row gap-2">
                Show my work <Send height={12} width={12} />
              </button>
            </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
