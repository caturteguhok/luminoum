import { Container } from "@material-ui/core";
import React from "react";
import {
 BoxSocMedStyled,
 InstagramStyled,
 ShopeeStyled,
 SocMedStyled,
 TokopediaStyled,
 WhatsappStyled,
} from "../contact.styles";

const HistoryContainer = () => {
 return (
  <Container maxWidth="lg">
   <SocMedStyled>
    <h1>Contact Us</h1>
    <ul>
     <li>
      <BoxSocMedStyled>
       <a href="https://www.tokopedia.com/" target="_blank" rel="noreferrer">
        <TokopediaStyled>
         <img src="https://luminoum.com/dev/images/icon-tokopedia.png" alt="" />
         <span>luminoumofficial</span>
        </TokopediaStyled>
       </a>
      </BoxSocMedStyled>
     </li>
     <li>
      <BoxSocMedStyled>
       <a href="https://www.tokopedia.com/" target="_blank" rel="noreferrer">
        <TokopediaStyled>
         <img src="https://luminoum.com/dev/images/icon-tokopedia.png" alt="" />
         <span>lumislimofficial</span>
        </TokopediaStyled>
       </a>
      </BoxSocMedStyled>
     </li>
     <li>
      <BoxSocMedStyled>
       <a href="https://shopee.co.id/" target="_blank" rel="noreferrer">
        <ShopeeStyled>
         <img src="https://luminoum.com/dev/images/icon-shopee.png" alt="" />
         <span>luminoumofficial</span>
        </ShopeeStyled>
       </a>
      </BoxSocMedStyled>
     </li>
     <li>
      <BoxSocMedStyled>
       <a href="https://shopee.co.id/" target="_blank" rel="noreferrer">
        <ShopeeStyled>
         <img src="https://luminoum.com/dev/images/icon-shopee.png" alt="" />
         <span>lumislimofficial</span>
        </ShopeeStyled>
       </a>
      </BoxSocMedStyled>
     </li>
     <li>
      <BoxSocMedStyled>
       <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
        <InstagramStyled>
         <img src="https://luminoum.com/dev/images/icon-instagram.png" alt="" />
         <span>luminoumofficial</span>
        </InstagramStyled>
       </a>
      </BoxSocMedStyled>
     </li>
     <li>
      <BoxSocMedStyled>
       <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
        <InstagramStyled>
         <img src="https://luminoum.com/dev/images/icon-instagram.png" alt="" />
         <span>lumislimofficial</span>
        </InstagramStyled>
       </a>
      </BoxSocMedStyled>
     </li>
     <li>
      <BoxSocMedStyled>
       <a href="https://www.tokopedia.com/" target="_blank" rel="noreferrer">
        <WhatsappStyled>
         <img src="https://luminoum.com/dev/images/icon-whatsapp.png" alt="" />
         <span>Whatsapp</span>
        </WhatsappStyled>
       </a>
      </BoxSocMedStyled>
     </li>
    </ul>
   </SocMedStyled>
  </Container>
 );
};

export default HistoryContainer;
