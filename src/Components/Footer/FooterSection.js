import React from "react";

//components


//styled
import { FooterSectionWrapper,FooterHalfWrapper,FooterHeader,FooterDes} from "./FooterStyle";



const IntroSection = () => {
  return (
    <FooterSectionWrapper>
        <FooterHalfWrapper>
            <FooterHeader>Contact Us</FooterHeader>
            <FooterDes>📍 PTAMCLEANINGSERVICE <br/>18 Pin Oak Drive, Scarbourough, ME 04074</FooterDes>
            <FooterDes>📞 (207) 810-9232</FooterDes>
            <FooterDes>📧 support@ptamcleaning.com</FooterDes>
            <FooterDes>Follow us on facebook: <a href="https://www.facebook.com/PTAM-Cleaning-Services-103027622311539" className="sociallink" target="_blank" rel="noopener noreferrer">@PTAM Cleaning Service LLC</a></FooterDes>
        </FooterHalfWrapper>
        <FooterHalfWrapper>
            <FooterHeader>Our Services</FooterHeader>
            <FooterDes>⭐ Janitorial Service</FooterDes>
            <FooterDes>⭐ Carpet Cleaning</FooterDes>
            <FooterDes>⭐ Disinfecting Surfaces</FooterDes>
            <FooterDes>⭐ Residential Cleaning</FooterDes>
            <FooterDes>⭐ Dishwashing</FooterDes>
            <FooterDes>⭐ Move In / Move Out Cleaning</FooterDes>
            <FooterDes>⭐ Airbnb Cleaning</FooterDes>
            <FooterDes>⭐ Floor Care</FooterDes>
            <FooterDes>⭐ Covid-19 Disinfection</FooterDes>
            <FooterDes>⭐ Commercial Cleaning</FooterDes>
        </FooterHalfWrapper>
    </FooterSectionWrapper>
  );
};

export default IntroSection;