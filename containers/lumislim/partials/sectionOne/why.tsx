import { Container } from "@material-ui/core";
import React from "react";
import {
 TitleLuminoumStyled,
 WhyItemStyled,
 WhyStyled,
} from "../../lumislim.styles";

const WhyPartial = () => {
 return (
  <WhyStyled>
   <Container maxWidth="lg">
    <TitleLuminoumStyled>
     <div>Mengapa memilih Luminoum Collagen?</div>
    </TitleLuminoumStyled>
    <WhyItemStyled>
     <div>
      <img src="https://luminoum.com/dev/images/img-why-1.png" alt="" />
      <strong>Collagen for a better version of you</strong>
      <p>
       <strong>Luminoum Collagen dengan teknologi tripeptide</strong>, mengurai
       senyawa kolagen menjadi partikel yang lebih kecil dibanding kolagen pada
       umum-nya (hydrolized collagen), sehingga partikel kolagen ini{" "}
       <strong>lebih mudah diserap oleh tubuh</strong> sehingga manfaatnya dapat
       lebih maksimal berdampak bagi tubuh kita.
      </p>
     </div>
     <div>
      <img src="https://luminoum.com/dev/images/img-why-2.png" alt="" />
      <strong>Best Ingredients</strong>
      <p>
       Luminoum untuk hal ini sangat serius dalam memilih dan meracik bahan baku
       yang terbaik dan pas untuk dikonsumsi dan bermanfaat bagi tubuh manusia.
       Kandungan Luminoum Collagen diantaranya adalah Collagen Tripeptide,
       L-Glutathione grade A, Vitamin C, Vitamin B kompleks, Vitamin E, Vitamin
       D3, Red Beet powder, Grapeseed, dan Zinc yang diproses menggunakan
       teknologi dari Jepang.
      </p>
     </div>
     <div>
      <img src="https://luminoum.com/dev/images/img-why-3.png" alt="" />
      <strong>Luminoum Certifications</strong>
      <p>
       <strong>Luminoum telah memenuhi standard BPOM, GMP dan Hallal</strong>,
       sertifikat-sertifikat tersebut untuk memastikan bahwa produk Luminoum
       Collagen layak dan aman untuk dikonsumsi.
      </p>
     </div>
    </WhyItemStyled>
   </Container>
  </WhyStyled>
 );
};

export default WhyPartial;
