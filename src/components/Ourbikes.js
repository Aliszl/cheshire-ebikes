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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            <br />
            lalalalalalala
            <br />
            humdehum.  lalalalala<br />
          </p>
        </div>
      </div>

            <div className="lefthanded">
            <img className="image-right" src="https://d3ivb44pxg89ct.cloudfront.net/assets/cube-acid-5f307a3c6ca18fa7876eb254a76c59474ee68dad253def004ade7630434b6c4c.jpg" alt="relax class flyer" />
            <div className="text-left">
       
        </div>
      </div>
 
      <div className="pcentralised">
     Our bikes are sturdy and well maintained but if the worst should happen...qualified bike mechanic &nbsp;
      roadside puncture rescue.....  Back on the road..blah
      </div>
      ;
    </StyledDiv>
  );
};

export default Ourbikes;
