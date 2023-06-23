import React, { useState } from "react";
import basketList from './basketData';
// import Modal from '../../components/Modal';
import { AiOutlineRight, AiOutlineLeft, AiOutlineClose } from "react-icons/ai";

function Baskets() {


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
    slideNumber === 0 ? setSlideNumber(basketList.length - 1) : setSlideNumber(slideNumber - 1)
  }

  const nextSlide = () => {
    slideNumber + 1 === basketList.length ? setSlideNumber(0) : setSlideNumber(slideNumber + 1)
  }

  return (
    <div className="w-full h-max">

      {openModal &&
        <div className='fixed z-[999] flex justify-center items-center m-0 h-screen w-screen bg-neutral-900 bg-opacity-90'>
          <div className="flex flex-row">
            <AiOutlineClose className="text-white fixed z-[999] top-48 md:top-10 right-10 cursor-pointer" onClick={handleCloseModel} size={30} />
            <AiOutlineLeft className="text-white fixed translate-y-[-25px] md:translate-y-[-50px] left-7 md:left-10 top-[50%] z-[999] cursor-pointer" onClick={prevSlide} size={30} />
            <AiOutlineRight className="text-white fixed translate-y-[-25px] md:translate-y-[-50px] right-4 md:right-10 top-[50%] z-[999] cursor-pointer" onClick={nextSlide} size={30} />
          </div>
          <div className=" scale-75">
            <img src={basketList[slideNumber].image} alt={basketList[slideNumber].title} />
          </div>
          <div className="fixed translate-y-[200px] md:translate-y-[329px] ">
            <h1 className="text-slate-300 text-center">{basketList[slideNumber].title}</h1>
            <p className="text-slate-300">{basketList[slideNumber].description}</p>
          </div>
        </div>
      }



      <div className=" grid md:grid-rows-2 md:grid-cols-3 gap-10 grid-rows-1 justify-center items-center  text-center mb-28 mx-28 pt-40 ">
        {basketList.map(({ id, title, image, description }) => {
          return (

            <div key={id} className="group overflow-hidden">
              <img onClick={() => handleOpenModal(id)} src={image} alt={title} className="cursor-pointer object-scale-down" />
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