import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
            <div className='flex flex-col justify-center gap-2'>
                <p className='text-[#00df9a] font-bolder text-6md'>PLATAFORMA DE ANALISIS DE DATOS</p>
                <h1 className='md:text-4xl sm:text-3xl text-3xl font-semibold'>Maneja tus analiticas de forma central</h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum tellus sed lacinia convallis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis convallis, massa quis ornare pulvinar, ipsum felis congue lacus, ac fermentum sem eros et nisi. Morbi facilisis mollis risus sed dignissim. Vivamus turpis sapien,</p>
                <button className='bg-[#000300] py-3 hover:scale-105 duration-300 px-10 text-[18px] w-[200px] text-[#3dffc2] font-medium text-center rounded-md mr-auto my-[20px] shadow-lg shadow-cyan-500/50'>
                  Probar ahora
                </button>
            </div>
        </div>
    </div>
  )
}

export default Analytics