import { Container } from "@material-ui/core";
import React from "react";
import {
 BenefitItemStyled,
 ImgLogoCollagenStyled,
 TitleLuminoumStyled,
 WhyStyled,
} from "../../lumislim.styles";

const BenefitPartial = () => {
 return (
  <WhyStyled>
   <Container maxWidth="lg">
    <TitleLuminoumStyled>
     <div>MANFAAT</div>
    </TitleLuminoumStyled>
    <ImgLogoCollagenStyled>
     <img src="https://luminoum.com/dev/images/logo-luminoum.png" alt="" />
     <img
      src="https://luminoum.com/dev/images/text-collagen-tripeptide.png"
      alt=""
     />
    </ImgLogoCollagenStyled>
    <BenefitItemStyled>
     <div>
      <div>
       <strong>Sendi, Tulang & Pemulihan</strong>
       <ul>
        <li>Memelihara kesehatan dan fleksibilitas Sendi</li>
        <li>Mengurangi resiko pemburukan Sendi</li>
        <li>Memperkuat Ligamen dan Tulang Rawan</li>
        <li>Mengurangi rasa sakit akibat pemburukan Sendi</li>
        <li>Membantu proses pemulihan cidera</li>
        <li>Memelihara kesehatan tulang</li>
       </ul>
      </div>
      <img src="https://luminoum.com/dev/images/img-benefit-1.jpg" alt="" />
     </div>
     <div>
      <img src="https://luminoum.com/dev/images/img-benefit-2.jpg" alt="" />
      <div>
       <strong>Kulit & Rambut</strong>
       <ul>
        <li>Menghidrasi dan melembabkan kulit</li>
        <li>Memelihara dan mengembalikan elastisitas kulit</li>
        <li>Membantu meratakan skintone</li>
        <li>Mencerahkan dan membuat kulit bersinar</li>
        <li>Menutrisi dan menguatkan helai rambut</li>
        <li>Mencegah rambut kering dan bercabang</li>
       </ul>
      </div>
     </div>
     <div>
      <div>
       <strong>Lainnya</strong>
       <ul>
        <li>Memelihara dan memperkuat imun tubuh</li>
        <li>Membantu melindungi tubuh terhadap radikal bebas</li>
        <li>Memelihara kesehatan pencernaan</li>
        <li>Rendah kalori dengan pemanis alami Stevia</li>
       </ul>
      </div>
      <img src="https://luminoum.com/dev/images/img-benefit-3.jpg" alt="" />
     </div>
    </BenefitItemStyled>
   </Container>
  </WhyStyled>
 );
};

export default BenefitPartial;
