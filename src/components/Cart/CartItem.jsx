import React from 'react'
import { addNewItem,removeItem,removeOneItem } from '../../app/CartSlice'
import { useDispatch, } from 'react-redux'
import {  MinusCircleIcon, PlusCircleIcon, XMarkIcon } from '@heroicons/react/24/solid'


const CartItem = ({data}) => {
    const dispatch =useDispatch()
    const add = (data) => {
        dispatch(addNewItem(data))
    }
    const remove = (data) => {
        dispatch(removeItem(data))
    }
    const removeOneItem2 = (data) =>{
        dispatch(removeOneItem(data))

    }
    return (
        <div>
            <div className='flex justify-between p-3 overflow-hidden relative bg-gradient-to-br from-white to-gray-200/90 dark:from-gray-500 dark:to-gray-700 mt-2'>
                <div className='absolute text-wwhite-90 h-6 w-6 rounded-4xl flex items-center justify-center top-0 left-0 bg-gray-700 dark:bg-white/90 dark:text-gray-900 text-white overflow-hidden'><button className='font-bold w-full h-full' onClick={()=>remove(data)}><XMarkIcon></XMarkIcon></button></div>
                <div className='w-36 h-auto'>
                    <img src={data.img} alt='' className='rounded-3xl'></img>    
                </div>
                <div className='flex flex-col justify-between items-center p-2'>
                    <div>
                        <h1 className='text-black dark:text-white'>{data.price}$</h1>
                    </div>
                    <div className='text-black dark:text-white flex items-center justify-center gap-2'>
                        <button onClick={()=>removeOneItem2(data)} className='cursor-pointer'><MinusCircleIcon className='w-5 h-5'></MinusCircleIcon></button> {data.quantity} <button onClick={()=>add(data)} className='cursor-pointer'><PlusCircleIcon className='w-5 h-5'></PlusCircleIcon></button>
                    </div>
                    <div>
                        <h1 className='text-black dark:text-white'>{data.quantity * data.price}$</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem
