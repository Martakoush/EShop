import React from 'react'
import { selectCartQTY,addNewItem,removeItem } from '../../app/CartSlice'
import { useDispatch, useSelector } from 'react-redux'

const CartItem = ({data}) => {
    const dispatch =useDispatch()
    const add = () => {
        dispatch(addNewItem())
    }
    const remove = (data) => {
        dispatch(removeItem(data))
    }
    return (
        <div>
            <div className='flex justify-between p-3 overflow-hidden relative bg-white/90 mt-2'>
                <div className='absolute text-wwhite-90 uppercase h-7 w-7 rounded-4xl flex items-center justify-center top-0 left-0 bg-gray-700 dark:bg-white/90 dark:text-gray-900 overflow-hidden'><button className='font-bold w-full h-full' onClick={()=>remove(data)}>X</button></div>
                <div className='w-36 h-auto'>
                    <img src={data.img} alt='' className='rounded-3xl'></img>    
                </div>
                <div className='flex flex-col justify-between items-center p-2'>
                    <div>
                        <h1 className='text-black'>${data.price}</h1>
                    </div>
                    <div className='text-black'>
                        <button onClick={remove} className='cursor-pointer'>{`<`}</button> {data.quantity} <button onClick={add} className='cursor-pointer'>{`>`}</button>
                    </div>
                    <div>
                        <h1 className='text-black'>${data.quantity * data.price}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem
