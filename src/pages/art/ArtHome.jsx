import React from 'react';
import artList from './ArtData';
import { NavLink } from 'react-router-dom';

function ArtHome (){
    return(
        <div className="w-full h-screen bg-white">
          <div className=" grid md:grid-rows-2 md:grid-cols-3 gap-3 grid-rows-1 justify-center items-center text-center mb-28 mx-28 pt-40 ">
            {artList.map(({id, title, className, image, page}) =>{
                return(
           <NavLink to={page}><div key={id} className={className}>
                <img src={image} alt={title} className="hover:opacity-70"/>
                <div className='text-red-600 opacity-0 
                                group-hover:opacity-100'>
                <h1 className="text-xl">{title}</h1>
                </div>
            </div> </NavLink> 
            
                )
                
            })}
           
           </div>
        </div>
    )
}

export default ArtHome;