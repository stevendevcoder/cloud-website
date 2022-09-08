import React from 'react'

const Contact = () => {
  return (
    <div className='w-full py-24 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Quieres tips & trucos para optimizar tu flujo?
            </h1>
            <p>Ingresa a nuestro newletter y mantente actualizado</p>
        </div>
        <div className='my-4'>
            <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
                className='p-3 flex w-full rounded-md text-black'
                type='email'
                placeholder='Tu email'
            />
            <button className='bg-[#00df9a] hover:scale-105 duration-300 text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
                Enviar
            </button>
            </div>
                <p>
                Nos importa la proteccion y privacidad de los datos{' '}
                <span className='text-[#00df9a]'>Privacy Policy.</span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Contact