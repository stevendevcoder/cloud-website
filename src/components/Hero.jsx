import React from 'react'
import { AiOutlineArrowDown } from 'react-icons/ai'

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2 tracking-widest'>CRECIENDO CON DATOS Y ANALITICAS</p>
            <h1 className='md:text-6xl sm-text-5xl text-4xl font-bold md:py-6'>Almacenamiento de datos</h1>
            <div className='mt-3'>
               <p className='sm:text-2xl md:text-3xl text-gray-400'>Rápido, finanzas flexibles para D2Cj</p>
            </div>
            <button className='bg-[#00df9a] hover:scale-105 duration-300 py-2 text-[20px] font-semibold flex gap-x-2 items-center px-8 rounded-md text-black w-fit mx-auto my-[20px] shadow-md shadow-cyan-500/50'>
                Ver precios
                <AiOutlineArrowDown size={20}/>
            </button>

        </div>
    </div>
  )
}

export default Hero
