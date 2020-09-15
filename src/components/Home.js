import React from "react";
import autumn from "../img/autumn.jpg";
import granchester from "../img/granchesterMeadows.jpg";
// import eBikeIcon from "../img/icons8-electric-bike-50.png";
import popularStamp from "../img/popularStamp.png";
import { StyledDiv } from "../styles/style";
import { Link } from "react-router-dom";
import { Carousel } from "antd";

const settings = {
  autoplay: true,
  pauseOnHover: true,
  dots: true,
  infinite: true,
  speed: 500,
};
const Home = () => {
  return (
    <StyledDiv>
      <h1>eBike hire in Knutsford </h1>
      <h1>(and surrounding areas)</h1>
      <br />
      <img className="jackHeadshot" src="https://d3ivb44pxg89ct.cloudfront.net/assets/cube-acid-5f307a3c6ca18fa7876eb254a76c59474ee68dad253def004ade7630434b6c4c.jpg" alt="dog" />
      <ul>
        <li>Half day, full day and longterm rental</li>
        <li>
          Drop off/pickup free <br />
          (within 10km radius of Tatton Park){" "}
        </li>
        <li>Supplied with safety helmet and lock</li>
        <li>Fully insured & well maintained</li>
        <li>72 hour battery life before re-charge</li>
      </ul>
      <br />
      <h2>
        knutsford Elizabeth Gaskell Cranford Tatton park estate medieval old
        hall, mansion, avoid crowds, RHS, Mayday, Jack of the Green,
        PennyFarthing cafe, bikes fitness/ mammals lycra dont do it. countryside
        lifestyle old cheshire. tatton lovely fresh air, branding, fallow deer.
        small country lanes
      </h2>
      <br />

      <div className="lefthanded">
        <img
          className="image-left"
          src="https://d3ivb44pxg89ct.cloudfront.net/assets/cube-acid-5f307a3c6ca18fa7876eb254a76c59474ee68dad253def004ade7630434b6c4c.jpg"
          alt="autumn"
        />
        <div className="text-right">
          <h2>
            Why ride an ebike? First and foremost because they're great fun!
            Everyone loves to cycle, but not everyone is fit enough for longer
            rides, and some don't want to end up hot, sweaty and out of breath.
            An ebike gives you all the thrills of bike riding without the
            downsides. If your new to cycling an ebike opens up more options and
            will help kick start you’re cycling fitness too.
          </h2>
        </div>
      </div>

      <div className="righthanded">
        <img
          className="image-right"
          src="https://d3ivb44pxg89ct.cloudfront.net/assets/cube-acid-5f307a3c6ca18fa7876eb254a76c59474ee68dad253def004ade7630434b6c4c.jpg"
          alt="granchester meadows"
        />
        <div className="text-left">
          <h2>
            Pedal assist bikes that help you zip along at about 15mph require no
            licence, no insurance and no tax. They are regarded in law exactly
            the same as a regular bicycle. Helmets are recommended but are not a
            legal requirement. As with regular bikes lights are required at
            night, but not during day light. Hi-viz clothing isn't essential
            either.
  
          </h2>
        </div>
      <div>
      </div>
   
      </div>

      <br />
      <h2>We are passionate about cycling.</h2>
      <br />

      <h1 className="headerCentralised">Our Services</h1>
      <div className="services-top-row services-row">
        <div className="servicesBox">
          <div className="servicesBox-header">
            <h1>half day</h1> <br />
            {/* <img src={eBikeIcon} alt="eBikeIcon" /><br/> */}
          </div>
          <h2>
            <br /> (9am to 1pm) <br />
            or
            <br /> (1pm - 5pm) <br />
            £30
            <br />
          </h2>
          <h2>Includes pick up and drop off.</h2>
          <Link to="/services/daycare">Read More</Link>
        </div>
        <div className="servicesBox">
          <div className="servicesBox-header">
            {/* <img src={paw} alt="paw" /> */}
            <h1>Full Day</h1>
            <img className="popularStamp" src={popularStamp} alt="" />
          </div>
          <h2>
            (9am-5pm or 8 hours)
            <br /> <br />
            Includes pick up and drop off.
            <br /> <br />
          </h2>
          {/* <Link to="/services/walks">Read More</Link> */}
        </div>

        <div className="servicesBox">
          <div className="servicesBox-header">
            {/* <img src={paw} alt="" /> */}
            <h1>Full Week</h1>
          </div>
          <h2>
            £190
            <br /> <br /> Part week or multiple week available on request <br />{" "}
            <br />
          </h2>
          {/* <Link to="/services/boarding">Read More</Link> */}
        </div>
      </div>
      <h2>

Family & Group Pricing:<br/> 15% discount for rental of 4 bikes or more. Call us<br/>

Minimum Age:<br/> The minimum legal age to ride an eBike is 14.<br/>

Child Seats:<br/> Rear rack-mounted Child Seats available to rent with bikes from £5 and suitable for children 1-6 yrs old and under 22kg.
<br/>
  </h2>
      <div className="carousel-container">
        <div className="carouselandtext">
          <h1 className="headerCentralised">Testimonials</h1>
        </div>

        <Carousel {...settings} className="carousel">
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
    carouselText: "lorem   ",
    carouselName: "John",
  },
  {
    carouselImg: granchester,
    carouselText:
      "Electric bikes can provide the perfect answer for many cyclists - we explain how they work and pick out some of the best",
    carouselName: "James ",
  },
  {
    carouselImg: granchester,
    carouselText:
      "There are a whole host of reasons why you might want some pedalling assistance in your life.",
    carouselName: "Roger ",
  },
  {
    carouselImg: granchester,
    carouselText:
      "Perhaps you have to travel with lots of cargo, and the added power can mean the difference between using a car or still spinning your two legs.",
    carouselName: "Daisy ",
  },
  {
    carouselImg: granchester,
    carouselText:
      "Or maybe you want to start commuting to work, and an electric hybrid could be a great option for helping you cover the miles, without turning up at work in a sweaty state.",
    carouselName: "Aislinn",
  },
  {
    carouselImg: granchester,
    carouselText:
      "You might be recovering from injury or illness and the added boost of a motor might help you get back out there again. Or it might simply be the case that you’re not as young as you once were.",
    carouselName: "Janet",
  },
  {
    carouselImg: granchester,
    carouselText:
      "Electric hybrid bikes are the most popular choice. Many riders are looking for a comfortable ride, which can handle rough roads and occasional tracks, with a comfortable upright position thanks to the flat handlebars.",
    carouselName: "Alistair",
  },
  {
    carouselImg: granchester,
    carouselText:
      "Electric bikes have been around longer than you think. However, in the last few years the technology has really moved on and they are the fastest growing sector of the European cycle market. In some countries in Europe, eBikes represented 40% of all bikes sold last year.",
  },
];
