import React from 'react';
import profile from '../assets/images/SaskiaContact.webp'

function Contact() {
  return (
    <div id="contact" className="w-full h-screen text-center grid md:grid-rows-1 md:grid-cols-2 gap-8 grid-rows-1 pt-24">
      <div className='object-cover p-8'>
        <img src={profile} alt="saskia spender" />
      </div>
      <div className='justify-center mx-auto flex flex-col w-full h-full max-w-screen-lg'>
        <div className='pb-8'>
         

          <h2  className="pt-6 text-2xl text-zinc-400 hover:text-indigo-700">Send me a message!</h2>
          <p  className='text-zinc-400 hover:text-indigo-700'>or email me directly at sophieperks@gmail.com</p>
        </div>
        <div className='flex justify-center items-center'>
          <form action='https://getform.io/f/b4e5ea89-cb07-46db-b030-021cf444088b' method='POST' className='flex flex-col  md:w-1/2'>
            <input  type="text" name='name' placeholder='Name' className='p-2 bg-transparent text-zinc-300 border-yellow-500 border-b-2 focus:outline-none' />
            <input  type="text" name='email' placeholder='Email' className='my-4 p-2 border-b-2 border-yellow-500 bg-transparent text-zinc-300 focus:outline-none' />
            <textarea  name="message" rows="7" placeholder='Enter your message' className='bg-transparent border-b-2 border-yellow-500 p-2 text-zinc-300 focus:outline-none'></textarea>
            <button className=''  type="submit"> Send
            </button>
          </form>

        </div>


      </div>

    </div>
  )
}

export default Contact