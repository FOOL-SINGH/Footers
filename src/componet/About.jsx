import React from "react";
import { BsAlipay } from "react-icons/bs";

export default function About() {
  return (
    <>
      <div className="flex bg  h-full ">
        <div className=" w-2/4 h-80 bg ">
          <h1 className="flex justify-center font-bold text-3xl">Our Story</h1>
          <p className="m-4 font-bold text-lg flex justify-center items-center">
            loance in 2015, Exclusive is sout asia premier online shopping
            marketprice with an active presense in bangladesh. sipportedbty wide
            range of tailored marketing data and service solutions,Exclusive has
            10,500 sailes and 300 breands service solutions millions customers
            across the region
          </p>
          {/* <p className=" ml-4 font-bold flex items-center justify-center text-lg mt-4">
            exclusive has more than i million products to often growing at a
            very foast. Exlusive aftes a adverse assanment in categories raning
            from customer
          </p> */}
        </div>
        <div className=" bg-slate-400 w-1/3 h-80 max-[1100px]:h-full ">
          <img
            className="h-80 w-full max-[660px]:h-full"
            src="https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
      </div>
      <div className="flex bg to-blue-400 mt-5  gap-10  flex-wrap justify-around w-full">
        <div className="bg-blue-500 h-32 w-52 text-center">
          
        <BsAlipay className="h-10 w-10 flex justify-center items-center font-bold text-red-400 ml-20" />
          <h1 className=" font-bold text-2xl mt-3">10.5k</h1>
          <p className=" mt-2 ">sallers active our site</p>
        </div>
        <div className="bg-blue-500 h-32 w-52 text-center">
          
          <BsAlipay className="h-10 w-10 flex justify-center items-center font-bold text-red-400 ml-20" />
            <h1 className=" font-bold text-2xl mt-3">10.5k</h1>
            <p className=" mt-2 ">sallers active our site</p>
          </div> <div className="bg-blue-500 h-32 w-52 text-center">
          
          <BsAlipay className="h-10 w-10 flex justify-center items-center font-bold text-red-400 ml-20" />
            <h1 className=" font-bold text-2xl mt-3">10.5k</h1>
            <p className=" mt-2 ">sallers active our site</p>
          </div> <div className="bg-blue-500 h-32 w-52 text-center">
          
          <BsAlipay className="h-10 w-10 flex justify-center items-center font-bold text-red-400 ml-20" />
            <h1 className=" font-bold text-2xl mt-3">10.5k</h1>
            <p className=" mt-2 ">sallers active our site</p>
          </div>
      </div>
      <div className=" flex justify-center gap-60   bg-red-300 mt-10 h-60">
      <div className="h-28 w-60">
          <img className="h-40 mt-3" src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          <h1>Tom Cruise</h1>
          <p>Founder & Chairman</p>
        </div>
      
       
        <div className="h-28 w-60">
          <img className="h-40 mt-3" src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          <h1>Tom Cruise</h1>
          <p>Founder & Chairman</p>
        </div>

        <div className="h-28 w-60">
          <img className="h-40 mt-3" src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          <h1>Tom Cruise</h1>
          <p>Founder & Chairman</p>
        </div>
        
      </div>

    </>
  );
}
