import { Container } from "@material-ui/core";
import React from "react";
import {
 CompositionItemStyled,
 ServingItemStyled,
 TitleLuminoumStyled,
 WhyStyled,
} from "../../lumislim.styles";

const ServingPartial = () => {
 return (
  <WhyStyled>
   <Container maxWidth="lg">
    <h1>
     Saran Penyajian{" "}
     <img src="https://luminoum.com/dev/images/logo-lumislim.png" alt="" />{" "}
     Fiber
    </h1>
    <CompositionItemStyled>
     <div>
      <img
       src="https://luminoum.com/dev/images/img-lumislim-serving.jpg"
       alt=""
       style={{ borderRadius: 60 }}
      />
      <div>
       <p>
        Lumislim Fiber dengan kemasan praktis, dapat dibawa kemana pun anda
        berpergian, bahkan pada saat anda sedang travel sekalipun.
       </p>
       <p>
        Penyajiannya sangat mudah, cukup sediakan 1 gelas air (150ml) dengan
        suhu ruangan, dan tuangkan LUMISLIM Fiber ke dalam-nya, lalu aduk hingga
        rata dan segera minum.
       </p>
       <p>
        Bisa juga disajikan dingin, sediakan 1 botol shaker, masukan es batu
        secukupnya dan air (150ml), tuangkan LUMISLIM Fiber ke dalam-nya, tutup
        botol shaker dan kocok hingga rata dan segera minum.
       </p>
      </div>
     </div>
    </CompositionItemStyled>
   </Container>
  </WhyStyled>
 );
};

export default ServingPartial;
