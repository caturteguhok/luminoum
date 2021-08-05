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
        <Link href="/">Home</Link>
       </li>
       <li>
        <Link href="/product">Product</Link>
       </li>
       <li>
        <Link href="/about">About</Link>
       </li>
       <li>
        <Link href="/contact">Contact</Link>
       </li>
       <li>
        <Link href="/faq">FAQ</Link>
       </li>
      </ul>
      <SosmedIconStyled>
       <ul>
        <li>
         <Link href="https://instagram.com">
          <RiInstagramLine size={28} />
         </Link>
        </li>
        <li>
         <Link href="https://facebook.com">
          <RiFacebookFill size={28} />
         </Link>
        </li>
        <li>
         <Link href="https://telegram.com">
          <RiSendPlaneLine size={28} />
         </Link>
        </li>
        <li>
         <Link href="https://whatsapp.com">
          <RiWhatsappLine size={28} />
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
