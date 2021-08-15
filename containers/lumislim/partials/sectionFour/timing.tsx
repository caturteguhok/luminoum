import { Container } from "@material-ui/core";
import React from "react";
import {
 BenefitItemStyled,
 ImgLogoCollagenStyled,
 TimingItemStyled,
 TitleWoBlockStyled,
 WhyStyled,
} from "../../lumislim.styles";

const TimingPartial = () => {
 return (
  <WhyStyled>
   <Container maxWidth="lg">
    <TitleWoBlockStyled>
     <h1>WAKTU TERBAIK UNTUK KONSUMSI</h1>
    </TitleWoBlockStyled>
    <ImgLogoCollagenStyled>
     <img src="https://luminoum.com/dev/images/logo-luminoum.png" alt="" />
    </ImgLogoCollagenStyled>
    <TimingItemStyled>
     <div>
      <img src="https://luminoum.com/dev/images/img-timing-1.jpg" alt="" />
     </div>
     <p />
     <div>
      <img src="https://luminoum.com/dev/images/img-timing-2.jpg" alt="" />
     </div>
     <div>
      <span>Pagi hari setelah makan</span>
     </div>
     <p>
      <span>
       dan
       <br />
       atau
      </span>
     </p>
     <div>
      <span>Malam hari sebelum tidur</span>
     </div>
    </TimingItemStyled>
   </Container>
  </WhyStyled>
 );
};

export default TimingPartial;
