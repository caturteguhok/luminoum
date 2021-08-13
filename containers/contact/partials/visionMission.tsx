import { Container, Divider } from "@material-ui/core";
import React from "react";
import { VisionStyled } from "../contact.styles";

const VisiMisiContainer = () => {
 return (
  <VisionStyled>
   <Container maxWidth="lg">
    <div>
     <h1>Visi</h1>
     <p>
      To be the 1<sup>st</sup> Rate Healthy Product Solutions For Every
      Societies in Indonesia.
     </p>
    </div>
    <Divider orientation="vertical" flexItem />
    <div>
     <h1>Misi</h1>
     <p>
      Deliver Customers The Most Fascinating Healthy Products That Inspires Real
      Experience
     </p>
    </div>
   </Container>
  </VisionStyled>
 );
};

export default VisiMisiContainer;
