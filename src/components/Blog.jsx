import React from 'react'
import Heading from './Heading'
import Img1 from '../assets/blogs/blog-1.jpg'
import Img2 from '../assets/blogs/blog-2.jpg'
import Img3 from '../assets/blogs/blog-3.jpg'

const BlogData =[
    {
        title:'How To Choose Perfect Smartwatch',
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet expedita quaerat rem, repellat natus debitis eaque dolores eum vel odit tempora consectetur nemo veritatis vero tenetur impedit quas velit dolor.",
        published: 'Jan 20, 2024 by Dilshad',
        image: Img1,
        aosDelay:'0'
    },
    {
        title:'How To Choose Perfect Gadget',
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet expedita quaerat rem, repellat natus debitis eaque dolores eum vel odit tempora consectetur nemo veritatis vero tenetur impedit quas velit dolor.",
        published: 'Jan 20, 2024 by Dilshad',
        image: Img2,
        aosDelay:'200'
    },
    {
        title:'How To Choose Perfect VR Headset',
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet expedita quaerat rem, repellat natus debitis eaque dolores eum vel odit tempora consectetur nemo veritatis vero tenetur impedit quas velit dolor.",
        published: 'Jan 20, 2024 by Dilshad',
        image: Img3,
        aosDelay:'400'
    },
]

const Blog = () => {
    return (
        <div className='py-12'>
            <div className="container">
                <Heading title='Recent News' subtitle={'Expolre Our Blogs'}></Heading>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7'>
                {
                    BlogData.map((data) => (
                        <div data-aos = 'fade-up' data-as-delay={data.aosDelay} className='bg-white dark:bg-gray-700' key={data.title}>
                            <div className='overflow-hidden rounded-2xl mb-2'>
                                <img src={data.image} alt='' className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500'></img>
                            </div>
                            <div className='space-y-2'>
                                <p className='text-xs text-gray-500'>{data.published}</p>
                                <p className='font-bold line-clamp-2'>{data.title}</p>
                                <p className='text-sm line-clamp-2 text-gray-600 dark:text-gray-400'>{data.subtitle}</p>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default Blog   