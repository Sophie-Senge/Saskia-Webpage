// import React, { useState} from "react";
// import { AiOutlineRight, AiOutlineLeft, AiOutlineClose } from "react-icons/ai";

// function Modal (props) {

//     const [slideNumber, setSlideNumber] = useState(0);
//     const [openModal, setOpenModal] = useState(false);

//     const handleOpenModal = (id) => {
//       setSlideNumber(id)
//       setOpenModal(true)

//     }

//     const handleCloseModel = () => {
//       setOpenModal(false)
//     }

//     const prevSlide = () => {
//       slideNumber === 0 ? setSlideNumber( slides.length -1) : setSlideNumber(slideNumber - 1)
//     }

//     const nextSlide = () => {
//       slideNumber + 1 === slides.length ? setSlideNumber(0) : setSlideNumber(slideNumber + 1)
//     }

//     return(
//         <div className=" h-screen w-full bg-slate-500">
//             {openModal &&
// <div className='flex p-28'>
//     <div className="flex flex-row">
//     <AiOutlineClose className="cursor-pointer" onClick={handleCloseModel} size={30}/>
//     <AiOutlineLeft className="cursor-pointer" onClick={prevSlide} size={30}/>
//     <AiOutlineRight className="cursor-pointer" onClick={nextSlide}  size={30}/>
//     </div>
//     <div className=" w-full h-full">
//     <img src={slides[slideNumber].image} alt={slides[slideNumber].title} />
//     </div>
   

//     </div>
// }
//         </div>
//     )
// }

// export default Modal;