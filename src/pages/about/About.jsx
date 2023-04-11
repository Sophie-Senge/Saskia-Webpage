import React from 'react'
import aboutOne  from './assets/about.webp'

function About (){
    return(
        <div className='mx-auto grid grid-cols-1 md:grid-flow-col grid-rows-2 text-center justify-items-center h-screen w-full '>
            <h2 className='text-2xl uppercase font-semibold font-headings tracking-widest pb-14 grid items-end justify-items-center'>About</h2>
         <p className='mx-10'>I was born in Florence in 1970. I grew up in a family of artists in the countryside near Siena.
I was drawn to clay, which my father worked in his studio from the 1980s. I moved to England to complete my education, and have been based in London since my twenties.
In 2005 the ceramicist Betty Woodman introduced me to leaf printing in clay. Currently I work on smaller objects, like plates, as well as on the mural scale. </p>
<img className='mr-10' src={aboutOne} alt="saskia spender" />

        </div>
    )
}

export default About;