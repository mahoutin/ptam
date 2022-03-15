import React from "react";

//components
import Janitory from "../../Assets/group1.svg"
import green from "../../Assets/group2.svg"
import carpet from "../../Assets/group3.svg"
import disinfect from "../../Assets/desinfect.jpeg"
import Airbnb from "../../Assets/aibnb.jpeg"
import commercial from "../../Assets/commercial.jpeg"
import covid from "../../Assets/covid.jpeg"
import dishwash from "../../Assets/dishwash.jpeg"
import floor from "../../Assets/floor.jpeg"
import mouveout from "../../Assets/mouveout.jpeg"
import residence from "../../Assets/residence.png"
import { HashLink as Link } from "react-router-hash-link";

//styled
import {
  ServiceSessionsContainer,
  ServiceWrapperImage,
  ServiceWrapper,
  ServiceWrapperItem,
  ServiceWrapperDes,
} from "./ServiceStyle";
import {
  SessionHeader,
  SessionName,
  SessionsTitle,
  SessionDescription
} from "../Testimonial/TestimonialStyle";


const WhySection = () => {
  return (
    <ServiceSessionsContainer>
      <SessionsTitle> 👍 OUR SERVICES</SessionsTitle>
      <SessionHeader>We provide the following services</SessionHeader>
      <SessionDescription>
      For offices, entrances, reception areas, hallways, conference rooms, break rooms, training rooms, rest rooms, stairways, computer rooms, etc.
      </SessionDescription>
      <ServiceWrapper>
        <ServiceWrapperItem>
        <ServiceWrapperImage>
              <img src={Janitory} alt="janitorial service"/>
          </ServiceWrapperImage>
          <SessionName style={{color:"white", marginBottom:16}}>Janitorial Service</SessionName>
          
          <ServiceWrapperDes>
            We're ready to provide a regular cleaning tasks that keep your
            business looking great on a regular basis. Whether you need nightly
            janitorial services or only need cleanings a few times a month, our
            trained cleaners can work with you.
          </ServiceWrapperDes>
        </ServiceWrapperItem>
        <ServiceWrapperItem>
          <ServiceWrapperImage>
          <img src={green} alt="green service"/>
          </ServiceWrapperImage>
          <SessionName style={{color:"white", marginBottom:16}}>Green Cleaning</SessionName>
          <ServiceWrapperDes>
            Our friendly, professional Green Home cleaning service will leave
            your home looking, smelling, and feeling bright and fresh after
            every visit with non-toxic, super-effective cleaning supplies work.
          </ServiceWrapperDes>
        </ServiceWrapperItem>
        <ServiceWrapperItem>
          <ServiceWrapperImage>
          <img src={carpet} alt="green service"/>
          </ServiceWrapperImage>
          <SessionName style={{color:"white", marginBottom:16}}>Carpet Cleaning</SessionName>

          <ServiceWrapperDes>
            We take pride and satisfaction in cleaning your carpets as good as
            we would want our carpet cleaning done in our home. We wear booties,
            do not smoke, and are polite. We believe that your home is your
            castle and you should be treated as such.
          </ServiceWrapperDes>
        </ServiceWrapperItem>

      </ServiceWrapper>
      <Link to="#contact" className="quotelinks quotecollinks quote quotemargin">
          Get a quote
        </Link>    </ServiceSessionsContainer>
  );
};

export default WhySection;
