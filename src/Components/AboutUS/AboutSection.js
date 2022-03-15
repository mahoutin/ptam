import React from "react";

//components
import w1 from "../../Assets/group7.svg";
import { HashLink as Link } from "react-router-hash-link";
import { Button, UncontrolledCollapse, Card, CardBody } from "reactstrap";
//styled
import {
  AboutSessionsContainer,
  WhySessionsContainerHalfDivider,
  AboutSessionDescription,
  AboutSessionDescriptionspan,
  WhyImageWraper,
} from "./AboutStyle";
import { WhySessionsContainerHalf } from "../WhySection/WhyStyle";
import { SessionHeader, SessionsTitle } from "../Testimonial/TestimonialStyle";

const AboutSection = () => {
  return (
    <AboutSessionsContainer>
      <WhySessionsContainerHalf>
        <SessionsTitle>ABOUT US</SessionsTitle>
        <SessionHeader>Who are we?</SessionHeader>
        <AboutSessionDescription>
          <AboutSessionDescriptionspan>
            At PTAM cleaning Services LLC{" "}
          </AboutSessionDescriptionspan>{" "}
          We do not only do Cleaning services <b>we like to help out</b> in the
          community making a positive change. In Maine we have been receiving
          more and more immigrants who live in houses for the low income. they
          may not be able to support a cleaning company.{" "}
          <b>We help the elderly community</b> with cleaning for an affordable
          price or sometimes probono if they find themselves un able to do it to
          save time and to stay health. <br />
          We also know that getting to a level of cleaning can be challenging.{" "}
          <br />
          <b>We help you get some free time</b> out of your busty day and
          differnet responsabilities. Daily cleaning for private residential
          homes.<b> We work with you</b> to create your own cleaning plan to get
          consistent results that meet your needs.{" "}
          <b>we provide your most important space</b> with the quality cleaning
          it deserves.
          <Button
            color="primary"
            id="toggler"
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "var(--primary-color)",
              textDecoration: "underline",
              outline: "none",
              padding: 0
            }}
          >
            Read more
          </Button>
          <UncontrolledCollapse toggler="#toggler">
            <Card style={{
              backgroundColor: "transparent",
              border: "none",
              outline: "none",
            }}>
              <CardBody>
                We clean houses, condos and aprtments. <br />
                Our services are : Regular cleaning, occasional cleaning,
                moveout and move in cleaning, special events cleaning and
                apartemnet cleaning We do not only do Cleaning services
                <br />
                We like to help out in the community making a positive change.
                In Maine we have been receiving more nad more immigrants who
                live in houses for the low income. they may not be able to
                support a cleaning company. <br />
                We help the elderly community with cleaning for an affordable
                price or sometimes probono if they find themselves un able to do
                it to save time and to stay health. We also know that getting to
                a levcel of cleaning can be challenging. We help you get some
                free time out of your busty day and differnet responsabilities.
                Daily cleaning for private residential homes We work with you to
                create your own cleaning plan to get consistent results that
                meet your needs. <br />
                We provide your most important space with the quality cleaning
                it deserves. We clean houses, condos and aprtments. Our services
                are : Regular cleaning, occasional cleaning, moveout and move in
                cleaning, special events cleaning and apartemnet cleaning.
                <br />
              </CardBody>
            </Card>
          </UncontrolledCollapse>
        </AboutSessionDescription>
        <Link to="#contact" className="quotelinks quotecollinks quote">
          Get a quote
        </Link>
      </WhySessionsContainerHalf>
      <WhySessionsContainerHalf>
        <WhySessionsContainerHalfDivider margintop style={{
          backgroundColor:"var(--primary-color)",
          borderRadius: "16px"
        }}>
   
       <img src={w1} alt="cleaning"/>
  
        </WhySessionsContainerHalfDivider>
      </WhySessionsContainerHalf>
    </AboutSessionsContainer>
  );
};

export default AboutSection;
