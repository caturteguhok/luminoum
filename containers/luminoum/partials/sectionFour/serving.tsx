import { Container } from "@material-ui/core";
import React from "react";
import {
 ServingItemStyled,
 TitleLuminoumStyled,
 WhyStyled,
} from "../../luminoum.styles";

const ServingPartial = () => {
 return (
  <WhyStyled>
   <Container maxWidth="lg">
    <TitleLuminoumStyled>
     <div>SARAN PENYAJIAN</div>
    </TitleLuminoumStyled>
    <ServingItemStyled>
     <div>
      <img src="https://luminoum.com/dev/images/img-serving-1.png" alt="" />
      <p>1. Tuangkan 1 sachet ke dalam gelas dan tambahkan 150ml air dingin</p>
     </div>
     <div>
      <img src="https://luminoum.com/dev/images/img-serving-2.png" alt="" />
      <p>2. Aduk hingga rata</p>
     </div>
     <div>
      <img src="https://luminoum.com/dev/images/img-serving-3.png" alt="" />
      <p>3. Segera minum</p>
     </div>
    </ServingItemStyled>
   </Container>
  </WhyStyled>
 );
};

export default ServingPartial;
