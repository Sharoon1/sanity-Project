 'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStaylinked } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { faBars } from '@fortawesome/free-solid-svg-icons';
function Header(){
 const navShow = ()=>{
    const x = document.getElementById('nav')
    if(x.style.display == 'block'){
        x.style.display  = 'none'
    }else{
        x.style.display = 'block'
    }




 }
 return(
        <>
        <div className='hidden md:block'>
            <div className=" lg:mx-20 md:mx-10 text-white">
<div className="flex justify-between pt-8">
    <div data-aos="zoom-out-down" data-aos-duration="2000" className='flex text-2xl  font-bold'>Xplore<div className='w-7 '><FontAwesomeIcon  icon={faStaylinked} style={{color: '#26f8cb'}} /></div> kill</div>
    <div >
       <ul  data-aos="zoom-out-down" data-aos-duration="1500" className=" flex text-lg md:gap-1 lg:gap-4">
        <li className=' relative   font-semibold px-2 text-white    hover:text-sharoon-400 transition duration-300 group' ><Link href='/'>HOME</Link>     
         <span className="absolute inset-x-0  bottom-0 w-full h-0.5 bg-sharoon-400   scale-x-0 origin-centerr duration-300 group-hover:scale-x-100"></span>
</li>
        <li className='relative text-white font-semibold  px-2 hover:text-sharoon-400 transition duration-300 group'><Link href='/course'>COURSE</Link>
        <span className='absolute inset-x-0 duration-300 w-full origin-center bg-sharoon-400 scale-x-0 h-0.5 bottom-0 group-hover:scale-x-100'></span>
        </li>
        <li className='relative px-2 text-white font-semibold hover:text-sharoon-400 transition duration-300 group'><Link href='/blog'>BLOG</Link>
        <span className='absolute inset-x-0 w-full  scale-x-0 bg-sharoon-400 h-0.5  bottom-0 duration-300 origin-center group-hover:scale-x-100'></span>
        </li>
        <li className='relative px-2 text-white font-semibold pb-2.5 hover:text-sharoon-400 transition duration-300 group'><Link href='/about'>ABOUT</Link>
        <span className='absolute inset-x-0 w-full bottom-1 scale-x-0 duration-300 bg-sharoon-400 h-0.5 origin-center group-hover:scale-x-100'></span>
        </li>
        <li className='relative px-2 text-white font-semibold pb-2.5 hover:text-sharoon-400 transition duration-300 group'><Link href='/contect'>CONTECT</Link>
        <span className='absolute inset-x-0 w-full bottom-1 scale-x-0 duration-300 bg-sharoon-400 h-0.5 origin-center group-hover:scale-x-100'></span>
        </li>
        </ul></div>
</div>
            </div>
        </div>
        {/* sm navbar */}
        <div className='md:hidden mt-3 '>
            <div className=" lg:mx-20 md:mx-10 text-white">
<div className=" justify-between ">
  <div className='flex justify-between mx-10'>
    <div className='flex text-2xl  font-bold'>Xplore<div className='w-7 '><FontAwesomeIcon  icon={faStaylinked} style={{color: '#26f8cb'}} /></div>kill</div>
   <div className=' '>
 <button className='text-sharoon-400 w-8 text-2xl ' onClick={navShow} >   <FontAwesomeIcon icon={faBars}/></button>
 </div>

  </div>
    <div  className='p-5'>
       <ul id='nav' className="hidden text-center text-lg bg-black bg-opacity-30">
        <li className='relative   font-semibold px-2 text-white    hover:text-sharoon-400 transition duration-300 group' ><Link href='/'>HOME</Link>     
         <span className="absolute inset-x-0  bottom-0 w-full h-0.5 bg-sharoon-400   scale-x-0 origin-left duration-300 group-hover:scale-x-100"></span>
</li>
        <li className='relative text-white font-semibold  px-2 hover:text-sharoon-400 transition duration-300 group'><Link href='/course'>COURSE</Link>
        <span className='absolute inset-x-0 duration-300 w-full origin-left bg-sharoon-400 scale-x-0 h-0.5 bottom-0 group-hover:scale-x-100'></span>
        </li>
        <li className='relative px-2 text-white font-semibold hover:text-sharoon-400 transition duration-300 group'><Link href='/blog'>BLOG</Link>
        <span className='absolute inset-x-0 w-full  scale-x-0 bg-sharoon-400 h-0.5  bottom-0 duration-300 origin-left group-hover:scale-x-100'></span>
        </li>
        <li className='relative px-2 text-white font-semibold hover:text-sharoon-400 transition duration-300 group'><Link href='/about'>ABOUT</Link>
        <span className='absolute inset-x-0 w-full bottom-1 scale-x-0 duration-300 bg-sharoon-400 h-0.5 origin-left group-hover:scale-x-100'></span>
        </li>
        <li className='relative px-2 text-white font-semibold pb-2.5 hover:text-sharoon-400 transition duration-300 group'><Link href='/contect'>CONTECT</Link>
        <span className='absolute inset-x-0 w-full bottom-1 scale-x-0 duration-300 bg-sharoon-400 h-0.5 origin-left group-hover:scale-x-100'></span>
        </li>
        </ul>
        </div>
</div>
            </div>
        </div>
        </>
    )
}
export default Header;