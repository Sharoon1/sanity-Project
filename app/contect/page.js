import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Navbar from "../(component)/navbar/navbar"
import { faEnvelope, faHouseChimney, faMobilePhone, faPhone } from "@fortawesome/free-solid-svg-icons"
import Button from "../(component)/button/button"
import Link from "next/link"
import { client } from "@/sanity/lib/client"
const fetchapi = async ()=>{
    const api = client.fetch("*[_type == 'contact']",{},{
        cache: "no-cache"
    })
    return api
}

async function Contect(){
   const con = await fetchapi()
//    console.log('con', con)
   return(
<>
<Navbar text='Contect'/>
<div>
<iframe className="w-full p-10 h-96   "  src="https://maps.google.com/maps?q=faisalabad frooqabad&t=&z=11&ie=UTF8&iwloc=&output=embed" title="description"></iframe>
</div>
{con.map((item)=>{
    return  (

        <div className="my-20 mx-5 md:mx-40 block md:flex space-x-0 md:space-x-20 ">
    <div data-aos="flip-left"  data-aos-duration="2000" className="space-y-10">

<div className="flex space-x-10"> <span><FontAwesomeIcon className="text-sharoon-400 text-2xl" icon={faHouseChimney}/></span><div className="text-start text-sm"> <span className="font-light text-xl">{item.adress}</span>
    <br/>
    </div></div>
<div className="flex space-x-10"><FontAwesomeIcon className="text-sharoon-400 text-2xl " icon={faPhone}/><div className="text-start text-sm"> <Link href='https://wa.me/03019530261' className="hover:text-gray-400 font-light text-xl">{item.postNumber}</Link>
    <br/>
    </div>
</div>
<div className="flex space-x-10"><FontAwesomeIcon className="text-sharoon-400 text-2xl" icon={faEnvelope}/> <div ><span className="font-light text:lg sm:text-xl">{item.email}</span>
    <br/>
    Email Us Your Query</div>
    </div>
    </div>
    <div data-aos="flip-right"  data-aos-duration="1500" className=" w-full md:w-2/4">

    <form  className="w-full space-y-5 mb-5 flex flex-col">
        <input className="p-2 outline-none border" type="text" placeholder="Enter Name"/>
        <input className="p-2 outline-none border" type="text" placeholder="Email"/>
        <input className="p-2 outline-none border" type="text"  placeholder="Subject"/>
<textarea className="border p-2 outline-none" placeholder="Message" rows='10' cols='20'></textarea>
    </form>
   <Button text='Send Message'/>
    </div>
</div>
    )})}
</>
    )
}
export default Contect