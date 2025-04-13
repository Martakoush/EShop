import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Category from './components/Category'
import Category2 from './components/Category2'
import Services from './components/Services'
import Banner from './components/Banner'
import Products from './components/Products'
import headphone from './assets/hero/headphone.png'
import smartwatch2 from './assets/category/smartwatch2-removebg-preview.png'
import Blog from './components/Blog'
import Partners from './components/Partners'
import Footer from './components/Footer'
import Popup from './components/Popup'
import AOS from 'aos';
import 'aos/dist/aos.css'
import Cart from './components/Cart/Cart'
import { Toaster } from "react-hot-toast";

const BannerData = {
  discount: '30% OFF',
  title:'Fine Smile',
  date: '10 Jan to 28 Jan',
  image: headphone,
  title2: "Air Solo Bass",
  title3: 'Winter Sale',
  title4: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis veniam dignissimos beatae officia nemo molestias facilis maiores atque, officiis distinctio at expedita quae culpa impedit aperiam odit quasi. Repellendus, a!',
  bgColor: '#f42c37',
};

const BannerData2 = {
  discount: '30% OFF',
  title:'Happy Hours',
  date: '14 Jan to 28 Jan',
  image: smartwatch2,
  title2: "Smart Solo",
  title3: 'Winter Sale',
  title4: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis veniam dignissimos beatae officia nemo molestias facilis maiores atque, officiis distinctio at expedita quae culpa impedit aperiam odit quasi. Repellendus, a!',
  bgColor: '#2dcc6f',
};

const App = () => {

  const [orderPopup,setOrderPopup] = useState(false)

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup)
  }

  useEffect(()=>{
    AOS.init({
      duration:800,
      easing:'ease-in-sine',
      delay:100,
      offset:100,
    })
    AOS.refresh()
  },[])
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar handleOrderPopup={handleOrderPopup}></Navbar>
      <Hero handleOrderPopup={handleOrderPopup}></Hero>
      <Category></Category>
      <Category2></Category2>
      <Services></Services>
      <Banner data={BannerData}></Banner>
      <Products></Products>
      <Banner data={BannerData2}></Banner>
      <Blog></Blog>
      <Partners></Partners>
      <Footer></Footer>
      <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup}></Popup>
      <Cart></Cart>
    </div>
  )
}

export default App
