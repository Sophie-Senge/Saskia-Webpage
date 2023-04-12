import React, {useEffect, useState} from "react";
import basketList from './basketData';
import Aos from "aos";
import "aos/dist/aos.css"; 

function Baskets (){
    useEffect(() =>{
        Aos.init({duration: 3000});
      }, []);

      const [slideNumber, setSlideNumber] = useState(0);
      const [openModal, setOpenModal] = useState(false);
console.log(slideNumber)
      const handleOpenModal = (id) => {
        setSlideNumber(id)
        setOpenModal(true)
        console.log(id)
      
      }

    return(
        <div className="w-full h-max bg-white">

{openModal &&
<div className='h-screen w-full bg-slate-500'>
    <img src={basketList[slideNumber].image} alt="" />

    </div>
}


          <div className=" grid md:grid-rows-2 md:grid-cols-3 gap-10 grid-rows-1 justify-center items-center  text-center mb-28 mx-28 pt-40 ">
            {basketList.map(({id, title, image, description }) =>{
                return(
          
                <div  data-aos="flip-up" key={id} className="group overflow-hidden">
                <img onClick={()=> handleOpenModal(id)} src={image} alt={title} className="cursor-pointer h-42 w-72 object-cover"/>
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

export default Baskets;