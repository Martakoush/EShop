import React from 'react'
import Button from './Button'

const ProductCard = ({data}) => {
    return (
        <div className='mb-10'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center'>
                {
                    data.map((data) => (
                        <div key={data.id} data-aos='fade-up' data-aos-delay={data.aosDelay} className='group'>
                            <div className='relative'>
                                <img src={data.img} className='h-[180px] w-[260px] object-cover rounded-md'></img>
                                <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full text-center group-hover:backdrop-blur-sm transition-all h-full justify-center items-center duration-200 hidden group-hover:flex'>
                                    <Button text={'Add to cart'} bgcolor={'bg-primary'} textcolor={'text-white'}></Button>
                                </div>
                            </div>
                            <div className='leading-7'>
                                <h2 className='font-semibold'>{data.title}</h2>
                                <h2 className='font-bold'>${data.price}</h2>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductCard
