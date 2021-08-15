import { Container } from "@material-ui/core";
import React from "react";
import {
 RoleCollagenItemStyled,
 TitleLuminoumStyled,
 WhyItemStyled,
 WhyStyled,
} from "../../lumislim.styles";

const RoleCollagenPartial = () => {
 return (
  <WhyStyled>
   <Container maxWidth="lg">
    <TitleLuminoumStyled>
     <div>PERAN KOLAGEN DALAM TUBUH KITA</div>
    </TitleLuminoumStyled>
    <RoleCollagenItemStyled>
     <div>
      <img src="https://luminoum.com/dev/images/img-woman-run.png" alt="" />
      <div>
       <p>
        <strong>Kolagen</strong> adalah salah satu protein yang menyusun tubuh
        manusia. Keberadaannya adalah kurang lebih mencapai 30% dari seluruh
        protein yang terdapat dalam tubuh. Dia adalah struktur organik pembangun
        tulang, gigi, sendi, otot, dan kulit.
       </p>
       <p>
        Seiring bertambahnya usia, produksi kolagen dalam tubuh kita akan
        berkurang dan tanda-tanda penuaan akan mulai terlihat saat usia 30 tahun
        ke atas.
       </p>
      </div>
     </div>
    </RoleCollagenItemStyled>
   </Container>
  </WhyStyled>
 );
};

export default RoleCollagenPartial;
