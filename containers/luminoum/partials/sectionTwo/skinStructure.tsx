import { Container } from "@material-ui/core";
import React from "react";
import {
 QuoteStyled,
 SkinItemStyled,
 TitleLuminoumStyled,
 WhyStyled,
} from "../../luminoum.styles";
import { ImQuotesLeft } from "react-icons/im";

const SkinStructurePartial = () => {
 return (
  <WhyStyled>
   <Container maxWidth="lg">
    <TitleLuminoumStyled>
     <h3>Struktur Kulit</h3>
    </TitleLuminoumStyled>
    <img
     src="https://luminoum.com/dev/images/img-struktur-kulit.png"
     alt=""
     style={{ width: "100%" }}
    />
    <SkinItemStyled>
     <ul>
      <li>
       <strong>Kulit</strong>
       <p>
        Tanda yang paling jelas terlihat adalah pada kulit karena kurang nya
        kolagen akan menyebabkan kulit terdehidrasi, garis halus dan kerut akan
        jelas terlihat
       </p>
      </li>
      <li>
       <strong>Tulang</strong>
       <p>
        Dengan menurunnya kolagen dan mineral pada tubuh, maka tulang kita akan
        menjadi lemah dan rapuh.
       </p>
      </li>
      <li>
       <strong>Sendi</strong>
       <p>
        Kekurangan kolagen akan menyebabkan ketidaknyamanan di persendian,
        menyebabkan kesulitan saat kita beraktifitas seiring bertambahnya usia.
       </p>
      </li>
      <li>
       <strong>Otot</strong>
       <p>
        Berkurangnya kolagen seiring pertambahan usia juga mengurangi kekuatan
        dan fungsi otot, yang mempengaruhi keseimbangan dan mobilitas.
       </p>
      </li>
     </ul>
    </SkinItemStyled>
   </Container>
   <QuoteStyled>
    <div>
     <ImQuotesLeft size={60} color="#CECECE" />
     <strong>KOLAGEN DALAM TUBUH KITA</strong>
     <p>
      Kolagen ialah protein utama yang saling terpadu didalam jaringan ikat;
      guna menjaga elastisitas & kekuatan kulit hingga tulang, serta tulang
      rawan pada tubuh manusia
     </p>
    </div>
   </QuoteStyled>
  </WhyStyled>
 );
};

export default SkinStructurePartial;
