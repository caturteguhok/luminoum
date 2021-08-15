import { Container } from "@material-ui/core";
import React from "react";
import { CollagenStyled } from "../../lumislim.styles";

const CollagenPartial = () => {
 return (
  <CollagenStyled>
   <Container maxWidth="lg">
    <img src="https://luminoum.com/dev/images/collagen-tripeptide.png" alt="" />
    <div>
     <h1>Collagen Tripeptide</h1>
     <p>
      Luminoum Collagen dengan teknologi tripeptide, mengurai senyawa kolagen
      menjadi partikel yang lebih kecil dibanding kolagen pada umum-nya
      (hydrolized collagen), sehingga partikel kolagen ini lebih mudah diserap
      oleh tubuh sehingga manfaatnya dapat lebih maksimal bagi tubuh kita.
     </p>
    </div>
   </Container>
  </CollagenStyled>
 );
};

export default CollagenPartial;
