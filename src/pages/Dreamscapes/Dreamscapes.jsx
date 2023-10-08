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
        <div className='fixed z-[999] flex justify-center items-center m-0 h-screen w-screen bg-neutral-900 bg-opacity-90'>
          <div className="flex flex-row">
            <AiOutlineClose className="text-white fixed z-[999] top-60 md:top-10 right-10 cursor-pointer" onClick={handleCloseModel} size={30} />
            <AiOutlineLeft className="text-white fixed translate-y-[-20px] left-4 md:left-10 top-[50%] z-[999] cursor-pointer" onClick={prevSlide} size={30} />
            <AiOutlineRight className="text-white fixed translate-y-[-20px]  right-4 md:right-10 top-[50%] z-[999] cursor-pointer" onClick={nextSlide} size={30} />
          </div>
          <div className=" scale-75 lg:scale-100">
            <img src={dreamList[slideNumber].image} alt={dreamList[slideNumber].title} />
          </div>
          <div className="fixed translate-y-[160px] md:translate-y-[300px] lg:translate-y-[400px] text-center">
            <h1 className="text-slate-300 text-lg font-headings tracking-wider text-center">{dreamList[slideNumber].title}</h1>
            <p className="text-slate-300 text-sm italic text-center">{dreamList[slideNumber].description}</p>
          </div>
        </div>
      }
      <div className=" grid md:grid-rows-2 md:grid-cols-2 gap-10 grid-rows-1 justify-center items-center  text-center mb-28 mx-28 pt-40 ">
        {dreamList.map(({ id, title, image, description }) => {
          return (

            <div key={id} className="group overflow-hidden">
              <img onClick={() => handleOpenModal(id)} src={image} alt={title} className="w-full aspect-[3/2] overflow-hidden cursor-pointer object-cover" />
              <div className="pt-3">
                <h1 className="text-lg tracking-wider text-zinc-900 font-headings">{title}</h1>
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