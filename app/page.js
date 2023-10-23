import Button from "./(component)/button/button";
import Header from "./(component)/header/header";
import Image from "next/image";

import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

//STUDENTS REVIEWS
export const fetchReviews = async ()=>{
  const api4 = await client.fetch("*[_type == 'studentReviews']",{},
  {
    cache: 'no-cache'
  })
  // console.log('this is review',api4)
return api4
}
//Home facility section
export const fetchApie2 = async ()=>{
  const  api2 = await client.fetch("*[_type == 'facilityHome']",{}
  ,{
    cache: 'no-cache'
  })
  // console.log('api2ggggggggggggggg', api2)
return api2
}

// The main home top section
export const fatchApie = async ()=>{
  const api1 = await client.fetch("*[_type == 'MainTopHeader']",{},{
    cache: 'no-cache'
  })
// console.log('client',api1)
return api1
}
// home second section
export const fatchApies = async ()=>{
  const api = await client.fetch("*[_type == 'header']",{},{
    cache: 'no-cache'
  })
// console.log('client',api)
// console.log('sdssssssssssssssssss',api)
return api
}
// home 3rd section
export const fatchApie3 = async ()=>{
  const api3 = await client.fetch("*[_type == 'truHome3']",{},{
    cache: 'no-cache'
  })
  /////////////////////////////////
// console.log('client',api3)
// console.log('sdssssssssssssssssss',api3)
return api3
}

