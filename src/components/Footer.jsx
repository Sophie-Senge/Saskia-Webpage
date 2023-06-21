import React from 'react';
// import { SiInstagram } from "react-icons/si";

function Footer (){
    return(
        <div className="w-full h-16 flex bg-white fixed bottom-0">
        <div className="mx-auto flex flex-row justify-center text-center">
        {/* <a className='mt-5 pr-4' href="https://www.instagram.com/saskiaspender/?hl=en"><SiInstagram size={15}/></a> */}
       
           <a className='flex items-center justify-center mx-auto' href="https://leliascarfiotti.com/"> <p className="px-3 text-xs font-headings leading-6  text-black">
            photo©2020 lelia scarfiotto
            </p></a>
            <a className='flex items-center justify-center mx-auto' href="https://sophieperks.com/"><p className="px-3 font-headings text-xs leading-6 text-black">
            built by SP©2023
            </p></a>
        </div>
        
    </div>
    )
}

export default Footer;