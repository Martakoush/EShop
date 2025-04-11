import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa'

const FooterLinks = [
    {
        title:'Home',
        links:'/#',
    },
    {
        title:'About',
        links:'/#about',
    },
    {
        title:'Contact',
        links:'/#contact',
    },
    {
        title:'Blog',
        links:'/#blog',
    },
]

const Footer = () => {
    return (
        <div className='dark:bg-gray-950'>
            <div className="container">
                <div className="grid md:grid-cols-3 pb-20 pt-5">
                    <div className='py-8 px-4'>
                        <a href='#' className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>ESHOP</a>
                        <p className='text-gray-600 lg:pr-24 pt-3 dark:text-white/70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium, aperiam ut illum inventore ipsum officia molestiae maxime ratione minus voluptate quod quasi suscipit nesciunt quos natus, doloribus ipsa magni.</p>
                        <p className='text-gray-500 mt-4'>Made With By The Coding Journey</p>
                        <a href='https://www.youtube.com' target='_blank' className='inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full'>Visit Our Youtube Channel</a>
                    </div>
                    <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-bold sm:text-left mb-3'>Important Links</h1>
                            <ul className='space-y-3'>
                                {
                                    FooterLinks.map((data,index)=>(
                                        <li key={index}>
                                            <a href={data.links} className='text-gray-600 dark:text-gray-400 hover:text-black hover:dark:text-white duration-300'>
                                                {data.title}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-bold sm:text-left mb-3'>IQuick Links</h1>
                            <ul className='space-y-3'>
                                {
                                    FooterLinks.map((data,index)=>(
                                        <li key={index}>
                                            <a href={data.links} className='text-gray-600 dark:text-gray-400 hover:text-black hover:dark:text-white duration-300'>
                                                {data.title}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className='py-8 px-4 col-span-2 sm:col-auto'>
                            <h1 className='text-xl font-bold sm:text-left mb-3'>Address</h1>
                            <div>
                                <div className='flex items-center gap-3'>
                                    <FaLocationArrow></FaLocationArrow>
                                    <p>Noida , Uttar Pradesh</p>
                                    </div>
                                    <div className='flex items-center gap-3 mt-6'>
                                    <FaMobileAlt></FaMobileAlt>
                                    <p>+9729271012</p>
                                    </div>
                                    <div className='flex mt-6 gap-3 items-center'>
                                        <a href='#'>
                                            <FaInstagram className='text-3xl hover:text-primary duration-300'></FaInstagram>
                                        </a>
                                        <a href='#'>
                                            <FaFacebook className='text-3xl hover:text-primary duration-300'></FaFacebook>
                                        </a>                                        <a href='#'>
                                            <FaLinkedin className='text-3xl hover:text-primary duration-300'></FaLinkedin>
                                        </a>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
