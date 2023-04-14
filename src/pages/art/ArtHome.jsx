import React from "react";
import artList from './ArtData';
import { NavLink } from 'react-router-dom';


function ArtHome (){
  
    return(
        <div className="w-full h-max bg-white">
          <div  className="grid md:grid-rows-2 md:grid-cols-3 gap-10 grid-rows-1 justify-center items-center  text-center mb-28 mx-28 pt-40 ">
            {artList.map(({id, title, className, image, page}) =>{
                return(
           <NavLink to={page}>
                <div key={id} className="group overflow-hidden">
                <img src={image} alt={title} className="h-80 w-72 object-cover duration-500  hover:scale-110 "/>
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