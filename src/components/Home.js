import React from "react";
import autumn from "../img/autumn.jpg";
import granchester from "../img/granchesterMeadows.jpg";
import paw from "../img/paw.png";
import popularStamp from "../img/popularStamp.png";
import { StyledDiv } from "../styles/style";
import { Link } from "react-router-dom";
import { Carousel } from "antd";



const settings = {
 

    autoplay:true,
  pauseOnHover:true,
  dots: true,
  infinite: true,
  speed: 500,

};
const Home = () => {

  return (
    <StyledDiv>
      

      <h1>Bike hire in Knutsford </h1>
      <h2>(and surrounding areas)</h2>
      <br />
      <ul>
        <li>Reliable and professional</li>
        <li>Flexible to your requirements and the needs of your dog</li>
        <li>Fully insured & first aid trained</li>
      </ul>
      <br />
      <h2>
        Providing quality and lengthy dog walks in the beautiful Cambridgeshire
        countryside since 2010{" "}
      </h2>
      <br />

      <div className="lefthanded">
        <img className="image-left" src="https://d3ivb44pxg89ct.cloudfront.net/assets/cube-acid-5f307a3c6ca18fa7876eb254a76c59474ee68dad253def004ade7630434b6c4c.jpg" alt="autumn" />
        <div className="text-right"> 
        
        <h2>
          Having a full time job, time consuming responsibilities or mobility
          issues can make dog parenting difficult, and everybody has to take time out
          from their fur baby sometimes. Let us 'take the lead'  (Sorry ! ) <br />
          <br />
          If you are looking for a reliable, professional and flexible service,
          to act in loco parentis for your pup when you can't be with them, look
          no further.
        </h2>
        </div> 
      </div>

      <div className="righthanded">
        <img className="image-right"src="https://d3ivb44pxg89ct.cloudfront.net/assets/cube-acid-5f307a3c6ca18fa7876eb254a76c59474ee68dad253def004ade7630434b6c4c.jpg" alt="granchester meadows" />
        <div className="text-left">
        <h2>
          We offer all aspects of dog care, individually tailored to you and your dog  <br />
           We understand dogs and ensure they are comprehensively looked after whilst in our care,
            so you can focus on your working day knowing they are happy and cared for.
          <br /> Our team structure means we can better optimise our groupings
          according to each dog's requirements and still be both flexible and reliable.
           We will never let you down.
        </h2>
        </div> 
      </div>

      <br />
      <h2>We are passionate about dogs, and the outdoors.</h2>
      <br />
      <h1 className="headerCentralised">Our Services</h1>
      <div className="services-top-row services-row">
        <div className="servicesBox">
          <div className="servicesBox-header">
            <img src={paw} alt="paw" />
            <h1>Day Care</h1>
          </div>
          <h2>
            Full day <br /> (9am to 4.30) <br />
            £25
            <br />
          </h2>
          <h2>
            Half day <br /> £17.50
            <br />
            (9am-1pm/12-4.30)
            <br />
            Alternative timings on request
          </h2>
          <Link to="/services/daycare">Read More</Link>
        </div>
        <div className="servicesBox">
          <div className="servicesBox-header">
            <img src={paw} alt="paw" />
            <h1>Walks</h1>
            <img className="popularStamp" src={popularStamp} alt="" />
          </div>
          <h2>
            1 hour walk
            <br /> <br />
            1 dog: £15
            <br />
            2 dogs: £20
            <br /> <br />
            Includes pick up and drop off.
            
            <br /> <br />
          </h2>
          <Link to="/services/walks">Read More</Link>
        </div>

        <div className="servicesBox">
          <div className="servicesBox-header">
            <img src={paw} alt="" />
            <h1>Boarding</h1>
          </div>
          <h2>
            Over night stays <br/>to suit your holiday requirements <br /> <br />
            £35
            <br /> <br /> Includes all care and walks <br /> <br />
          </h2>
          <Link to="/services/boarding">Read More</Link>
        </div>
      </div>

      <div className="services-middle-row services-row">
        <div className="servicesBox">
          <div className="servicesBox-header">
            <img src={paw} alt="paw" />
            <h1>Home Sitting</h1>
          </div>
          <h2>
            Holiday Package
            <br />
            1-3 walks
            <br />
            feeding, watering plants and caring for your home,
            <br />
            plus text updates! <br />
            £35 per day
          </h2>

          <Link to="/services/homesitting">Read More</Link>
        </div>

        <div className="servicesBox">
          <div className="servicesBox-header">
            <img src={paw} alt="" />
            <h1>Classes/ Training</h1>
          </div>
          <h2>
            {" "}
            Private and group classes
            <br />
            Puppy training
            <br />
            Dog Training
            <br />
            Canine Flow
            <br />
            <br />
            Price on application
          </h2>
          <Link to="/services/puppyclasses">Read More</Link>
        </div>

        <div className="servicesBox">
          <div className="servicesBox-header">
            <img src={paw} alt="" />
            <h1>Holistic Treatment</h1>
          </div>

          <h2>
            Tellington TTouch
            <br />
            Dog Reiki
            <br />
            Canine flow
            <br />
            Hypnotherapy
            <br />
            <br />
            £10 base rate plus £10 per hour{" "}
          </h2>
          <Link to="/services/holistic">Read More</Link>
        </div>

    
      </div>

      <div className="carousel-container">
        <div className="carouselandtext">
          <h1 className="headerCentralised">Testimonials</h1>
        </div>

        <Carousel {...settings} className="carousel" >
          <div>
            <h2>{testimonialCarousel[0].carouselName}</h2>
            <p>{testimonialCarousel[0].carouselText}</p>
          </div>
          <div>
            <h2>{testimonialCarousel[1].carouselName}</h2>
            <p>{testimonialCarousel[1].carouselText}</p>
          </div>
          <div>
            <h2>{testimonialCarousel[2].carouselName}</h2>
            <p>{testimonialCarousel[2].carouselText}</p>
          </div>
          <div>
            <h2>{testimonialCarousel[3].carouselName}</h2>
            <p>{testimonialCarousel[3].carouselText}</p>
          </div>
          <div>
            <h2>{testimonialCarousel[4].carouselName}</h2>
            <p>{testimonialCarousel[4].carouselText}</p>
          </div>
          <div>
            <h2>{testimonialCarousel[5].carouselName}</h2>
            <p>{testimonialCarousel[5].carouselText}</p>
          </div>
          <div>
            <h2>{testimonialCarousel[6].carouselName}</h2>
            <p>{testimonialCarousel[6].carouselText}</p>
          </div>
        </Carousel>
     
      </div>
    </StyledDiv>
  );
};

