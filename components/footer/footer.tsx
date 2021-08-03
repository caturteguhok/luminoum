import { Container, Link } from "@material-ui/core";
import React from "react";
import {
 CopyrightStyled,
 FooterStyled,
 SosmedIconStyled,
} from "./footer.styles";
import {
 RiFacebookFill,
 RiWhatsappLine,
 RiInstagramLine,
 RiSendPlaneLine,
} from "react-icons/ri";

const FooterComponent = () => {
 return (
  <>
   <FooterStyled>
    <Container maxWidth="lg">
     <div>
      <img src="https://luminoum.com/dev/images/ali-logo.png" alt="" />
      <p>
       Citra Garden 6, Ruko Circle West Blok i.01B No. 16, Kalideres, Jakarta
       Barat. Indonesia 11820
      </p>
     </div>
     <div>
      <ul>
       <li>
        <a href="#">Home</a>
       </li>
       <li>
        <a href="#">Product</a>
       </li>
       <li>
        <a href="#">About</a>
       </li>
       <li>
        <a href="#">Contact</a>
       </li>
       <li>
        <a href="#">FAQ</a>
       </li>
      </ul>
      <SosmedIconStyled>
       <ul>
        <li>
         <Link href="https://instagram.com">
          <RiInstagramLine />
         </Link>
        </li>
        <li>
         <Link href="https://facebook.com">
          <RiFacebookFill />
         </Link>
        </li>
        <li>
         <Link href="https://telegram.com">
          <RiSendPlaneLine />
         </Link>
        </li>
        <li>
         <Link href="https://whatsapp.com">
          <RiWhatsappLine />
         </Link>
        </li>
       </ul>
      </SosmedIconStyled>
     </div>
    </Container>
   </FooterStyled>
   <CopyrightStyled>
    Copyright {new Date().getFullYear()} - Anugrah Luminoum Indonesia
   </CopyrightStyled>
  </>
 );
};

export default FooterComponent;
