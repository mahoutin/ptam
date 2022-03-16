import React from "react";

//components


//styled
import {
  SessionDescription,
  SessionHeader,
  Sessionsrate,
  SessionsNametwo,
  SessionName,
  SessionsTitle,
  TestimonialSessionsContainerDes,
  TestimonialSessionsContainer,
  TestimonialSessionsContainerFirst,
  TestimonialStepContainer, 
  TestimonialStepWrapper,
  TestimonialStepWrapperDes,
  TestimonialStepWrapperTitle
} from "../Testimonial/TestimonialStyle";

const TestimonialSection = () => {
  return (
    <TestimonialSessionsContainer>
      <TestimonialSessionsContainerFirst>
        <TestimonialSessionsContainerDes>
          <SessionsTitle>✊ HOW WE WORKS</SessionsTitle>
          <SessionHeader>
            Some of the ways of working with Ptam cleaning
          </SessionHeader>
          <SessionDescription>
           We strive to simplify the process of cleaning your home and working space as easy as possible.{" "}
           <TestimonialStepContainer>
            <TestimonialStepWrapper>
              <TestimonialStepWrapperTitle>1</TestimonialStepWrapperTitle>
            <SessionName>
              Request your service
            </SessionName>
            <TestimonialStepWrapperDes>
              Simply Tell us what service we can provide you.
            </TestimonialStepWrapperDes>
            </TestimonialStepWrapper>
            <TestimonialStepWrapper>
            <TestimonialStepWrapperTitle>2</TestimonialStepWrapperTitle>
            <SessionName>
              Set your schedule
            </SessionName>
            <TestimonialStepWrapperDes>
            Let's us no your availability. We are flexible.
            </TestimonialStepWrapperDes>
            </TestimonialStepWrapper>
            <TestimonialStepWrapper>
            <TestimonialStepWrapperTitle>3</TestimonialStepWrapperTitle>
            <SessionName>
              Sit Back and Relax
            </SessionName>
            <TestimonialStepWrapperDes>
              Enjoy the fully-equippeed proffessional cleaning experience.
            </TestimonialStepWrapperDes>
            </TestimonialStepWrapper>
           </TestimonialStepContainer>
          </SessionDescription>
          {/* <SessionName>

          </SessionName>
          <SessionsNametwo>

          </SessionsNametwo> */}
          {/* <Sessionsrate>3.000+ Testimonials ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ </Sessionsrate> */}
        </TestimonialSessionsContainerDes>
      </TestimonialSessionsContainerFirst>
    </TestimonialSessionsContainer>
  );
};

export default TestimonialSection;
