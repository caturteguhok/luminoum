import { Button, Container } from "@material-ui/core";
import React from "react";
import { CertificateStyled } from "../home.styles";

const CertificatePartial = () => {
 return (
  <CertificateStyled>
   <Container maxWidth="lg">
    <h1>Certificates</h1>
    <ul>
     <li>
      <div>
       <img src="https://luminoum.com/dev/images/certificate-mui.png" alt="" />
      </div>
      <img src="https://luminoum.com/dev/images/red-check.png" alt="" />
     </li>
     <li>
      <div>
       <img src="https://luminoum.com/dev/images/certificate-gmp.png" alt="" />
      </div>
      <img src="https://luminoum.com/dev/images/red-check.png" alt="" />
     </li>
     <li>
      <div>
       <img src="https://luminoum.com/dev/images/certificate-iso.png" alt="" />
      </div>
      <img src="https://luminoum.com/dev/images/red-check.png" alt="" />
     </li>
     <li>
      <div>
       <img src="https://luminoum.com/dev/images/certificate-hccp.png" alt="" />
      </div>
      <img src="https://luminoum.com/dev/images/red-check.png" alt="" />
     </li>
     <li>
      <div>
       <img src="https://luminoum.com/dev/images/certificate-bpom.png" alt="" />
      </div>
      <img src="https://luminoum.com/dev/images/red-check.png" alt="" />
     </li>
    </ul>
   </Container>
  </CertificateStyled>
 );
};

export default CertificatePartial;