async function Page() {
     const ap = await fatchApies()
     const main = await fatchApie()
     const tur = await fatchApie3()
    //  console.log('turrrrrrrrrrrrrrrrrrr', tur)
     const facility = await fetchApie2()
     const review = await fetchReviews()
    //  console.log('facility', facility)
    //  console.log('turrrrrrrrrr', tur)
     ////////////////
    //  console.log('ap', ap)
  return (
    <>
      <div id="pageBg">
        <Header />

        <div className="flex flex-col items-center justify-center text-white">
          {main.map((item2)=>{
            return(
          <div className="hello flex flex-col items-center justify-center gap-y-5  sm:mt-15 md:mt-22 lg:mt-28 w-1/2">
              
                
            <h1
              className="text-4xl sm:text-6xl md:text-8xl lg:text-8xl font-extrabold text-center"
              style={{ color: "#26f8cb" }}
              data-aos="zoom-out-down" data-aos-duration="1500" >
             {/* main heading */}
{item2.name}
            </h1>
            <p className="3xl md:text-4xl font-bold text-center" style={{ color: "#c1e7e8" }}>
            {/* secondry heading */}
{item2.subHeading}
            </p>
            <p className="text-center">
              {/* quote */}
{item2.discription }
            </p>
            <Button text={item2.button} />
          </div>
            )          })}
        </div>
      </div>

      <div>
        <div className="flex justify-center">
          <div className="card h-40 w-1 border-2 border-x-sharoon-400 my-20"></div>
        </div>
        <div className="flex flex-col items-center ">
          <div data-aos="zoom-out-down" data-aos-duration="1500" className="w-3/4 text-center text-3xl mb-5 font-extrabold text-sharoon-400">
           {/* programs header */}
            EXPLORE OUR 60+ MAJOR PROGRAMS
          </div>
          {/* programs discription */}
          <div className="text-center mx-2">Lorem ipsum dolor,sit amet consectetur adipisicing eilt.</div>
{/* This is card Section */}
          <div className="flex h-auto w-auto  my-10 justify-center flex-wrap gap-x-5 gap-y-5   mx-10">
           {ap.map((item)=>{
            return(
              <div  data-aos-duration="1500" data-aos="zoom-in" className="hover:shadow-2xl max-w-sm w-50  bg-card-400 rounded-md  p-3 text-center">
              {/* card heading */}
               <div className="font-bold text-lg">{item.name}</div>
              {/* card discription */}
               <div className="my-5 text-sm w-auto h-auto">
{item.discription}
               </div>
             </div>
            )
           })}
           
          </div>
          {/* line */}
          <div className="flex justify-center">
            <div className="card h-40 w-1 border-2 border-x-sharoon-400 my-10"></div>
          </div>
        </div>
      </div>
      {/* new */}
      <div>
        <div className="flex flex-col items-center ">
          <div  data-aos-easing="linear" data-aos="zoom-out-down" data-aos-duration="1000"  className="w-3/4 text-center text-4xl mb-5 font-extrabold text-sharoon-400">
          {/* uni tur heading */}
            TAKE OUR VIRTUAL TOUR
          </div>
         {/* unit tur discription */}
          <div className="text-center mx-2">Lorem ipsum dolor, sit omat consectetur adipisicing elit.</div>
{/* this is image section */}
          <div className="my-10 ">
            <div className="space-y-2 lg:flex lg:gap-x-5 md:flex  md:gap-x-2 p-5 sm:space-y-5 md:space-y-0">
            
              <div data-aos="fade-up" className="flex mx-5 sm:mx-10 justify-center flex-wrap gap-5 space -y-5"
     data-aos-anchor-placement="top-center"  data-aos-duration="1500">
              {tur.map((item0)=>{
                return(

                  <img src={urlForImage(item0.image).url()}
                  className="hover:shadow-2xl w-4/5 sm:w-96 sm:h-65 rounded-2xl"
                alt="pic of university"
               
                />
                )              })}
                </div>
            </div>
          </div>
          {/* line */}
          <div className="flex justify-center">
            <div className="card h-40 w-1 border-2 border-x-sharoon-400 my-10"></div>
          </div>
        </div>
        {/* this id end ling tur */}
      </div>
      <div>
        <div className="flex flex-col items-center ">
          <div data-aos="zoom-out-down" data-aos-duration="1500" className="w-3/4 text-center text-3xl sm:text-4xl mb-5 font-extrabold text-sharoon-400">
          {/* our Uni facilityes header */}
            OUR FACITLTIES
          </div>
          <div className="text-center mx-2">Lorem ipsum dolor, sit omal consectetur adipiscin elit.</div>
{/* this is Facilities section */}
          <div className="my-10 ">
            <div className=" lg:flex md:flex md:gap-y-5 lg:gap-x-5 md:gap-x-2 p-5  ">
              <figure data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500"  className="flex mx-5 sm:mx-10 justify-center flex-wrap gap-5 space -y-5   "> 
              {/*  */}
{facility.map((item)=>{
  return(

    <div className="w-4/5  sm:w-96 sm:h-65">
    <img
    className="hover:shadow-2xl w-96 h-65 rounded-2xl"
    src={urlForImage(item.image).url()}
    alt={item.alt}
    
    />
                <figcaption className="text-sm">
                  <span className="text-lg font-bold my-3">{item.name}</span>
                  <br />
                  <br />
                {item.description}
                </figcaption>
    </div>
                  )})}

                {/*  */}
              </figure>
          
            </div>
          </div>
          {/* line */}
          <div className="flex justify-center">
            <div className="card h-40 w-1 border-2 border-x-sharoon-400 my-10"></div>
          </div>
        </div>
      </div>
    {/* students reviews */}
      <div className="mx-10 sm:mx-30 lg:mx-40">
        <div data-aos="zoom-out-down" data-aos-duration="1500" className="w-full text-center text-4xl mb-5 font-extrabold text-sharoon-400">
        {/* our students review */}
          WHAT OUR STUDENT SAYS
        </div>
        <div className="text-center mx-2">
        {/* student discription */}
          lorem ipsum dolor, slt amet consectetur adlpisicing elit.
        </div>

        <div className="space-y-3  my-20 lg:flex  md:space-y-5 lg:space-y-0 gap-x-5 justify-between">
            {review.map((item)=>{  return(
          <div className="hover:shadow-2xl w-50 sm:50 lg:flex   bg-card-400 rounded-md  p-3 ">
                <img
              src={urlForImage(item.image).url()}
              width='0'
              height='0'
              className="rounded-full m-5 w-20 h-20 lg:h-12 lg:w-30"  alt="pic"
            />

                <div data-aos="zoom-in-left" data-aos-duration="1500" >
              <div className=" my-5 text-sm h-auto">
                {item.Review}
              </div>
              <div className="font-bold text-lg">{item.name}</div>
            </div>

          </div>
              )            })}
        </div>
      </div>
      <div id="wo" data-aos="flip-left" data-aos-duration="2000"  className=" mx-10 sm:mx-20 md:mx-30 lg:mx-40 my-20 p-20" >
<div className="font-extrabold text-4xl text-white flex flex-col mx- justify-center items-center ">
     <div data-aos="zoom-out-down" data-aos-duration="3000"  className="mb-4 text-center">
      GET SREADY FOR BRIGHT FURTURE</div>
<Button text='Get Ready'/>
     </div>
      </div>
    </>
  );
}
export default Page;
