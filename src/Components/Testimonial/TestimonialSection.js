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
              Simpli
            </TestimonialStepWrapperDes>
            </TestimonialStepWrapper>
            <TestimonialStepWrapper>
            <TestimonialStepWrapperTitle>2</TestimonialStepWrapperTitle>
            <SessionName>
              Schedule your service
            </SessionName>
            <TestimonialStepWrapperDes>
              Simpli
            </TestimonialStepWrapperDes>
            </TestimonialStepWrapper>
            <TestimonialStepWrapper>
            <TestimonialStepWrapperTitle>3</TestimonialStepWrapperTitle>
            <SessionName>
              Sit Back and Relax
            </SessionName>
            <TestimonialStepWrapperDes>
              Simpli
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
