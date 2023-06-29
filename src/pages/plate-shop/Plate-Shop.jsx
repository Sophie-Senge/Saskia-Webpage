import React, { useState } from 'react';
// import ShellFront from './assets/shell-1.JPG';
// import ShellTwo from './assets/shell-2.JPG';
// import ShellThree from './assets/shell-3.JPG';
// import ShellFour from './assets/shell-4.JPG';
// import PlateOne from './assets/plate-1.JPG';
// import PlateTwo from './assets/plate-2.JPG';
// import PlateFive from './assets/plate-5.JPG';
// import ServingOne from './assets/serving-1.JPG';
// import ServingTwo from './assets/serving-2.JPG';
// import ServingThree from './assets/serving-3.JPG';

function PlateShop() {

    const [images] = useState({
        imgOne: {
            img: require('./assets/shell-1.JPG'),
            data: "Shell Series plates measure approximately 26cm across and are 2cm deep",
        },
        imgTwo: {
            img: require("./assets/shell-2.JPG"),
            data: "Shell pasta bowls measure approximately 26cm across and are 4.5cm deep.",
        },
        imgThree: {
            img: require('./assets/shell-4.JPG'),
            data: "Shell Series set - small shell  bowls measure approximately 18cm across and are 3.5cm deep.",
        },
        imgFour: {
            img: require('./assets/plate-5.JPG'),
            data: "Round plate set: Round plates measure approximately 27cm across and are 2cm deep. Small round bowls measure approximately 18cm across and are 3.5cm deep.",
        },
        imgFive: {
            img: require('./assets/plate-1.JPG'),
            data: "Round plate option: crenellated edges",
        },
        imgSix: {
            img: require('./assets/shell-3.JPG'),
            data: "Bottom of all plates have white tin glaze detailing",
        },
        imgSeven: {
            img: require('./assets/serving-1.JPG'),
            data: "Serving dishes in various sizes.",
        }

    })

   

    const [activeImg, setActiveImage] = useState(images.imgOne.img);
    const [activeData, setActiveData] = useState(images.imgOne.data);

    return (<>
        <div className='mx-auto pt-32 pb-28 h-full w-4/5'>
            <h2 className='text-2xl uppercase font-semibold font-headings tracking-widest pb-14 grid items-end justify-items-center'>Plate Shop</h2>
            <p className='text-sm text-justify'>Every plate is unique. I make each one by hand, and although I use the same materials, movements and techniques every time, no two are exactly alike. They are made with black clay, white slip, leadless glaze with copper carbonate, are fired to stoneware, and may be machine washed.</p>
            <br />
            <p className='text-sm text-justify'>I also always have a selection of serving dishes in always varying sizes, from salt cellar to platter. Please message me if you would like to see the latest options available and to place orders.</p>
            <br />
            <p className='text-sm text-justify'>Pasta Bowls - £180 each</p>
            <p className='text-sm text-justify'>Plates - £160 each</p>
            <p className='text-sm text-justify'>Small Bowls - £90 each</p>
            <p className='text-sm text-justify'>Serving Dishes - individually priced</p>

            <div className='mx-auto flex flex-col md:w-4/6 md:flex-row text-center gap-2 pb-60 p-2 md:p-8'>
                <div className='flex flex-col  gap-2'>
                    <img className='aspect-square object-cover ' src={activeImg} alt="shell plate" />
                    <p className='text-xs text-center italic text-neutral-600'>{activeData}</p>
                </div>
                <div className='flex flex-row flex-wrap justify-center md:flex-nowrap md:flex-col gap-2 md:gap-3 md:justify-between h-32'>
                    <img className='w-32 h-24 cursor-pointer' src={images.imgTwo.img} alt="shell plate front" onClick={() => {setActiveImage(images.imgTwo.img);
                    setActiveData(images.imgTwo.data)}} />
                    <img className='w-32 h-24 cursor-pointer' src={images.imgThree.img} alt="shell plate front" onClick={() => {setActiveImage(images.imgThree.img);
                    setActiveData(images.imgThree.data)}} />
                    <img className='w-32 h-24 cursor-pointer' src={images.imgFour.img} alt="shell plate front" onClick={() => {setActiveImage(images.imgFour.img);
                    setActiveData(images.imgFour.data)}}/>
                    <img className='w-32 h-24 cursor-pointer' src={images.imgFive.img} alt="shell plate front" onClick={() => {setActiveImage(images.imgFive.img);
                    setActiveData(images.imgFive.data)}} />
                    <img className='w-32 h-24 cursor-pointer' src={images.imgSix.img} alt="shell plate front" onClick={() => {setActiveImage(images.imgSix.img);
                    setActiveData(images.imgSix.data)}}/>
                    <img className='w-32 h-24 cursor-pointer' src={images.imgSeven.img} alt="shell plate front" onClick={() => {setActiveImage(images.imgSeven.img);
                    setActiveData(images.imgSeven.data)}}/>
                    <img className='w-32 h-24 cursor-pointer' src={images.imgOne.img} alt="shell plate front" onClick={() => {setActiveImage(images.imgOne.img);
                    setActiveData(images.imgOne.data)}}/>


                </div>






            </div>
        </div>
    </>
    )
}

export default PlateShop;