import React from "react";
import { StyledDiv } from "../styles/style";

import dogrunning from "../img/dogrunningwhitebackground.jpeg";
import daschund from "../img/daschund.jpeg";
// import jumping from "../img/jumpingdog.jpeg";
import flyer from "../img/flyerrelaxdogclasses.jpg";
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
        <img className="image-left" src={dogrunning} alt="dog running" />
        <div className="text-right">
          <p>
            Walks <br /> <br />
            1 hour walk
            <br />
            £15 per hour (1 dog)
            <br />
            £20 per hour (2 dogs)
            <br />
            <br />
            An hours walk, means a full hours walk. We do not cut corners.
            <br />
            <br />
            We walk a maximum of 6 dogs at one time, though individual walks can
            sometimes be accomodated.
            <br />
            We put a lot of thought into the groupings of our dogs to maximise
            the enjoyment of everyone concerned.
            <br />
            We collect from Cambridge City and the surrounding villages.
            <br />
            {/* <Link to="/contacts">Map of pick up zone</Link> */}
            <br />
          </p>
        </div>
      </div>
      <div className="righthanded">
        <img className="image-right" src={daschund} alt="daschund" />
        <div className="text-left">
          <p>
            Daycare, boarding, Home sitting and retreats
            <br /> <br />
            We offer full and half daycare to support working families. We also
            offer boarding in our own homes when you go on holiday or need
            overnight care. Boarding is done in our own homes,and unlike kennels
            is a relaxed and familiar environment. We can also accomodate coming
            in to your home. Our home sitting service suits some people better.
            It is a walking and feeding package that includes
            <br />
            1-3 walks (according to dog),
            <br />
            feeding, watering plants and caring for your home,
            <br />
            plus text updates! <br />
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
        <p>
          Reiki For Dogs <br />
          Dogs intuitively understand this technique and will sometimes present
          the part of their body they would like worked on, before even
          starting. This technique is really effective to help your dog come to
          terms with many traumatic situations they may have encountered, for
          example:
          <br />
          <br />
          Dog attack
          <br />
          Fireworks
          <br />
          Surgery
          <br />
          Veterinary Treatment
          <br />
          <br />
          It relaxes and calms your pet and helps you become more bonded. It
          also helps with general relaxation, arthritis, tummy upsets, nerves
          and behaviourial issues
          <br /> <br />
          This simple technique has 3 main parts: <br />
          Breathing <br />
          Meditation <br />
          Spiral work (hands on or from a distance) <br /> <br />
          These medatative practices help you and your dog to be at one with
          each other. Concentrating on the breath encourages you to let
          everything go, except your presence and your intent to help your dog.
          These sessions can be done in groups or one to one. <br />
          <br />
          Stewie's Story <br />
          Stewie's story perfectly illustrates the powerful effects possible
          from Canine Reiki. Stewie is a timid, nervous and very reactive Shiba
          Inu. He was caged for 4 years of his life, until a a client (Janice)
          rescued him and took him back to her Shiba rescue to help him find a
          loving forever home. Because of Stewie's past, he was very reactive
          and unpredictable and with no warning or indication of his intent, he
          would bite. Janice has never come across this and most dogs would be
          put to sleep, but she didnt give up. She contacted me and I went to
          meet her and Stewie. You couldn't touch him, brush him or wash him. I
          started to work with him from afar at first, with my intent to help
          him relaxing and open his heart chakra, and start to trust what I was
          doing. Using simple spiral movements from a distance, concentrating on
          his body. Within twenty mins, I could see him dropping and his eyes
          got heavy and he lay down and started to trust me. Slowly, but
          carefully I moved closer to him and finally after thirty minutes I was
          able to touch him, stroke him and reassure him that I was here to
          help. This was only in one session, it was amazing and I felt so
          overwhelmed that could help this beautiful boy.
          <br />
          <a href={"https://reikifed.co.uk/reiki-healing/animal-reiki/"}>
            UK Reiki Federation Link
          </a>{" "}
          <br />
          <a href={"https://ttouch.com/"}>Tellington TTouch Link</a>
        </p>
      </div>
      ;
    </StyledDiv>
  );
};

export default Ourbikes;
