import React from 'react';
import artList from './ArtData';
import { NavLink } from 'react-router-dom';

function ArtHome (){
    return(
        <div className="w-full h-screen bg-white">
          <div className=" grid grid-rows-2 grid-cols-3 gap-3 justify-center items-center text-center mb-28 mx-28 pt-40 ">
            {artList.map(({id, title, className, image, page}) =>{
                return(
           <NavLink to={page}><div key={id} className={className}>
                <img src={image} alt={title} className=""/>
                <h1 className="text-black text-xl">{title}</h1>
            </div> </NavLink> 
            
                )
                
            })}
           
           </div>
        </div>
    )
}

export default ArtHome;