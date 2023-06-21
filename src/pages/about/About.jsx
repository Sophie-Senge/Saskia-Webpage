import React from 'react'
import aboutOne from './assets/about.webp'
import aboutTwo from './assets/about-2.webp'
import aboutThree from './assets/about-3.webp'

function About() {
    return (<>
        <div className='mx-auto grid grid-cols-1 md:grid-flow-col grid-rows-2 text-center justify-items-center h-screen w-full '>
            <h2 className='text-2xl uppercase font-semibold font-headings tracking-widest pb-14 grid items-end justify-items-center'>About</h2>
            <p className='mx-10'>I was born in Florence in 1970. I grew up in a family of artists in the countryside near Siena.
                I was drawn to clay, which my father worked in his studio from the 1980s. I moved to England to complete my education, and have been based in London since my twenties.
                In 2005 the ceramicist Betty Woodman introduced me to leaf printing in clay. Currently I work on smaller objects, like plates, as well as on the mural scale. </p>
            <img className='mr-10' src={aboutOne} alt="saskia spender" />

        </div>
        <div className='mx-auto w-full pt-28'>
            <h1 className='text-4xl text-neutral-800 flex uppercase font-bold pb-2 font-headings tracking-widest justify-center'>what to ask of ceramic art?</h1>
            <h3 className='text-lg text-neutral-800 font-semibold font-headings tracking-widest pb-14 flex items-end justify-center'>Some reflections by Saskia Spender</h3>
        </div>
        <section className='container mx-auto md:px-2 py-16 w-4/6'>
            <div className='justify-center'>


                <p className='text-sm text-justify pb-2'>I saw potters as a child in Tuscany. I used to be fascinated by the sight of clay rising like a genie between the potter’s hands, growing and shifting in an unmistakably phallic way, and then evolve into a feminine form: a cup, a vase, a bowl. A vessel.</p>
                <br />
                <p className='text-sm text-justify pb-2'>Who were these vessels? Were they contained by the potter’s hands, or were they the container? They would spend most of their lives empty. We could not live without them. Some we would come to treasure with use. Others, the least utilized, might be buried for thousands of years and become treasure in a local museum, for instance on a Cycladic island.</p>
                <br />
                <p className='text-sm text-justify pb-2'>The most fascinating moment on the wheel was the one when the clay wobbled, attempting an escape as a shocking splatter of mud. I was faintly disappointed if the potter, through great skill, experience, caution and tradition, never made a wobble, let alone a splatter. Disappointment was almost inevitable by the end of the process: one second the metamorphosis was full of promise, poise and wonder. The next, things would start to settle, and to my eye go wrong. A thick neck here, an open spout there, a fashionable flourish, and hey presto – the potential was gone. The pitcher joined an identical series on the drying shelf.</p>
                <br />
                <p className='text-sm text-justify pb-2'>I thought I had in my mind the elegant shapes of Calabrian unglazed pottery, which I had seen as a child in the collection of my grandmother’s friend Cloclo Peploe, in the studio at San Francesco, in Florence. This studio was an enchanted place in itself, with casts of the Parthenon marbles on the wall, cast by Cloclo’s own grandfather, the German classicist and artist Hildebrandt. These vessels were the descendants of the ancient Greek amphorae and craters of the Greek colonies: I grew up thinking of them as great beauties, all different, and not to be touched. The earthenware equivalent of a Morandi painting.</p>
                <br />
                <img className='mx-auto pb-5' src={aboutTwo} alt="clay pots" />
                <br />
                {/* second section begins below ----------- */}
                <p className='text-sm text-justify pb-2'>My parents were artists with very active studio lives, in the countryside near Siena. They were much more interested in their practice than their careers, although my mother, Maro Gorky, did love her rave reviews on those occasions she exhibited. The ceramicist Betty Woodman had a different approach: half the year she lived in NYC as an active participant in a global arts capital, and half she lived in Tuscany not far from us.</p>
                <br />
                <p className='text-sm text-justify pb-2'>I admired Betty very much, and in the mid-90s I asked for a master-class. She in turn asked me to model for her husband George. Every time I said, “Well Betty, how about that master-class?” she took me to look at her work. One day she casually mentioned it took twenty years to find one’s hand with clay, and I got anxious about my time running out. At last, in the summer of 2005, I announced I was too old to model for George, and she unexpectedly drove over to deliver her master-class. Betty said, “I am going to teach you how to make a tile with the impression of a leaf.” My whole family came to the outdoor dining table to join this moment: my parents, my sister, our elder children.</p>
                <br />
                <p className='text-sm text-justify pb-2'>“We say that clay has memory,” Betty said. “It retains an impression of everything it touches: your hands, the movement from wedging and rolling, and in this case, the leaf.”She placed a mulberry leaf within the square tile and painted it over with a few strokes of slip, saying “Don’t over-paint, it gets muddy. Then you cut: my best tool is an old upholsterer’s needle.” She peeled off the leaf, which she had placed 2/3 in the square, with two strokes of slip to a side and one across the top.</p>
                <br />
                <p className='text-sm text-justify pb-2'>Immediately I felt in familiar territory: this simple printing technique may have been 5000 years old, but I knew everyone of us would place the leaf differently within a space, and each had a unique stroke with the brush. I placed my first Datura leaf in the middle, painting over with one stroke which pooled slip at the start of the movement. My mother, a painter, used the stem of a blue convolvulus to make an arc in her tile: in that moment, she too was giving me her master-class: if leaves could be textures and shapes, stalks could be lines. When I mentioned the limitations of a square tile shape with George, he said “the grid is also interesting”. My father was building the kiln in the garden. And my friend from school in San Sano, Stefano Secciani, looked after the gas fire day and night. My first tiles wound up in my own kitchen in London: cooking and firing were never so far from each other as one might expect.</p>
                <br />
                <p className='text-sm text-justify pb-2'>This single technique engaged me since Betty’s master-class, and just as I continued to think of how to break out of tesselation, I did sometimes wonder how things might have been, if she had introduced me to a cylinder on her wheel, or a pinch-cup, instead of a leaf tile. I did not question her choice. She gave me the right gift, as I soon found out, and not just because I liked it.</p>
                <br />
                <img className='mx-auto' src={aboutThree} alt="clay pots" />
                <br />


            </div>
        </section>
    </>
    )
}

export default About;