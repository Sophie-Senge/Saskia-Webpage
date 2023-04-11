import React from 'react';
import { SiInstagram } from "react-icons/si";

function Footer (){
    return(
        <div className="w-full flex bg-white fixed bottom-0">
        <div className=" mx-auto flex flex-row justify-center text-center py-4">
        <a className='mt-5 pr-4' href="https://www.instagram.com/saskiaspender/?hl=en"><SiInstagram size={15}/></a>
       
           <a href="https://leliascarfiotti.com/"> <p className="mt-4 px-2 text-xs font-headings leading-6  text-black">
            photo©2020 lelia scarfiotto
            </p></a>
            <a href="https://sophieperks.com/"><p className="mt-4 px-2 font-headings text-xs leading-6 text-black">
            built by sophie perks 2023
            </p></a>
        </div>
        
    </div>
    )
}

export default Footer;