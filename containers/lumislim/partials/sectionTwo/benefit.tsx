import { Container } from "@material-ui/core";
import React from "react";
import {
 BenefitItemStyled,
 CircleImgStyled,
 RoleCollagenItemStyled,
 TitleLuminoumStyled,
 WhyItemStyled,
 WhyStyled,
} from "../../lumislim.styles";
import { FaCheck } from "react-icons/fa";

const BenefitPartial = () => {
 return (
  <WhyStyled>
   <Container maxWidth="lg">
    <h1>
     Keunggulan{" "}
     <img src="https://luminoum.com/dev/images/logo-lumislim.png" alt="" />{" "}
     Fiber Drink?
    </h1>
    <BenefitItemStyled>
     <div>
      <CircleImgStyled
       style={{
        backgroundImage:
         "url(https://luminoum.com/dev/images/img-lumislim-superior-1.jpg)",
       }}
      />
      <div>
       <ul>
        <li>
         <span>
          Rendah gula <FaCheck />
         </span>
        </li>
        <li>
         <span>
          Rendah kalori <FaCheck />
         </span>
        </li>
        <li>
         <span>
          Memenuhi kebutuhan serat alami <FaCheck />
         </span>
        </li>
        <li>
         <span>
          Detox harian <FaCheck />
         </span>
        </li>
        <li>
         <span>
          Probiotik dan prebiotik menjaga Kesehatan usus <FaCheck />
         </span>
        </li>
       </ul>
      </div>
     </div>
     <div>
      <div>
       <ul>
        <li>
         <span>
          Mengandung green coffee dan garcinia cambogia yang sangat bermanfaat
          membakar lemak dan menurunkan berat badan <FaCheck />
         </span>
        </li>
        <li>
         <span>
          Aman tanpa efek samping <FaCheck />
         </span>
        </li>
        <li>
         <span>
          Vitamin C <FaCheck />
         </span>
        </li>
        <li>
         <span>
          Grapeseed extract sebagai antioksidan <FaCheck />
         </span>
        </li>
       </ul>
      </div>
      <CircleImgStyled
       style={{
        backgroundImage:
         "url(https://luminoum.com/dev/images/img-lumislim-superior-2.jpg)",
       }}
      />
     </div>
    </BenefitItemStyled>
   </Container>
  </WhyStyled>
 );
};

export default BenefitPartial;
