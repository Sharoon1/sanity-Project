import Button from "../(component)/button/button";
import Navbar from "../(component)/navbar/navbar";
import certificate from '../../public/assets/certificate.jpg'
import Image from "next/image";
import { client } from "@/sanity/lib/client";
//
export const fatchApie1 = async ()=>{
    const api2 = await client.fetch("*[_type == 'blogSection']",{},{
        cache: 'no-cache'
    })
    return api2
}
export const fatchApie = async ()=>{   
    const api1 = await client.fetch("*[_type == 'blog']",{},{
      cache: 'no-cache'
    })
  // console.log('client',api1)
  return api1
  //
  }
async function Blog(){
   const blo = await fatchApie()
//    console.log('bioooooooo',blo)
   const bio2 = await fatchApie1()
//    console.log('bio2', bio2)
   return(
        <>
       <Navbar text='Out Post'/>
     {blo.map((item)=>{
        return(

            <div className="block my-20 space-x-10  mx-10 md:mx-20 lg:mx-40 md:flex">
        <div className="space-y-3 w-full md:w-3/4 ">
    <h1 className="font-extrabold text-lg">{item.name}</h1>
   <div> <p className="text-sharoon-400 font-bold">{item.releaseDate}</p>
    <Image  src={certificate} className="w-full"  alt='certificate' /></div>
    <p className="text-sm tracking-wide">{item.discription}</p>
<div className="p-5 flex flex-col space-y-3 border-2">
    <h1 className="text-lg font-bold">Leave a Comment</h1>
<input className="outline-none border p-2 bg-slate-100" type="text" placeholder="Enter Name"/>
<input className="outline-none border p-2 bg-slate-100" type="text" placeholder="Enter Email"/>
<textarea className="outline-none border p-2 bg-slate-100" rows='5' placeholder="Your Comment"></textarea>
<div><Button text='POST COMMENT'/></div>
</div>
</div>
<div className="space-y-3 mt-5 mx-20 md:mx-0 w-full md:w-1/4 ">
   <h1 className="border text-center font-semibold p-3 bg-sharoon-400 text-white">{item.posCategori}</h1> 
{bio2.map((items)=>{
    return(
        <>
<div className="flex justify-between">
    <p>{items.course}</p><p>{items.postNumber}</p>
</div> 
        </>
    )
})}




</div>
</div>

)     })}
        </>
    )
}
export default Blog;