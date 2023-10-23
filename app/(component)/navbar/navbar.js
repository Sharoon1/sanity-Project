import { text } from "@fortawesome/fontawesome-svg-core";
import Header from "../header/header";

function Navbar({text}){
    return(
        <>
        <div>
<div id="nvbar" className="">
  <div className="pt-2"> 
    <Header/>
    </div>
    <div  data-aos="flip-down" data-aos-duration="2000" className="text-center  text-sharoon-400 text-6xl my-10 md:my-24 font-bold ">
        {text}
    </div>
        </div>
    </div>        </>
    )
}
export default Navbar;