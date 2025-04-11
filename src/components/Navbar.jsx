import React from 'react'
import {IoMdSearch} from 'react-icons/io';
import {FaCaretDown, FaShoppingCart} from 'react-icons/fa'
import DarkMode from './DarkMode';

const MenuLinks = [
    {
        id: 1,
        name: "Home",
        links:'/#'
    },
    {
        id: 2,
        name: "Shop",
        links:'/#shop'
    },
    {
        id: 3,
        name: "About",
        links:'/#about'
    },
    {
        id: 4,
        name: "Blogs",
        links:'/#blog'
    }
]

const DropdownLinks =[
    {
        id:1,
        name:'Trending Products',
        link:'/#'
    },
    {
        id:2,
        name:'Best Selling',
        link:'/#'
    },
    {
        id:3,
        name:'Top Rated',
        link:'/#'
    },
]

const Navbar = ({handleOrderPopup}) => {
    return (
        <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
            <div className='py-4'>
                <div className='container flex justify-between items-center'>
                    <div className='flex gap-4 items-center'>
                        <a href='#' className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>ESHOP</a>
                        <div className='hidden lg:block'>
                            <ul className='flex gap-4 items-center'>
                                {
                                    MenuLinks.map((data,index)=>(
                                        <li key={index}>
                                            <a href={data.links} className='inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200'>{data.name}</a>
                                        </li>
                                    ))
                                }
                                <li className='relative cursor-pointer group'>
                                    <a href='#' className='flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2'>Quick Links
                                        <span>
                                            <FaCaretDown className='group-hover:rotate-180 duration-300'></FaCaretDown>
                                        </span>
                                    </a>
                                    <div className='absolute z-[999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 text-black dark:text-white'>
                                        <ul className='space-y-2'>
                                            {
                                                DropdownLinks.map((data,index) => (
                                                    <li key={index} src={data.link}>
                                                        <a className='text-gray-500 inline-block w-full rounded-md font-semibold dark:hover:text-white duration-200 p-2 hover:bg-primary/20'>
                                                            {data.name}
                                                        </a>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex justify-between gap-4 items-center'>
                        <div className='relative group hidden sm:block'>
                            <input type='text' placeholder='Search' className='search-bar'></input>
                            <IoMdSearch className='text-xl group-hover:text-primary duration-200 text-gray-600 dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3'></IoMdSearch>
                        </div>
                        <button className='relative cursor-pointer p-3' onClick={handleOrderPopup}>
                            <FaShoppingCart className='text-xl text-gray-600 dark:text-gray-400'></FaShoppingCart>
                            <div className='w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs'>4</div>
                        </button>
                        <div>
                            <DarkMode></DarkMode>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
