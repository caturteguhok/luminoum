import { Container } from "@material-ui/core";
import React from "react";
import { OrderNowStyled } from "../../faq/faq.styles";
import { BoxRadiusStyled } from "../about.styles";

const OfficeContainer = () => {
 return (
  <OrderNowStyled>
   <Container maxWidth="lg">
    <div>
     <BoxRadiusStyled
      style={{
       backgroundImage: "url(https://picsum.photos/id/1002/1920/1080)",
      }}
     />
    </div>
    <div>
     <h1>Our Office</h1>
     <p>
      Citra Garden 6, Ruko Circle West Blok i.01B No.16, Kalideres, Jakarta
      Barat. Indonesia 11820
     </p>
    </div>
   </Container>
  </OrderNowStyled>
 );
};

export default OfficeContainer;
