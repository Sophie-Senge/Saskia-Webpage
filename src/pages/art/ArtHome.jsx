import React from "react";
import artList from './ArtData';
import { NavLink } from 'react-router-dom';


function ArtHome (){
  
    return(
        <div className="w-full h-full py-32 bg-white">
          <div  className="grid md:grid-rows-2 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 mx-20 ">
            {artList.map(({id, title, className, image, page}) =>{
                return(
           <NavLink to={page}>
                <div key={id} className="grid items-end ">
                <img src={image} alt={title} className="grid justify-self-center aspect-square h-4/5 object-cover duration-500  md:hover:scale-105 "/>
                <div className={className}>
                <h1 className="text-2xl pt-2  text-zinc-900 tracking-wide font-medium font-headings">{title}</h1>
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