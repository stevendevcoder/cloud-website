import React, { useState } from 'react'
import { HiMenu } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => setNav(!nav)

  console.log(nav);

  return (
    <div className='flex justify-between items-center max-w-[1240px] h-24 mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-normal text-[#00df9a] tracking-wider'>Cloud</h1>
        <ul className='hidden md:flex'>
            <li className='p-4'>Inicio</li>
            <li className='p-4'>Compañia</li>
            <li className='p-4'>Contacto</li>
            <li className='p-4'>Nosotros</li>
            <li className='flex justify-center items-center'>
                <button className='bg-white rounded-lg py-2 px-6 text-[#000] font-medium'>Empezar</button>
            </li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={35}/> : <HiMenu size={35}/> }
        </div>
        <div className={!nav ? 'md:hidden fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' 
            : 'md:hidden fixed left-[-100%] top-0 ease-in-out duration-300'}>
            <h1 className='w-full m-4 text-3xl font-bold text-[#00df9a]'>Cloud</h1>
            <ul className='pt-24 px-4 uppercase '>
                <li className='p-4 border-b border-gray-600'>Inicio</li>
                <li className='p-4 border-b border-gray-600'>Compañia</li>
                <li className='p-4 border-b border-gray-600'>Contacto</li>
                <li className='p-4'>Nosotros</li>
                <li className='flex mt-8 justify-start items-center'>
                    <button className='bg-white rounded-lg py-2 px-6 text-[#000] font-medium hover:scale-105 duration-300'>Empezar</button>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
