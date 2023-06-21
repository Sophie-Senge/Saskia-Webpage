import React from 'react'
import aboutOne from './assets/about.webp'
import aboutTwo from './assets/about-2.webp'
import aboutThree from './assets/about-3.webp'
import aboutFour from './assets/about-4.webp'
import aboutFive from './assets/about-5.webp'

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
            <h3 className='text-lg text-neutral-800 font-semibold font-headings tracking-widest pb-4 flex items-end justify-center'>Some reflections by Saskia Spender</h3>
            <hr className="w-60 h-px mx-auto my-2 bg-neutral-600 border-0 dark:bg-gray-700"/>
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
                <img className='mx-auto pb-5' src={aboutThree} alt="clay pots" />
                <br />
                {/* third section begins below ---------- */}
                <h3 className='text-lg text-neutral-800 font-semibold font-headings tracking-widest pb-8'>Emperors In The Wheel</h3>
                <p className='text-sm text-justify pb-2'>Some years later I was living in Dar es Salaam, as an accompanying spouse and mother of two small children. My daughters and I could see on the sides of the roads beautiful pots and clay braziers, both of which we bought and used to cook and store the food in the house, and also to go camping. Many of these pots had stunning fire marks from having been low-fired in drafty piles of grass, revealing the gunmetal shades of their original mud. Like so much African pottery, they were made by patting, molding, coiling. The big ones were made by walking around the pot with an outstretched arm. They often contained grog made from pounding old broken favorites. They were very porous and damp, and so never cracked on an open flame. Not one of them was made by wheel. They were very symmetrical. They stacked very cleverly, in such a way that I could use them as a kind of refrigerator for my fruit and veg, and the lizards wouldn’t get at them.</p>
                <br />
                <p className='text-sm text-justify pb-2'>These roadside pots were as cheap as small plant cuttings or one bag of gravel, far less than a pound of sugar: because these things were made by women and children using gifts from the earth. I found it very difficult to explain to my daughters that the things we held most valuable, like beautiful vessels, full of meaning and easy to break, and therefore to be revered; by the most important people, like children and mothers; made by accepting the gifts of the earth, which like all gifts must be honored and even reciprocated in some way: all these things I did, had the least value in the dusty roadside of Dar es Salaam.</p>
                <br />
                <img className='mx-auto pb-2' src={aboutFour} alt="clay pots" />
                <p className='text-sm text-center italic text-neutral-800 mx-10'>A roadside pot with blue lotus on my table in Dar es Salaam. The fire mark on the right reveals the iron in the clay, as shiny as metal. The pot is so porous that it balances in a puddle</p>
                <br />
                {/* fourth section begins below ---------- */}
                <p className='text-sm text-justify pb-2'>We once went on a camping trip with some friends, and as we drove by a particularly derelict thatched hamlet in a steep woodland, my friend leaned over and told me: “Look at these houses: we haven’t lived like this since the 16th century… Do you realize these people didn’t have the wheel until we brought it over?” I was very upset. I said nothing. I stared at the forest, blurring as the enormous jeep bounced uneasily over the track. Who were those “we” who had “brought” the wheel? It wasn’t much help to have one on such a terrain. The transport wheel was a truly abstract object in the absence of a good road.</p>
                <br />
                <p className='text-sm text-justify pb-2'>We came to a smooth carriageway along the coast, connecting some former sisal plantations to the port of Mombasa. It was one of those long and straight roads of empire, the engine rumbled and I was lost in vague thoughts about roads past. I thought of Accadian/Sumerian roads, Minoan roads, iron-age roads of which I knew only that they existed. Of Roman roads, built by armies of conscripts, by conquered people, by slaves. Of Mesoamerican roads built by captives and warriors, who also didn’t use wheels for transport or pottery (why did I know nothing of Chinese roads? I missed this knowledge now). What if roads where not primarily about the convenience of transport and trade, but of tribute and war? If roads, like railways, canals and information highways, could be seen as a particular, expansionist and centralizing, way of holding territory: in other words, an imperial way. Then the wheel had not taken in Africa, not because of a failure of the African imagination, but simply because that form of empire had not flourished in Africa. There had been empires around the river Nile, with chariot wheels and potters’ wheels, and a population density that by the Middle Kingdom already exceeded the Nile valley’s carrying capacity. But were the Empires of Mali and Songhai, let alone Kongo, or even the British in East Africa, comparable in reach with the hydro-empires of the Fertile Crescent and Egypt? Or the Roman, Mesoamerican and Chinese dynasties? China’s pottery production became industrial under an imperial monopoly under the Ming dynasty in the 14th century – long before Europe’s industrial revolution. The Ming court even dictated a limited number of shapes to make – at one point as few as five shapes were sanctioned.</p>
                <br />
                <p className='text-sm text-justify pb-2'>It occurred to me near Mombasa that the potter’s wheel may well be the civilian adaptation of a military technology. The potter’s wheel’s energy came from a point at its center: how different from the energy used to make pottery in Africa and pre-colonial America, where the force came from the human hand moving around the object. Perhaps this explained why I unconsciously read these less as vessels, whose focus was towards their own center, than as objects – whose relationship was to the space around them, indeed their context, just like people and gods. </p>
                <br />
                <p className='text-sm text-justify pb-2'>Betty Woodman’s own practice had its roots in functional ware, and evolved over time towards the objects with personhood for which she is known. Once she realized that the full potential of her Etruscan Pillow Pitcher lay not in how it poured or how it looked, but how it created, represented, reflected and projected her own experience of the world - then she was ready to abandon much of what preoccupied her first twenty years of work. Her process became of using the wheel to throw only the two primordial shapes of Western pottery, the disc and the cylinder; then dismantling and reassembling them in a radically fluent and subversive way. She cut up her cylinders, stacked and fused them with straps piped through an icing bag, dropped her discs so that gravity and chance may warp them, then cut them into pot shapes – handles, spouts, shadows of pots, façades of pitchers. She used the potter’s wheel as a painter might use paint to prime a canvas: it was her blank. This way she got away from the centrifugal “emperor” in the machine. Yet as late as 2014 she worried about the status of an art that had its roots in functional ware. For a while she deliberately made holes in her vases, so that her collectors may not place flowers in them. A year later she arranged flowers in her vases for her retrospective at the Metropolitan Museum, just as she did in her kitchen with her fabulous home-grown dahlias. </p>
                <br />
                <img className='mx-auto pb-2' src={aboutFive} alt="clay pots" />
                <p className='text-sm text-center italic text-neutral-800 mx-10 pb-5'>Maro Gorky and Betty Woodman, Antella 2011</p>
                <br />
                {/* fifth section begins below ---------- */}
                <h3 className='text-lg text-neutral-800 font-semibold font-headings tracking-widest pb-8'>Chance</h3>
                <p className='text-sm text-justify pb-2'>Alas, the holes in my own vases were far from deliberate. They were incidental. It was not my primary intention to make plates to be used or vases to hold water, but I would have liked them to live in all contexts. For collectors and friends to place flowers in my vases, to think carefully about which foliage looked good in which vessel and how and why, and thus to find a way of experiencing the world simultaneously as I did, and simultaneously to go beyond the specifics of my making: that fulfilled my intention. I didn’t like it when my collector cut her finger on some sharp glaze, any more than I liked a bit of glaze dropping off in a dishwasher. Yet neither did these faults make me repudiate my work. Like the performances of a ritual, they marked a moment in the sequence of a practice committed to chance, which will only make sense from the moment my life ends.</p>
                <br />
                <p className='text-sm text-justify pb-2'>The last time I saw Betty, four months before she died, when her voice was high with grief for George’s recent death, and with fear for her own demise, I brought her my best plate of that summer, 2017. As she held it and turned it over slowly, I asked her if I shouldn’t finally go to that pottery school near Florence where she used to teach, to learn some actual pottery techniques. Silence from my mentor. She held the plate, then she looked into me and said: “Going to school would be an utter waste of your time. Worse, it would bore you, and you could get distracted by a mountain of irrelevant skills…” She said other things, things about my upbringing among artists, drawing, looking and seeing art and nature from birth, and the weight of that education on my work: “If you feel you need technical advice, get a studio assistant.” Then we visited a fruit bowl of hers: “This broke in the glaze firing. But I like it, and I haven’t finished with it.” She’d epoxied it back together, re-glazed and re-fired it, and now it lived a full life with oranges on her hearth: “Seems like this epoxy can be fired?” she said. “And varnished, if you so wish. Ken Price used everything, from acrylic to car enamel.” I did not rush to get a studio assistant. My mentor had given me the permission I needed to stay open to chance. </p>
                <br />
                <p className='text-sm text-justify pb-2'>It seems to me that chance, among other elements, marks a departure of art from craft. A maker set off with a series of intentions, experiences, technical tools, muscle memories, references and resonances. All of these may to some extent diverge between art and craft, yet the process itself inevitably transforms the object. The fire, not the audience, is the point at which the author first relinquishes the ceramic work – or in Betty’s case, when she dropped her clay discs on the floor canvas. In this anarchic space, where an object sets loose from the authority of the maker and into the zone of irreversible change, art happens, and an object has the opportunity to transcend the person who made it or who lived with it. Nor is chance something trifling: is it not, along with mathematics, one of the principles of the universe, of life itself?</p>
                <br />
                <p className='text-sm text-justify pb-2'>The pursuit of this uncertain dimension, which in the map of my mind appears as vivid as an Upper Paleolithic cave, with images that flicker in the rocks, motivates me. Like a meteorite brings a spark from outer space, art brings space into the otherwise uninterrupted context of our lives. The question of flowers in vases is as incidental as the question of what is a vase: who is this flower, who is this vase, who am I now that I see them, who are we who see flowers, and transform the earth we inhabit (just as the earth transforms itself into clay by the weathering of its rocks): these seem to me the pressing questions to ask of art, as only art can suggest some answers. This is how our task retains a spiritual echo from the dawn of humanity. Artists, as well as society, expect the things we make to embody something about the human place in the world, that other things do not necessarily have to.</p>
                <br />


            </div>
        </section>
    </>
    )
}

export default About;