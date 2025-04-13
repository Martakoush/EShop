import React from 'react'
import { setCloseCart,selectCartQTY,clearItems } from '../../app/CartSlice'
import { useDispatch, useSelector } from 'react-redux'


const CartCount = ({onCartToggle}) => {
    const QTY = useSelector(selectCartQTY)
    const dispatch = useDispatch()
    const clear = ()=>{
        dispatch(clearItems())
    }
    return (
        <div className='bg-gray-800 dark:bg-white/90 w-full h-[8vh] flex items-center justify-between sticky top-0 left-0 border-b px-3'>
            <button className='text-white dark:text-black font-medium rounded-lg flex items-center justify-center cursor-pointer' onClick={clear}><span className='w-5 h-5 block'>X</span></button>
            <h1 className='text-white dark:text-black'>Cat Items: {QTY}</h1>
            <div className='text-white dark:text-black cursor-pointer' onClick={onCartToggle}>{'>>'}</div>
        </div>
    )
}

export default CartCount
