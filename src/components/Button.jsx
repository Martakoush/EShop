import React from 'react'
import { addNewItem } from '../app/CartSlice'
import { useDispatch } from 'react-redux'
import toast from "react-hot-toast";


const Button = ({text,bgcolor,textcolor,handler,Item,data}) => {
    const dispatch = useDispatch()
    const addItem = (data) =>{
        toast.dismiss()
        dispatch(addNewItem(data))
        toast.success(`added to cart`);
    }
    if (Item == true){
        return (
        <button onClick={() => addItem(data)} className={`${bgcolor} ${textcolor} cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10`} >{text}</button>
        )
    }else{
        return (
        <button onClick={handler} className={`${bgcolor} ${textcolor} cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10`} >{text}</button>

        )
    }

}

export default Button
