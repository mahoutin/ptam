import React from "react";

//components
import HeroPicture from "../../Assets/Group26.svg"
import { HashLink as Link } from "react-router-hash-link";

//styled
import { IntroSessionsContainer,IntroSessionsHalfContainer,IntoHeader,IntoButtonContainer,IntoDescription} from "./IntroStyle";
import { ButtonStyle } from "../Button/LinkStyle";


const IntroSection = () => {
  return (
    <IntroSessionsContainer>
        <IntroSessionsHalfContainer>
            <IntoHeader>
            Make your home and office as comfortable.
            </IntoHeader>
            <IntoDescription>
            We provide cleaning services for your homes, apartements, offices and various services that require professionsal cleaning. Our goal is to provide high proffestional cleaning solutions to make your living /working space clean and comfortable.            </IntoDescription>
            <IntoButtonContainer>
            <Link to="#contact" className="quotelinks linkbutton">
                 Get a quote
          </Link>
            <ButtonStyle linkmarginleft servicebutton nopadding ><a href="tel:1-207-409-5286" className="phonecall">📞 (207) 409-5286</a> </ButtonStyle>
            </IntoButtonContainer>
        </IntroSessionsHalfContainer>
        <IntroSessionsHalfContainer>
        <img src={HeroPicture} alt="cleaning service"/>
        </IntroSessionsHalfContainer>
    </IntroSessionsContainer>
  );
};

export default IntroSection;