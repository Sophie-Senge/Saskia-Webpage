import React from 'react';
import vaseList from './vaseData';

function Vases (){
    return(
        <div className="w-full h-max bg-white">
          <div className=" grid md:grid-rows-2 md:grid-cols-3 gap-8 grid-rows-1 justify-center items-center  text-center mb-28 mx-28 pt-40 ">
            {vaseList.map(({id, title, image, description }) =>{
                return(
          
                <div key={id} className="group overflow-hidden">
                <img src={image} alt={title} className="h-80 w-72 object-cover"/>
                <div className="">
                <h1 className="text-xl text-zinc-900 font-headings">{title}</h1>
                <p className='text-sm text-zinc-600'>{description}</p>
                </div>
            </div> 
            
                )
                
            })}
           
           </div>
        </div>
    )
}

export default Vases;