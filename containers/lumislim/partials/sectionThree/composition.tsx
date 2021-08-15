import { Container } from "@material-ui/core";
import React from "react";
import {
 BenefitItemStyled,
 CompositionItemStyled,
 ImgLogoCollagenStyled,
 ImgLogoCompositionLumislimStyled,
 LuminoumBgThreeStyled,
 TitleLuminoumStyled,
 WhyStyled,
} from "../../lumislim.styles";

const CompositionPartial = () => {
 return (
  <WhyStyled>
   <LuminoumBgThreeStyled>
    <img src="https://luminoum.com/dev/images/img-bg-benefit.svg" alt="" />
   </LuminoumBgThreeStyled>
   <Container maxWidth="lg">
    <h1>Komposisi</h1>
    <ImgLogoCompositionLumislimStyled>
     <img src="https://luminoum.com/dev/images/logo-lumislim.png" alt="" />
    </ImgLogoCompositionLumislimStyled>
    <CompositionItemStyled>
     <div>
      <img
       src="https://luminoum.com/dev/images/img-lumislim-composition.png"
       alt=""
      />
      <div>
       <strong>
        Psyllium
        <br />
        Husk
       </strong>
       <p>
        Psyllium adalah serat yang berasal dari biji tanaman plantago ovata.
        Berfungsi sebagai suplemen serat alami untuk kebutuhan serat harian yang
        manfaatnya sangat membantu mengatasi sembelit atau konstipasi, sehingga
        terjadi proses detoxsifikasi agar usus dalam keadaan sehat karena tidak
        terjadi penumpukan kotoran di dalam usus yang dapat terjadi jika tubuh
        kita kekurangan serat.
       </p>
      </div>
     </div>
    </CompositionItemStyled>
   </Container>
  </WhyStyled>
 );
};

export default CompositionPartial;
