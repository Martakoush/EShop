import React from 'react'
import { setCloseCart,selectCartQTY,clearItems } from '../../app/CartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { ChevronDoubleRightIcon, XMarkIcon } from '@heroicons/react/24/solid';


const CartCount = ({onCartToggle}) => {
    const QTY = useSelector(selectCartQTY)
    const dispatch = useDispatch()
    const clear = ()=>{
        dispatch(clearItems())
    }
    return (
        <div className='dark:bg-gray-800 bg-white/90 w-full h-[8vh] flex items-center justify-between sticky top-0 left-0 border-b px-3'>
            <button className='dark:text-white text-black font-medium rounded-lg flex items-center justify-center cursor-pointer' onClick={clear}> <XMarkIcon className='dark:text-white/90 w-5 h-5 text-gray-900'></XMarkIcon> </button>
            <h1 className='dark:text-white text-black'>Cat Items: {QTY}</h1>
            <div className='dark:text-white text-black cursor-pointer' onClick={onCartToggle}><ChevronDoubleRightIcon className='w-5 h-5 text-gray-900 dark:text-white/90'></ChevronDoubleRightIcon></div>
        </div>
    )
}

export default CartCount
