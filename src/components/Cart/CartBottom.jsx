import React from 'react'
import { selectCartTotalAmount } from '../../app/CartSlice'
import { useSelector } from 'react-redux'


const CartBottom = () => {
    const amount = useSelector(selectCartTotalAmount)
    return (
        <div className='dark:bg-white/90 bg-gray-900 fixed bottom-0 left-0 w-full h-[10vh]'>
            <div className='grid grid-cols-2 items-center w-full h-full gap-5 p-2'>
                <button className='cursor-pointer bg-primary py-3 px-5 rounded-4xl'>
                    BUY NOW
                </button>
                <div className='bg-primary py-3 px-5 rounded-4xl flex justify-center items-center'>
                    Total:${amount||''}
                </div>
            </div>
        </div>
    )
}

export default CartBottom
