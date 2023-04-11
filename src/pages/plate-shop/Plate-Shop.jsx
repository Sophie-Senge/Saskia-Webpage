import React from 'react';
import plateFront from './assets/101-0137.JPG';
import plateSide from './assets/101-0141.JPG'

function PlateShop (){
    return(
        <div className='mx-auto grid justify-items-center grid-cols-2 md:grid-col-2 text-center  h-screen w-full'>
            <div className='mt-28'>
            <img className='h-42 w-72' src={plateFront} alt="plate front" />
            </div>
            <div className='grid row-span-2'>
            <h2 className='text-2xl uppercase font-semibold font-headings tracking-widest pb-14 grid items-end justify-items-center'>Plate Shop</h2>       
            <p>Information about the plates and get in touch to buy</p>
            </div>
            <div>
            <img className='h-42 w-72'src={plateSide} alt="plate side" />
                </div>    
                
            <div>
                
            </div> 

        </div>
    )
}

export default PlateShop;