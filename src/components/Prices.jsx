import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Prices = () => {
  return (
    <div className='bg-white w-full py-[60px] px-4 min-h-[600px]'>
        <div className='max-w-[1240px] mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
            <div className='flex flex-col py-8 justify-center items-center gap-2 px-7 border border-slate-500 hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="" /> 
                <h2 className='text-2xl font-bold text-center py-6'>Una persona</h2>
                <p className='text-4xl font-bolder'>$149 mil</p> 
                <div className='flex flex-col gap-1 mt-5'>
                    <div className="w-full border border-slate-200 mx-2 text-center px-6 py-2">500GB Almacenamiento</div>
                    <div className="w-full border border-slate-200 mx-2 text-center px-6 py-2">1 Usuario garantizado</div>
                    <div className="w-full border border-slate-200 mx-2 text-center px-6 py-2">Subir 2GB</div>
                </div> 
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Empezar</button>            
            </div>
            <div className='flex flex-col py-8 justify-center items-center gap-2 px-7 border border-slate-500 hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Double} alt="" />
                <h2 className='text-2xl font-bold text-center py-6'>Dos personas</h2>
                <p className='text-4xl font-bolder'>$200 mil</p>
                <div className='flex flex-col gap-1 mt-5'>
                    <div className="w-full border border-slate-200 mx-2 text-center px-6 py-2">500GB Almacenamiento</div>
                    <div className="w-full border border-slate-200 mx-2 text-center px-6 py-2">1 Usuario garantizado</div>
                    <div className="w-full border border-slate-200 mx-2 text-center px-6 py-2">Subir 2GB</div>
                </div>
                <button className='bg-[#000300] text-[#3dffc2] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 '>
                  Probar ahora
                </button>
            </div>
            <div className='flex flex-col py-8 justify-center items-center gap-2 px-7 border border-slate-500 hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="" />
                <h2 className='text-2xl font-bold text-center py-6'>Tres personas</h2>
                <p className='text-4xl font-bolder'>$280 mil</p>
                <div className='flex flex-col gap-1 mt-5'>
                    <div className="w-full border border-slate-200 mx-2 text-center px-6 py-2">500GB Almacenamiento</div>
                    <div className="w-full border border-slate-200 mx-2 text-center px-6 py-2">1 Usuario garantizado</div>
                    <div className="w-full border border-slate-200 mx-2 text-center px-6 py-2">Subir 2GB</div>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Empezar</button>
            </div>
        </div>
    </div>
  )
}

export default Prices
