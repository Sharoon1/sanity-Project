import Image from "next/image";
import Button from "../(component)/button/button";
import Navbar from "../(component)/navbar/navbar";
import home from '../../public/assets/best.png'
import hom from '../../public/assets/unifront.jpg'
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

const fetchaboutapi =async()=> {
const api = client.fetch("*[_type == 'about']",{},{
  cache: 'no-cache'
})
return api
}
async function About(){
  const abou = await fetchaboutapi()
  // console.log('about', abou)
  return(
    <>
    <Navbar text='ABOUT'/>
    {abou.map((item)=>{
      
      return(
        <div className="block md:flex mx-10 md:mx-20 lg:mx-40 md:space-x-24 lg:space-x-32 my-20 md:my-40">
<div  data-aos-duration="1500" data-aos="fade-down-right">

    <div>
      <div className="text-4xl md:text-5xl text-sharoon-400 text-center font-extrabold ">{item.heading}</div>
    <div className="my-10">{item.discription}</div>
    <div><Button text='EXPLORE NOW'/></div>
    </div>
</div>
   <img   src={urlForImage(item.poster).url()} alt="uni pic"
className="w-1/3 md:block hidden bg-slate-400  rounded-2xl hover:shadow-2xl"
></img>
<div className="flex md:hidden  justify-center mt-20"> 

<Image  data-aos-duration="1500" data-aos="fade-down-left" src={hom} alt="uni pic"
   width='0'
   height='0'
   className="w-11/12 text-center md:hidden block bg-slate-400  rounded-2xl hover:shadow-2xl"
/>
   </div>

    </div>
      )
    })
    }
    
    </>
  )
}
export default About;