import React from "react";
import { StyledDiv } from "../styles/style";

import { Link } from "react-router-dom";

const Ourbikes = () => {
  return (
    <StyledDiv style={{ background: "#fff" }}>
      <div>
        <h2 className="headerCentralised">OUR eBIKES</h2>
        <div className="pcentralised">
          <ul>
            <Link to="/services/walks">
              {" "}
              <li>CUBE ACID HYBRID EBIKE</li>
            </Link>

            <Link to="/services/daycare">
              {" "}
              <li>CUBE ACID TOURING PRO EBIKE</li>
            </Link>

       
          </ul>
        </div>
      </div>
      <br />
      <div className="lefthanded">
        <img className="image-left" src="https://d3ivb44pxg89ct.cloudfront.net/assets/cube-acid-5f307a3c6ca18fa7876eb254a76c59474ee68dad253def004ade7630434b6c4c.jpg" alt="" />
        <div className="text-right">
          <p>
            eBike Hire <br /> <br />
           
            £30 per half day
            <br />
            £40 per full day
            <br />
            £190 per week
            <br />
            <br />
            Delivery within a 10 mile radius of Tatton.  
            <br />
           
            {/* <Link to="/contacts">Map of pick up zone</Link> */}
            <br />
          </p>
        </div>
      </div>
      <div className="righthanded">
        <img className="image-right"  src="https://d3ivb44pxg89ct.cloudfront.net/assets/cube-acid-5f307a3c6ca18fa7876eb254a76c59474ee68dad253def004ade7630434b6c4c.jpg" alt="daschund" />
        <div className="text-left">
          <p>
          Details
            <br /> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ut laborum unde facere ipsam saepe? Ratione rem iure magni quae veritatis inventore corporis. Temporibus totam mollitia eveniet tempora sequi tempore.
            <br />
           Lorem ipsum dolor sit 
            <br />
            lalalalalalala
            <br />
            humdehum.  lalalalala<br />
          </p>
        </div>
      </div>
      {/* <div className="lefthanded">
        <img className="image-left" src={jumping} alt="dog running" />
        <div className="text-right">
          <p>
            Retreats <br /> <br />
            Coming soon...
            <br />
            All our passion for dogs is being chanelled into developing a
            comprehensive live in care ,provided in a wonderful doggy creche
            based in rural Fenland near Downham Market. 8 acres of land devoted
            to exercise and exploring for the dogs, a sensory garden, doggy
            pool, chill out rooms, groom room with a wash bath. Doggy rooms with
            under floor heating. All areas covered by webcam so you can see what
            your dog is up to. High security electric, password access front
            gates, monitored at all times
            <br />
            <br />
          </p>
        </div>
      </div> */}
            <div className="lefthanded">
            <img className="image-right" src="https://d3ivb44pxg89ct.cloudfront.net/assets/cube-acid-5f307a3c6ca18fa7876eb254a76c59474ee68dad253def004ade7630434b6c4c.jpg" alt="relax class flyer" />
            <div className="text-left">
            <p>
            Heading
            <br /> <br />I am a qualified bike mechanic &nbsp;
            <a href={"http://www.tattonpark.org.uk/home.aspx"}>Some link</a>, blah
            and &nbsp;
            <a href={"https://www.thecourtyardknutsford.co.uk/"}>
              some link
            </a>{" "}
            &nbsp; roadside puncture rescue.
            <br />
            <br />
           Back on the road
          
          </p>
        </div>
      </div>
      {/* <div className="righthanded">
        <img className="image-right" src={flyer} alt="relax class flyer" />
        <div className="text-left">
          <p>
            Holistic Therapies
            <br /> <br />I am a qualified &nbsp;
            <a href={"https://ttouch.com/"}>Tellington TTouch</a>, Canine Flow
            and &nbsp;
            <a href={"https://reikifed.co.uk/reiki-healing/animal-reiki/"}>
              Reiki for Dogs
            </a>{" "}
            &nbsp; practitioner.
            <br />
            <br />
            One to one session
            <br />
            Spiralwork and training techniques.
            <br /> £25 for initial consultation. second session onwards £35 per
            hour. <br />
            Book a block of 5 sessions - £10 discount
            <br />
          </p>
        </div>
      </div> */}
      <div className="pcentralised">
  Hello.... centralised paragraph
      </div>
      ;
    </StyledDiv>
  );
};

export default Ourbikes;
