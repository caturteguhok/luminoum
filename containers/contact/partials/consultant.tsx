import React from "react";
import { Container } from "@material-ui/core";
import { CircleImgStyled } from "../../faq/faq.styles";
import { RiWhatsappLine } from "react-icons/ri";
import { ConsultantStyled } from "../contact.styles";

const ConsultantPartial = () => {
 return (
  <ConsultantStyled>
   <h1>OUR CONSULTANT</h1>
   <Container maxWidth="lg">
    <div>
     <CircleImgStyled
      style={{
       backgroundImage:
        "url(https://luminoum.com/dev/images/cyntia-yulyana.jpg)",
      }}
     />
    </div>
    <div>
     <h3>dr. Cyntia Yulyana, Sp.DV</h3>
     <p>Spesialis Kulit dan Kelamin</p>
     <p>
      <a href="https://wa.link/ns8ftc">
       <RiWhatsappLine size={32} />
       <span>0816-774-981</span>
      </a>
     </p>
    </div>
   </Container>
  </ConsultantStyled>
 );
};

export default ConsultantPartial;
