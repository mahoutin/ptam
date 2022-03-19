import React from "react";

//components
import Benefit from "../../Assets/benefit3.jpeg";
import { HashLink as Link } from "react-router-hash-link";
import { BsCheckCircleFill } from "react-icons/bs";
//styled
import {
  WhySessionsContainer,
  WhySessionsContainerHalf,
  WhySessionsContainerHalfDivider,
  WhyDividerContent,
  WhyImageWraper,
  WhyCheckWraper
} from "./WhyStyle";
import {
  SessionDescription,
  SessionHeader,
  SessionName,
  SessionsTitle,
} from "../Testimonial/TestimonialStyle";


const WhySection = () => {
  return (
    <WhySessionsContainer>
     
      <WhySessionsContainerHalf>
       <img src={Benefit} alt="cleaning"/>
      </WhySessionsContainerHalf>
      <WhySessionsContainerHalf>
       
       <SessionHeader style={{color:"white"}}>Why should you choose us?</SessionHeader>
        <WhyCheckWraper>
        <BsCheckCircleFill style={{fontSize:24, marginRight:16}}/>
        <div style={{fontSize:16}}>Fast and Great Cleaning Process</div>
        </WhyCheckWraper>
        <WhyCheckWraper>
        <BsCheckCircleFill style={{fontSize:24, marginRight:16}}/>
        <div style={{fontSize:16}}>A Lot Of Satisfied Customers</div>
        </WhyCheckWraper>
        <WhyCheckWraper>
        <BsCheckCircleFill style={{fontSize:24, marginRight:16}}/>
        <div style={{fontSize:16}}>Location In Scarbourough, Maine</div>
        </WhyCheckWraper>
       <Link to="#contact" className="quotelinks quotecollinks quotecollinks2 quote">
         Get a quote
       </Link>
     </WhySessionsContainerHalf>
    </WhySessionsContainer>
  );
};

export default WhySection;
