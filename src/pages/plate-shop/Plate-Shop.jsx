import React from 'react';
import ShellFront from './assets/shell-1.JPG';
import ShellTwo from './assets/shell-2.JPG';
import ShellThree from './assets/shell-3.JPG';
import ShellFour from './assets/shell-4.JPG';
import PlateOne from './assets/plate-1.JPG';
import PlateTwo from './assets/plate-2.JPG';
import PlateFive from './assets/plate-5.JPG';
import ServingOne from './assets/serving-1.JPG';
// import ServingTwo from './assets/serving-2.JPG';
import ServingThree from './assets/serving-3.JPG';

function PlateShop (){
    return(<>
        <div className='mx-auto pt-32 pb-28 h-full w-3/4'>
        <h2 className='text-2xl uppercase font-semibold font-headings tracking-widest pb-14 grid items-end justify-items-center'>Plate Shop</h2>       
        <p className='text-sm text-justify'>Every plate is unique. I make each one by hand, and although I use the same materials, movements and techniques every time, no two are exactly alike. They are made with black clay, white slip, leadless glaze with copper carbonate, are fired to stoneware, and may be machine washed.</p>
        <br />
        <p className='text-sm text-justify'>I also always have a selection of serving dishes in always varying sizes, from salt cellar to platter. Please message me if you would like to see the latest options available and to place orders.</p>
        <br />
        <p className='text-sm text-justify'>Pasta Bowls - £180 each</p>
        <p className='text-sm text-justify'>Plates - £160 each</p>
        <p className='text-sm text-justify'>Small Bowls - £90 each</p>
        <p className='text-sm text-justify'>Serving Dishes - individually priced</p>
        
        <div className='mx-auto pt-10 grid justify-center grid-cols-1 md:grid-cols-3 text-center '>
            
           
            <div className='mx-8 pb-6'>
            <img className='aspect-[3/2]'src={ShellFront} alt="shell plate" />
            <p className='text-xs pt-2 text-center italic text-neutral-600'>Shell Series plates measure approximately 26cm across and are 2cm deep</p>
                </div>    
                <div className='mx-8 pb-6'>
            <img className='aspect-[3/2]' src={ShellTwo} alt="shell plate front" />
            <p className='text-xs pt-2 text-center italic text-neutral-600'>Shell Series pasta bowls measure approximately 26cm across and are 4.5cm deep.</p>

            </div>
            <div className='mx-8 pb-6'>
            <img className='aspect-[3/2]' src={ShellFour} alt="shell plate front" />
            <p className='text-xs pt-2 text-center italic text-neutral-600'>Shell Series plate with small bowl. Small shell bowls measure approximately 18cm across and are 3.5cm deep.</p>

            </div>
            <div className='mx-8 pb-6'>
            <img className='aspect-[3/2]'src={PlateTwo} alt="plate" />
            <p className='text-xs pt-2 text-center italic text-neutral-600'>Round plates measure approximately 27cm across and are 2cm deep.</p>
                </div>    
                <div className='mx-8 pb-6'>
            <img className='aspect-[3/2]' src={PlateOne} alt="plate front" />
            <p className='text-xs pt-2 text-center italic text-neutral-600'>Option: crenellated edges</p>

            </div>
            <div className='mx-8 pb-6'>
            <img className='aspect-[3/2]' src={PlateFive} alt="plate side" />
            <p className='text-xs pt-2 text-center italic text-neutral-600'>Round plate with small bowl.Small round bowls measure approximately 18cm across and are 3.5cm deep.</p>

            </div>
                
            <div className='mx-8 pb-6'>
            <img className='aspect-[3/2]'src={ServingOne} alt="plate" />
            <p className='text-xs pt-2 text-center italic text-neutral-600'>Serving dishes in various sizes.</p>
                </div>    
                <div className='mx-8 pb-6'>
            <img className='aspect-[3/2]' src={ServingThree} alt="plate front" />
            <p className='text-xs pt-2 text-center italic text-neutral-600'>Serving dish</p>

            </div>
            <div className='mx-8 pb-6'>
            <img className='aspect-[3/2]' src={ShellThree} alt="plate side" />
            <p className='text-xs pt-2 text-center italic text-neutral-600'>Rear view of Shell Series pasta bowl. All dishware has similar detailing on the bottom.</p>

            </div>
            

        </div>
        </div>
        </>
    )
}

export default PlateShop;