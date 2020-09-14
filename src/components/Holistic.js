import React from "react";
import {StyledDiv} from "../styles/style";
import flyer from "../img/flyerrelaxdogclasses.jpg";

const HomeSitting = () => {
    return (
        <StyledDiv>
          <h2 className="headerCentralised">Holistic Treatments</h2>

          <p>
            Dogs need food, exercise and fresh air but they are also deeply emotional beings.  
            They do not over think, they live in the present but they are sensitive, 
            intuitive and feel things deeply.  
            
          Dogs are always communicating with us.
           Unfortunately, we often mis-interpret their subtle or not so subtle cues as bad behavior. 
     
         I offer consultations and treatment sessions to improve your dogs physical
          and emotional health and behaviour. In particular&nbsp;
         <a href={"https://ttouch.com/"}>Tellington TTouch</a>, Canine Flow and
          &nbsp;
          <a href={"https://reikifed.co.uk/reiki-healing/animal-reiki/"}>
            Reiki for Dogs.
          </a>{" "}
          &nbsp;
          <br />
          <br />
          Consultations <br/><br />
          One to one session
          
         
          <br /> £25 for initial consultation then £35 per
          hour for subsequent sessions. <br />
          Book a block of 5 sessions - £10 discount
          <br />
          <br/>
          Classes <br/>
          <p> £10 per class</p>
          <img src={flyer} alt=""/>

          </p>
        </StyledDiv>
      );
    };
    
    export default HomeSitting ;

