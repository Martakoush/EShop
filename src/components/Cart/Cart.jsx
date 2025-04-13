import React from 'react'
import CartCount from './CartCount'
import { setCloseCart, selectCartState } from '../../app/CartSlice'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from './CartItem'
import { selectCartItems } from '../../app/CartSlice'
import CartBottom from './CartBottom'


const Cart = () => {
  const dispatch = useDispatch()
  const ifCartState = useSelector(selectCartState)

  const onCartToggle = () => {
    dispatch(setCloseCart({ cartState: false }))
  }
  const selectItems = useSelector(selectCartItems)
  return (
    <div
      className={`fixed top-0 right-0 h-screen w-full sm:w-[500px] bg-white/90 dark:bg-gray-700 shadow-lg z-50 transform transition-transform duration-300 ease-in-out
        ${ifCartState ? 'translate-x-0' : 'translate-x-full'}
      `}
    >
      <div className='relative h-[30px] w-full '>
        <CartCount onCartToggle={onCartToggle} />
        <div className='h-[81vh] overflow-auto p-1'>
        {
          selectItems.map((item,index)=>(
            <CartItem data={item}></CartItem>
          ))
        }
        <CartBottom></CartBottom>
        </div>
      </div>
    </div>
  )
}

export default Cart
