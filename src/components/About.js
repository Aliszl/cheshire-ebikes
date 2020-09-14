import React from "react";
import { StyledDiv } from "../styles/style";


const About = () => {
  return (
    <StyledDiv>
      <h2 className="headerCentralised">About</h2>
      <p >
        Cheshire eBikes was established in 2020. <br /><br />
        by founder Phil Spark <br /><br />
        Phil also runs an property management business
          <br/><br/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo exercitationem earum doloribus velit eius nobis, ipsa maiores animi quae mollitia non, laboriosam rerum, similique omnis pariatur aspernatur alias modi. Eaque?
      </p>
      <br />
      <div className="lefthanded">
        <img className="image-left"src="https://d3ivb44pxg89ct.cloudfront.net/assets/cube-touring-6417705ac21d3f2ef4a89cedd4fc725577377076333efde048b9a7b125c0be10.jpg" alt="claire" width="50%" />

        <p className="text-right">
         Bio. (Meet Phil and Isla) <br /> <br/>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos pariatur non quaerat earum ea! Beatae tenetur distinctio ex similique in sed aut accusamus suscipit hic laboriosam? Temporibus doloremque voluptatum commodi?.<br/><br/>

       
         
        </p>
      </div>
      <div className="righthanded">
        <img className="image-right"src="https://d3ivb44pxg89ct.cloudfront.net/assets/cube-touring-6417705ac21d3f2ef4a89cedd4fc725577377076333efde048b9a7b125c0be10.jpg" alt="claire" width="50%" />

        <p className="text-left">
       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla adipisci minus distinctio aliquid, esse facere, dolores omnis nemo nobis laudantium excepturi asperiores id dolore, eveniet maiores blanditiis voluptatem eius fugit! &nbsp;
         
        </p>
      </div>
      <div>
     <h1>header
       </h1> 
          <br/>
          <p>

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi asperiores porro molestias minus, deleniti iusto necessitatibus unde dolore tempore fuga inventore explicabo doloremque hic atque aliquam distinctio! Porro, maiores ipsum?
          </p>
  
      </div>
      <p>
        {" "}
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quos asperiores dicta ipsum perspiciatis eos aut! Minus, dolores. Soluta voluptatum neque dolor, quia nisi hic earum iste. Dolor, dolorum aspernatur.
      </p>
    </StyledDiv>
  );
};

export default About;
