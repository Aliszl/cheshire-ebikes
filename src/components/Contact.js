import React from "react";
import { StyledContacts } from "../styles/style";

const Contact = () => {
  return (
    <StyledContacts>
      <div className="social-media-icons">
        <div className="top-row">
          <div>
            <a href="tel:+447971489600">
              <i className="fa fa-phone" aria-hidden="true">
                {" "}
                <h1>07986 655844</h1>
              </i>{" "}
            </a>
          </div>
          <div>
            <a href="mailto:Phil@pjdproperty.co.uk?bcc=alisparklaw@gmail.com&subject=eBike%20hire%20Query&body=Hi%20Phil,%0D%0DI%20would%20like%20to%20enquire%20about%20hiring%20an%20ebike%20please">
              <i className="fa fa-envelope-o" aria-hidden="true">
                {" "}
                <h1> Phil@pjdproperty.co.uk</h1>
              </i>
            </a>
          </div>
        </div>

        <div className="bottom-row">
          {/* <a
            href="https://www.facebook.com/clairewalks/"
            className="fa fa-facebook"
          >
            {" "}
          </a> */}

          {/* <a
            href="https://www.facebook.com/clairewalks/"
            className="fa fa-twitter"
          >
            {" "}
          </a> */}

          <a
            href="https://www.linkedin.com/in/philip-spark-404082107/?originalSubdomain=uk"
            className="fa fa-linkedin"
          >
            {" "}
          </a>

          <a
            href="https://www.instagram.com/vintagespark1980/?originalSubdomain=uk"
            className="fa fa-instagram"
          >
            {" "}
          </a>

          <a href=" https://wa.me/447986 655844" className="fa fa-whatsapp">
            {" "}
          </a>

     
        </div>
        <div>
        <iframe src="https://www.google.com/maps/d/embed?mid=1i5h5Sc2opj2GmWBe5lAkA_g1M0GCBe9D" title="embededmap" width="100%" height="480"></iframe>
        </div>
      </div>
    </StyledContacts>
  );
};

export default Contact;
