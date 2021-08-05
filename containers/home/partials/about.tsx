import { Button, Container } from "@material-ui/core";
import React from "react";
import {
 AboutDescStyled,
 AboutSectionStyled,
 ImageBlock,
} from "../home.styles";

const AboutPartial = () => {
 return (
  <AboutSectionStyled>
   <AboutDescStyled>
    <Container maxWidth="lg">
     <img src="https://luminoum.com/dev/images/ali-logo.png" alt="" />
     <p>
      PT. Anugrah Luminoum Indonesia is contribute in healthy products in likes
      of dietary supplements industry. Operate in the Capital of INDONESIA,
      Jakarta & spread horizontally throughout the archipelago, NUSANTARA.
     </p>
     <Button variant="contained">About Us</Button>
    </Container>
   </AboutDescStyled>
   <ImageBlock
    style={{ backgroundImage: "url(https://picsum.photos/id/10/1920/1080)" }}
   />
  </AboutSectionStyled>
 );
};

export default AboutPartial;