export default Home;


const testimonialCarousel = [
  {
    carouselImg: autumn,
    carouselText:
      "We think Claire is a wonderful dog walker/house sitter. She looked after our wonderful dog, Max, in our home for 3 ½ weeks when were on holiday and we have asked her back since then. Max  has a number of issues which Claire was very happy to deal with, even taking him to the vet as requested by us. She kept us in touch with how he was doing and was always available by texting. She is full of common sense, totally trustworthy, clearly adores dogs and is very experienced. It was clear from the start that Max was very happy with Claire. She went that extra mile with advice and ideas to help Max with his anxiety issues – all very welcome, not at all pushy. Claire is really lovely and very easy to talk to. We felt very relaxed when we were away in the knowledge that Max was being very well looked after with some very relaxing doggy massage thrown in too! Our house too was well looked after and clean and tidy when we returned!",
    carouselName: "Maggie  (with Max) ",
  },
  {
    carouselImg: granchester,
    carouselText:
      "Claire Bloomfield has worked for us looking after and nurturing our two miniature daschund/ jack Russell crosses. She is very thoughtful and caring in her approach to walking and looking after them whilst in her care. The dogs re her top priority and she has worked with us to help one of the dogs behavioural issues and the other with food issues. She shows such passion and dedication in all aspects of her work and it very trustworthy. I wouldn't hesitate to recommend her for dog walking or pet sitting.",
    carouselName: "Nicki (with Coco and Kanga) ",
  },
  {
    carouselImg: granchester,
    carouselText:
      "I was so relieved to find a kind and caring dog walker. Claire was recommended to me by a friend after searching long and hard. My boy is far too precious to just leave alone or with anyone! Claire was so sweet and patient whilst I put her through the mill of questions and more questions and finally a trial dog walk with me in tow! She immediately put me at ease and Hugo just adores his Auntie Claire. I would highly recommend her to anyone!",
    carouselName: "Natasha (with Hugo)  ",
  },
  {
    carouselImg: granchester,
    carouselText:
      "It took me over a year to take the plunge to find a dog walker as I was so nervous to trust anyone else with my dog. Claire quickly put my mind at ease and assured me that no risks would ever be taken and that Roxy would  be in safe hands. Roxy has now been enjoying regular walks with Claire for almost 3 years and I have peace of mind knowing that she's out having fun and socialising when I'm at work - and I always get home to a tired and happy dog.  Claire always updates me with a text to let me know how they got on and that she's safely home again. Claire's experience in Reiki is also a huge benefit, particularly on days that are too hot (or too rainy!) to walk, Roxy still gets some quality time and attention. I trust Claire completely with a key to my home and with Roxy and wouldn't hesitate for a moment to recommend her to others.",
    carouselName: "Daisy (with Roxy) ",
  },
  {
    carouselImg: granchester,
    carouselText:
      "Claire is part of the family now. I didn't trust anyone with Domino until I bumped into Claire and Dominio automatically took to her. Domino boards with Claire frequently as I am away alot. She is always happy to go with her and happy when she comes back. I know she is in safe hands and Claire always gives her 100% attention and care while I am away. It gives me a sense of ease while I am away to know she is in good hands and very well looked after.",
    carouselName: "Aislinn with Domino",
  },
  {
    carouselImg: granchester,
    carouselText:
      "Claire has been our dog sitter for over 4 years and Millie just loves her to bits. Claire stays at our house and I know Millie is in good hands and that the house is being looked after. The house is always tidy and clean when we return and Millie has had a fantastic time and looks sad when she says goodbye to her.  William her greyhound stays with her in the house too and there is never a problem, Millie loves him so much and they have snuggles on the sofa. Now William has passed away, her new dog Spock stays and again never any problems and Millie has a new friend to play with.  I trust Claire 100% with Millie and the house. Whenever I need advice or a doggy chat she is there and is always helpful and commited to what she does. She has a natural flare and talent with dog's and you can see she is passionate in what she does.",
    carouselName: "Janet with Millie",
  },
  {
    carouselImg: granchester,
    carouselText:
      "We have used Claire's Canine Companions for 3 years now, for lunchtime walks on my working days and for holiday care.  I found them by bumping into one of Claire's Walkers out with dogs on the Roman Road.  I was struck by how happy all the dogs looked.  The team is big enough to be able to cover sick leave etc and be reliable and small enough to know all the dogs personally ",
    carouselName: "Ali (with Bear)",
  },
  {
    carouselImg: granchester,
    carouselText:
      "Our little shy Shihpoo, Bonnie, has been going on group walks with Claire and her team for almost 2 years. Claire spends the time and effort to not only exercise the dogs, but to pair them in size and personalities to get the most out of the sessions. We have seen vast improvements in Bonnie's behaviour, such as her confidence and her ability to assess new dogs and people quickly. It’s lovely to hand her over each day seeing her tail waggle and knowing she is in great hands. We highly recommend Claire’s Canine Companions.",
    carouselName: "Alice BrownJohn with Bonnie",
  },
];