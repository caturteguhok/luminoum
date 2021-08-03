import { Button, Container } from "@material-ui/core";
import React from "react";
import { AboutDescStyled, ProductSectionStyled } from "../home.styles";

const AboutPartial = () => {
 return (
  <ProductSectionStyled>
   <Container maxWidth="lg">
    <AboutDescStyled>
     <img src="https://luminoum.com/dev/images/ali-logo.png" alt="" />
     <p>
      PT. Anugrah Luminoum Indonesia is contribute in healthy products in likes
      of dietary supplements industry. Operate in the Capital of INDONESIA,
      Jakarta & spread horizontally throughout the archipelago, NUSANTARA.
     </p>
     <Button variant="contained">About Us</Button>
    </AboutDescStyled>
   </Container>
  </ProductSectionStyled>
 );
};

export default AboutPartial;
