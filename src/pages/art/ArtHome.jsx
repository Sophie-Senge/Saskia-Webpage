import React from "react";
import artList from './ArtData';
import { NavLink } from 'react-router-dom';


function ArtHome (){
  
    return(
        <div className="w-full h-full bg-white">
          <div  className="grid md:grid-rows-2 md:grid-cols-2 lg:grid-cols-3 gap-10 grid-rows-1 mb-28 mx-28 pt-40 ">
            {artList.map(({id, title, className, image, page}) =>{
                return(
           <NavLink to={page}>
                <div key={id} className="overflow-hidden grid justify-center ">
                <img src={image} alt={title} className="h-64 w-64 object-cover duration-500  hover:scale-110 "/>
                <div className={className}>
                <h1 className="text-2xl text-zinc-100 font-semibold font-headings">{title}</h1>
                </div>
            </div> 
            </NavLink> 
            
                )
                
            })}
           
           </div>
        </div>
    )
}

export default ArtHome;