import Navbar from "../(component)/navbar/navbar";

import Image from "next/image";
import ai from "../../public/assets/pexels-pavel-danilyuk-8438918.jpg";
import data from "../../public/assets/web (2).jpg";
import web from "../../public/assets/web (1).jpg";
import { apiVersion } from "@/sanity/env";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
//card first 
export const fetchApiCourse = async ()=>{
  const api = await client.fetch("*[_type == 'courseP']",{},{
    cache:'no-cache'
  })
  console.log('api', api)
  return api 
}
// card second section
export const fetchApie2 = async ()=>{
  const api2 = await client.fetch("*[_type == 'pCourseF']",{},
  {
    cache: 'no-cache'
  })
return api2
}


async function Course(){
  const course = await fetchApiCourse()
  const cour = await fetchApie2()
  // console.log('course', course)
  return(
    <>
    <Navbar  text='OUR COURSE'/>
    <div className="flex flex-col items-center ">
          <div data-aos="flip-right" data-aos-duration="1500" className="text-4xl mb-10 w-2/5 text-center md:text-6xl mt-40 font-extrabold text-sharoon-400">
          COURSE WE OFFER
          </div>
          <div className="mx-5">Lorem ipsum dolor,sit amet consectetur adipisicing eilt.</div>
    <div className="mx-10 mt-10  flex flex-wrap gap-y-5 p-5 gap-x-5 justify-center sm:space-y-5 space-y-2 md:space-y-0">
           {course.map((item)=>{return(

             <div  data-aos-duration="1500" data-aos="zoom-in" className="hover:shadow-2xl max-w-sm w-50  bg-card-400 rounded-md  p-3 text-center">
              <div className="font-bold text-lg">{item.name}</div>
              <div className="my-10 text-sm w-auto h-auto">
            {item.discription}
              </div>
            </div>

              )           })}
          </div>
          </div>
         {/* section */}
         <div className="flex flex-col items-center ">
          <div data-aos="zoom-out-down" data-aos-duration="1500" className=" text-4xl w-2/5 text-center md:text-6xl  mt-40 mb-10 font-extrabold text-sharoon-400">
          BEST COURSES          </div>
          <div className="mx-10">Lorem ipsum dolor, sit omal consectetur adipiscin elit.</div>
          <div className="my-10 ">
            <div className=" flex mx-10 justify-center flex-wrap gap-y-5 gap-x-5    ">
           {cour.map((item)=>{return(

             <figure className="w-3/12" data-aos="flip-down"
             data-aos-easing="linear"
     data-aos-duration="1500">
                <img
                  className="hover:shadow-2xl rounded-2xl group"
                  src={urlForImage(item.image).url()}
                  alt="pic of university"
                  width={350}
                  height={300}
                />
                <figcaption className="text-sm">
                  <span className="font-bold text-lg my-3 text-center">{item.name}</span>
                  <br />
                 {item.description}
                </figcaption>
              </figure>              
             )           })}
            </div>
          </div>
          </div>
    </>
  )
}
export default Course;