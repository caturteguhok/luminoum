import { Button, Container } from "@material-ui/core";
import React from "react";
import {
 AboutDescStyled,
 CertificateStyled,
 ProductSectionStyled,
} from "../home.styles";

const CertificatePartial = () => {
 return (
  <ProductSectionStyled>
   <Container maxWidth="lg">
    <CertificateStyled>
     <h1>Certificate</h1>
     <ul>
      <li>
       <div>
        <img src="https://luminoum.com/dev/images/certificate-mui.png" alt="" />
       </div>
      </li>
      <li>
       <div>
        <img src="https://luminoum.com/dev/images/certificate-gmp.png" alt="" />
       </div>
      </li>
      <li>
       <div>
        <img src="https://luminoum.com/dev/images/certificate-iso.png" alt="" />
       </div>
      </li>
      <li>
       <div>
        <img
         src="https://luminoum.com/dev/images/certificate-hccp.png"
         alt=""
        />
       </div>
      </li>
      <li>
       <div>
        <img
         src="https://luminoum.com/dev/images/certificate-bpom.png"
         alt=""
        />
       </div>
      </li>
     </ul>
    </CertificateStyled>
   </Container>
  </ProductSectionStyled>
 );
};

export default CertificatePartial;
