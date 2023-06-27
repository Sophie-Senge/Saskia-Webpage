import React from 'react';
import profile from '../assets/images/SaskiaContact.webp';
import { SiInstagram } from "react-icons/si";


function Contact() {
  return (
    <div id="contact" className="mx-auto h-screen text-center place-content-center grid md:grid-cols-2 pt-32">
      <div className='pl-10'>
        <img className='object-cover h-[90%]' src={profile} alt="saskia spender" />
      </div>
      <div className='md:pr-20'>
        <h2 className="text-2xl font-semibold uppercase tracking-widest pb-2 font-headings">Contact</h2>
        <p>saskia@saskiaspender.com</p>
        <a className='grid place-content-center p-2' href="https://www.instagram.com/saskiaspender/?hl=en"><SiInstagram size={20}/></a>

        <div className=''>
          <form action='https://getform.io/f/b4e5ea89-cb07-46db-b030-021cf444088b' method='POST' className='flex flex-col'>
            <input type="text" name='name' placeholder='Name' className='p-2 border-zinc-300 border-b-[1px] focus:outline-none' />
            <input type="text" name='email' placeholder='Email' className='my-4 p-2 border-zinc-300 border-b-[1px] focus:outline-none' />
            <textarea name="message" rows="7" placeholder='Enter your message' className=' border-zinc-300 border-b-[1px] p-2 focus:outline-none'></textarea>
            <button className='pt-2' type="submit"> Send
            </button>
          </form>

        </div>


      </div>

    </div>
  )
}

export default Contact