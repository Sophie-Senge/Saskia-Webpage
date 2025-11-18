import React from "react";
import artList from './ArtData';
import { NavLink } from 'react-router-dom';


function ArtHome (){
  
    return(
        // <div className="container">
        <div className="  bg-white">
          <div  className="grid gap-8 grid-rows-1 md:grid-rows-2 md:grid-cols-2 lg:grid-cols-3 py-40 mx-20 md:mx-[9rem] lg:mx-[10rem]">
            {artList.map(({id, title, className, image, page}) =>{
                return(
           <NavLink to={page}>
                <div key={id} className="grid pb-8 items-end ">
                <img src={image} alt={title} className="grid justify-self-center h-80 aspect-square object-cover duration-500  md:hover:scale-105 "/>
                <div className={className}>
                <h1 className="text-2xl pt-2  text-zinc-900 tracking-wide font-medium font-headings">{title}</h1>
                </div>
            </div> 
            </NavLink> 
            
                )
                
            })}
           
           </div>
        </div>
        // </div>

    )
}

export default ArtHome;