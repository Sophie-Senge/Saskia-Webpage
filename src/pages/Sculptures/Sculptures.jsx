import React, { useState } from "react";
import sculptureList from './SculptureData';

import { AiOutlineRight, AiOutlineLeft, AiOutlineClose } from "react-icons/ai";

function Sculptures() {


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
    slideNumber === 0 ? setSlideNumber(sculptureList.length - 1) : setSlideNumber(slideNumber - 1)
  }

  const nextSlide = () => {
    slideNumber + 1 === sculptureList.length ? setSlideNumber(0) : setSlideNumber(slideNumber + 1)
  }


  return (
    <div className="w-full h-max bg-white">

      {openModal &&
        <div className='fixed z-[999] flex justify-center items-center m-0 h-screen w-screen bg-neutral-900 bg-opacity-90'>
           <div className="flex flex-row">
            <AiOutlineClose className="text-white fixed z-[999] top-60 md:top-10 right-10 cursor-pointer" onClick={handleCloseModel} size={30} />
            <AiOutlineLeft className="text-white fixed translate-y-[-25px] md:translate-y-[-50px] left-4 md:left-10 top-[50%] z-[999] cursor-pointer" onClick={prevSlide} size={30} />
            <AiOutlineRight className="text-white fixed translate-y-[-25px] md:translate-y-[-50px] right-4 md:right-10 top-[50%] z-[999] cursor-pointer" onClick={nextSlide} size={30} />
          </div>
          <div className=" scale-75">
            <img src={sculptureList[slideNumber].image} alt={sculptureList[slideNumber].title} />
          </div>
          <div className="fixed translate-y-[140px] md:translate-y-[327px] ">
            <h1 className="text-slate-300 text-lg font-headings tracking-wider text-center">{sculptureList[slideNumber].title}</h1>
            <p className="text-slate-300 text-xs italic">{sculptureList[slideNumber].description}</p>
          </div>

        </div>
      }
      <div className=" grid md:grid-rows-2 md:grid-cols-2 gap-10 grid-rows-1 justify-center items-center  text-center mb-28 mx-28 pt-40 ">
        {sculptureList.map(({ id, title, image, description }) => {
          return (

            <div key={id} className="group overflow-hidden">
              <img src={image} alt={title} onClick={() => handleOpenModal(id)} className="cursor-pointer aspect-[3/2] object-cover" />
              <div className="pt-4">
                <h1 className="text-lg text-zinc-900 font-headings">{title}</h1>
                <p className='text-xs italic text-zinc-600'>{description}</p>
              </div>
            </div>

          )

        })}

      </div>
    </div>
  )
}

export default Sculptures;