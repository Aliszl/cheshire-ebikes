import React from "react";
import { StyledContacts } from "../styles/style";

const Contact = () => {
  return (
    <StyledContacts>
      <div className="social-media-icons">
        <div className="top-row">
          <div>

          <a href="tel:+447971489600">
            
              <i  className="fa fa-phone" aria-hidden="true">
                {" "}
                <h1>07971 489600</h1>
              </i>{" "}
           
          </a>
          </div>
         <div>

          <a href="mailto:clairewalks@gmail.com?bcc=alisparklaw@gmail.com&subject=Dog%20Care%20Query&body=Hi%20Claire,%0D%0DI%20would%20like%20to%20enquire%20about%20one%20of%20your%20services">
      
              <i className="fa fa-envelope-o" aria-hidden="true">
                {" "}
                <h1> clairewalks@gmail.com</h1>
              </i>
   
          </a>
         </div>

        </div>

        <div className="bottom-row">
         
            <a
              href="https://www.facebook.com/clairewalks/"
              className="fa fa-facebook"
            >
              {" "}
            </a>
        
          {/* <a
            href="https://www.facebook.com/clairewalks/"
            className="fa fa-twitter"
          >
            {" "}
          </a> */}
          
            <a
              href="https://www.linkedin.com/in/claire-bloomfield-8434b016b/?originalSubdomain=uk"
              className="fa fa-linkedin"
            >
              {" "}
            </a>
         
            <a href=" https://wa.me/447971489600" className="fa fa-whatsapp">
              {" "}
            </a>
         
            <a
              href="https://clairebloomfield.blogspot.com/"
              className="fa fa-link"
            >
              blog
            </a>
         
        </div>
      <div>
      <iframe title="pick up zone" src="https://www.google.com/maps/d/u/0/embed?mid=1Dg5S797owkZ6QQPetH4R0f77c3h1UH9s" width="100%" height="480"></iframe>
      </div>
      </div>
    </StyledContacts>
  );
};

export default Contact;
