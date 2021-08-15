import { Container } from "@material-ui/core";
import React from "react";
import {
 LumislimBgWhyStyled,
 WhyItemStyled,
 WhyStyled,
 QuoteStyled,
} from "../../lumislim.styles";

const WhyPartial = () => {
 return (
  <WhyStyled>
   <LumislimBgWhyStyled>
    <img src="https://luminoum.com/dev/images/img-bg-lumislim-1.svg" alt="" />
   </LumislimBgWhyStyled>
   <Container maxWidth="lg">
    <h1>
     Mengapa memilih{" "}
     <img src="https://luminoum.com/dev/images/logo-lumislim.png" alt="" />{" "}
     Fiber?
    </h1>
    <WhyItemStyled>
     <div>
      <img
       src="https://luminoum.com/dev/images/img-lumislim-why-woman.png"
       alt=""
      />
      <p>
       <p>
        Lumislim dengan teknologi hydrolized, sehingga seluruh kandungan yang
        terdapat dalam Lumislim dapat diserap oleh tubuh secara maksimal. Selain
        dapat memenuhi kebutuhan serat harian, juga membantu detox harian anda,
        karena dengan usus yang bersih, akan terlihat tampilan kulit yang bersih
        alami dari dalam.
       </p>
       <p>
        Selain itu LUMISLIM diformulasikan secara khusus agar komposisi di
        dalamnya dapat memberikan manfaat nyata jika dikonsumsi sesuai takaran
        dan anjuran. Dengan formulasi rendah gula dan rendah kalori, serta dalam
        1 sachet LUMISLIM juga terdapat kandungan green coffee dan garcinia
        cambogia yang dapat membantu proses pembakaran lemak agar dapat mencapai
        berat badan yang ideal.
       </p>
       <p>
        Keunggulan lainnya, Lumislim juga dilengkapi dengan vitamin C, red beet
        dan grapeseed yang sangat tinggi antioksidan untuk memelihara Kesehatan
        dan daya tahan tubuh. Cantik berseri, langsing dan sehat alami dapat
        anda dapatkan dengan mengkonsumsi LUMISLIM Fiber secara rutin.
       </p>
      </p>
     </div>{" "}
    </WhyItemStyled>
   </Container>
   <QuoteStyled>
    <div>
     <strong>“Being healthy starts in your gut”</strong>
    </div>
   </QuoteStyled>
  </WhyStyled>
 );
};

export default WhyPartial;
