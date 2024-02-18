import React, { useEffect, useState } from 'react'
// import { IoMdHome } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { MdOutlineMenu } from "react-icons/md";
// import hero from '../assets/hero.png'
// import about from '../assets/about.png'

// import { FaSearch } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
import pizzapop from '../assets/pizzapop.png'
import pizzalove from '../assets/pizzalove.png'
import pizzadelievery from '../assets/pizzadelievery.png'
import share from '../assets/share.png'
import { data } from '../data/Pizza'
import pizza2 from '../assets/pizza2.jpeg'
import promise from '../assets/promise.png'
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Home = () => {
  const [show, setShow] = useState("-100vw")
  const [bg, setBg] = useState("transparent")
  const [color, setColor] = useState("black")
  const [id2, setId2] = useState(10)
  const [arr, setArr] = useState(data)
  useEffect(() => {
    setArr(data.filter((item) => item.id <= id2))
  }, [id2])
  useEffect(() => {
    window.addEventListener("scroll", () => {
      // console.log(document.documentElement.scrollTop);
      // console.log(document.documentElement.scrollHeight);
      // console.log(window.innerHeight);
      if (document.documentElement.scrollTop > 2) {
        setBg("black")
        setColor("white")
      }
      else {
        setBg("transparent")
        setColor("black")
      }
    })

  }, [])
  return (
    <>
      <div className="navbar sticky sm:fixed top-0 w-full  text-white xl:flex xl:justify-center">
        <div  style={{ backgroundColor: bg, color: color }} className='inner  xl:w-[70rem] relative flex text-3xl items-center justify-between px-3 lg:px-16 xl:px-0 py-5 lg:py-6'>
          <h1>Pizza</h1>
          <ul style={window.innerWidth > 767 ? { top: show, color: color } : { top: show, color: 'white' }} className='menu flex    py-5 md:py-0 gap-4 md:gap-x-7 text-lg items-center absolute z-1 bg-slate-800 md:bg-transparent w-full flex-col md:flex-row    left-0 md:static md:w-auto '>
          <a href="#home"><li className='list'>Home</li></a> 
           <a href="#menu"><li className='list'>Menu</li></a> 
           <a href="#about"><li className='list'>About</li></a> 
           <a href="#contact"><li className='list'>Contact</li></a> 

            <li className='md:hidden'>
              <button onClick={() => setShow("-100vw")} className=' bg-black text-white px-5 py-3 '>Close</button>
            </li>
          </ul>
          <FaCartShopping className='hidden md:block' />
          <MdOutlineMenu className=' md:hidden' onClick={() => setShow("0")} />
        </div>
      </div>
      <div id="home" className="section text-white xl:flex xl:justify-center">
        <div className='   xl:w-[70rem] sm:h-[100svh]  px-3 lg:px-16 xl:px-0   flex sm:items-center flex-col sm:flex-row sm:gap-5 lg:gap-7'>
          <div className='w-full mt-4 sm:mt-0 '>
            <h1 className=' text-5xl lg:text-6xl text-black'>Supreme Pizza</h1>
            <p className='text my-3  text-black lg:my-4 lg:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga consequuntur dolorum voluptas itaque nisi? Recusandae, reiciendis. Dolores ex quia fugiat reiciendis</p>
            <div className="btns flex gap-3 items-center lg:text-lg ">
              <button className='flex items-center gap-1 rounded bg-[#212121] px-3 py-2'>Explore Menu <MdArrowForwardIos /></button>
              <button className='flex items-center gap-1 rounded font-semibold text-white bg-[#ff9f0d] px-3 py-2'>Order Now</button>
            </div>
          </div>
          <div className='relative z-[-1]   pizza  w-full my-6 sm:my-0'>
            <img src={pizzapop} alt="" />
          </div>
        </div>
      </div>
      <div id="menu" style={{scrollMarginTop:"6rem"}}  className="cards  xl:flex xl:justify-center">
        <div className='xl:w-[70rem] px-3 lg:px-16 xl:px-0 flex flex-col items-center  '>
          <h1 className='text-center text-2xl lg:text-4xl underline'>New Toppings</h1>
          <div className="itemspizza  lg:my-4 grid grid-cols-1 sm:grid-cols-2 w md:grid-cols-3 lg:grid-cols-4 gap-x-2 ">
            {
              arr.map((pizza, index) => <div key={index} className=" w-full my-3 py-3 px-4 flex flex-col items-center item1 border-2 border-solid border-white">
                <img src={pizza.img} alt="" className='w-full' />
                <abbr title={pizza.name} className='pizzaname text-black my-2 font-semibold text-2xl'>{pizza.name.length < 14 ? pizza.name : `${pizza.name.slice(0, 14)}...`}</abbr>
                <p className='text text-center text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, voluptas. Vel porro sunt distinctio voluptatum expedita magnam reprehenderit dolore aspernatur?</p>
                <div className="btns flex gap-2 my-3 md:flex-col text-white">
                  <button className=' bg-[#212121] px-5 py-1 rounded'>Add to cart</button>
                  <button className=' bg-[#ff9f0d] px-5 py-1 rounded'>Order Now</button>
                </div>
              </div>)
            }


          </div>
          <button onClick={() => setId2(id2 + 10)} className=' bg-black text-white px-5 py-2 rounded'>Load More</button>
        </div>
      </div>
      <div id="about" style={{scrollMarginTop:"2rem"}} className="aboutus xl:flex xl:justify-center">
        <div className=' my-4 lg:mt-16 xl:w-[70rem] px-3 lg:px-16 xl:px-0 flex flex-col items-center'>
          <h1 className=' text-2xl underline lg:text-4xl'>About Us</h1>
          <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4'>
            <div className=" bg-slate-200 about1 flex flex-col items-center px-3 py-4">
              <img src={pizzalove} alt="" className=' w-full ' />
              <h2 className=' text-2xl font-semibold mt-2'>made with love</h2>
              <p className=' text-center my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eveniet illo, ut iusto suscipit vero, voluptatibus deserunt soluta nesciunt molestiae ex repudiandae ad voluptate? Itaque sapiente repudiandae, perferendis fugiat deserunt sunt assumenda veritatis quisquam laudantium ipsa magni molestias labore numquam?</p>
              <button className=' rounded bg-[#ff9f0d] text-white px-5 py-2'>Our Menu</button>
            </div>
            <div className=" bg-slate-200 about1 flex flex-col items-center px-3 py-4">
              <img src={pizzadelievery} alt="" className=' w-full ' />
              <h2 className=' text-2xl font-semibold mt-2'>30 minutes delievery</h2>
              <p className=' text-center my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eveniet illo, ut iusto suscipit vero, voluptatibus deserunt soluta nesciunt molestiae ex repudiandae ad voluptate? Itaque sapiente repudiandae, perferendis fugiat deserunt sunt assumenda veritatis quisquam laudantium ipsa magni molestias labore numquam?</p>
              <button className=' rounded bg-[#ff9f0d] text-white px-5 py-2'>Our Menu</button>
            </div>
            <div className=" bg-slate-200 about1 flex flex-col items-center px-3 py-4">
              <img src={share} alt="" className=' w-full ' />
              <h2 className=' text-2xl font-semibold mt-2'>Share with friends</h2>
              <p className=' text-center my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eveniet illo, ut iusto suscipit vero, voluptatibus deserunt soluta nesciunt molestiae ex repudiandae ad voluptate? Itaque sapiente repudiandae, perferendis fugiat deserunt sunt assumenda veritatis quisquam laudantium ipsa magni molestias labore numquam?</p>
              <button className=' rounded bg-[#ff9f0d] text-white px-5 py-2'>Our Menu</button>
            </div>
          </div>
        </div>
      </div>
      <div id="contact" style={{scrollMarginTop:"2rem"}} className="contactus xl:flex xl:justify-center">
        <div className='  items-center my-4 lg:mt-16 xl:w-[70rem] px-3 lg:px-16 xl:px-0 overflow-hidden '>
          <h1 className=' text-2xl text-center underline lg:text-4xl '>Contact Us</h1>
          <div className='md:flex md:gap-3 mt-5 '>
            <div className='md:w-[50%]  hidden md:flex md:flex-col gap-4'>
              <h1 className=' text-4xl lg:text-5xl font-semibold'>We will get back  to you soon!!</h1>
              <img src={promise} alt="" />
            </div>
            <form action="" className='   md:w-[50%]'>
              <div className='flex gap-2'>
                <input type="text" placeholder='Enter your firstname.. ' className=' w-[50%] outline-none text-lg  bg-[#f9f9f0] border-[1px] border-solid border-black rounded py-2 lg:py-4 pl-2' />
                <input type="text" placeholder='Enter your firstname.. ' className='w-[50%] outline-none text-lg bg-[#f9f9f0] border-[1px] border-solid border-black rounded py-2 lg:py-4 pl-2' />
              </div>

              <input type="text" placeholder='Enter your address..' className='w-full  my-2 text-lg outline-none  bg-[#f9f9f0] border-[1px] border-solid border-black lg:py-4 rounded py-2 pl-2' />
              <textarea placeholder='Enter your message' name="" id="" cols="30" rows="10" className='w-full text-lg  mt-2 outline-none  bg-[#f9f9f0] border-[1px] border-solid border-black rounded py-2 pl-2'></textarea>
              <input type="submit" value="Submit" className='  bg-[#ff9f0d] text-white w-full py-2 rounded lg:text-xl lg:inline'/>
            </form>
          </div>

        </div>
      </div>
      <div className="footer xl:flex xl:justify-center lg:mt-16 bg-[#212121]">
        <div className=' text-white  xl:w-[70rem] px-3 lg:px-16 xl:px-0 overflow-hidden py-5 lg:py-6 lg:h-[20rem] md:flex md:justify-between  '>
          
        <div className=' firstitem'>
          <h2 className=' font-medium text-lg  lg:text-2xl md:mt-0 mb-4'>Learn More</h2>
          <ul className=' text-gray-500'>
            <li className=' mb-2 md:text-sm lg:text-lg'>About Hilink</li>
            <li className=' mb-2 md:text-sm lg:text-lg'>Press Releses</li>
            <li className=' mb-2 md:text-sm lg:text-lg'>Environment</li>
            <li className=' mb-2 md:text-sm lg:text-lg'>Jobs</li>
            <li className=' mb-2 md:text-sm lg:text-lg'>Privacy Policy</li>
            <li className=' mb-2 md:text-sm lg:text-lg'>Contact Us</li>
          </ul>
        </div>
        <div className=' firstitem'>
          <h2 className=' font-medium text-lg lg:text-2xl mt-7 md:mt-0 mb-4'>Our Community</h2>
          <ul className=' text-gray-500'>
            <li className=' mb-2 md:text-sm lg:text-lg'>Climbing xixixi</li>
            <li className=' mb-2 md:text-sm lg:text-lg'>Hiking hilink</li>
            <li className=' mb-2 md:text-sm lg:text-lg'>Hilink kinthili</li>
          </ul>
        </div>
        <div className="contactus">
          <h2 className=' font-medium text-lg mt-7 md:mt-0 mb-4'>Contact Us</h2>
          <ul className=' text-gray-500'>
            <li className=' mb-2 md:text-sm lg:text-lg'>Admin Officer: <b className='ml-2'>123-456-7890</b></li>
            <li className=' mb-2 md:text-sm lg:text-lg'>Email Officer:  <b className='ml-2'>hilink@akinthil.com</b></li>
          </ul>
        </div>
        <div className="social">
          <h2 className=' font-medium text-lg lg:text-2xl mt-7 md:mt-0 mb-4'>Social</h2>
          <ul className=' flex '>
            <li className='mr-4'><FaFacebook className=' text-2xl'/></li>
            <li className='mr-4'><FaSquareInstagram className=' text-2xl' /></li>
            <li className='mr-4'><FaTwitter className=' text-2xl'/></li>
            <li className='mr-4'><FaYoutube className=' text-2xl'/></li>
          </ul>
        </div>
        </div>
      </div>
    </>
  )
}

export default Home
