import React, { useState } from "react";
import dreamList from './dreamData';
import { AiOutlineRight, AiOutlineLeft, AiOutlineClose } from "react-icons/ai";


function Dreamscapes() {

  // modal below
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  // console.log(slideNumber)
  const handleOpenModal = (id) => {
    setSlideNumber(id)
    setOpenModal(true)
    console.log(id)
  }

  const handleCloseModel = () => {
    setOpenModal(false)
  }

  const prevSlide = () => {
    slideNumber === 0 ? setSlideNumber(dreamList.length - 1) : setSlideNumber(slideNumber - 1);

  }

  const nextSlide = () => {
    slideNumber + 1 === dreamList.length ? setSlideNumber(0) : setSlideNumber(slideNumber + 1)
  }

  return (
    <div className="w-full h-max bg-white">

      {openModal &&
         <div className='fixed z-[999] group flex justify-center items-center m-0 h-screen w-screen bg-neutral-900 bg-opacity-90'>
         <div className="flex  flex-row">
         <AiOutlineClose className="text-white absolute top-[25%] md:top-[15%] lg:top-[5%] -translate-x-0 xl:-translate-x-10 tranlate-y-[0%] right-5 rounded-full p-2 bg-neutral-900 hidden group-hover:block cursor-pointer " onClick={handleCloseModel} size={30} />
         <AiOutlineLeft className="text-white absolute top-[50%] -translate-x-2 xl:-translate-x-[-50%] tranlate-y-[-50%] left-5 rounded-full p-2 bg-neutral-900  hidden group-hover:block cursor-pointer" onClick={prevSlide} size={30} />
         <AiOutlineRight className="text-white absolute top-[50%]  translate-x-2 xl:-translate-x-[50%] tranlate-y-[-50%] right-5 rounded-full p-2 bg-neutral-900  hidden group-hover:block cursor-pointer" onClick={nextSlide} size={30} />
       </div>
       <div className={dreamList[slideNumber].class}>
              <img className='w-full h-full bg-center bg-cover' src={dreamList[slideNumber].image} alt={dreamList[slideNumber].title} />
          </div>
          <div className="fixed translate-y-[145px] md:translate-y-[320px] lg:translate-y-[360px]   text-center">
            <h1 className="text-slate-300 sm:text-md md:text-lg pt-7 lg:pt-10 font-headings tracking-wider text-center">{dreamList[slideNumber].title}</h1>
            <p className="text-slate-300 px-2 text-sm italic text-center">{dreamList[slideNumber].description}</p>
          </div>
        </div>
      }
      <div className=" grid md:grid-rows-2 md:grid-cols-2 gap-10 grid-rows-1 justify-center items-center  text-center mb-28 mx-28 pt-40 ">
        {dreamList.map(({ id, title, image, description, measurement }) => {
          return (

            <div key={id} className="group overflow-hidden">
              <img onClick={() => handleOpenModal(id)} src={image} alt={title} className="w-full aspect-[3/2] overflow-hidden cursor-pointer object-cover" />
              <div className="pt-3">
                <h1 className="text-md tracking-wider text-zinc-900 font-headings">{title}</h1>
                <p className='text-xs italic text-zinc-600'>{measurement}</p>
                <p className='text-xs italic text-zinc-600'>{description}</p>
              </div>
            </div>

          )

        })}

      </div>
    </div>
  )
}

export default Dreamscapes;