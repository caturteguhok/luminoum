import { Button, Container, Link } from "@material-ui/core";
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
     <Link href="/about">
      <Button variant="contained">About Us</Button>
     </Link>
    </Container>
   </AboutDescStyled>
   <ImageBlock
    style={{
     backgroundImage:
      "url(https://via.placeholder.com/1080x800.png?text=Banner+About+at+luminoum.com)",
    }}
   />
  </AboutSectionStyled>
 );
};

export default AboutPartial;
