import { Container } from "@material-ui/core";
import React from "react";
import {
 CompositionOtherStyled,
 TitleCompositionStyled,
 WhyStyled,
} from "../../lumislim.styles";

const CompositionOtherPartial = () => {
 return (
  <CompositionOtherStyled>
   <WhyStyled>
    <TitleCompositionStyled className="right">
     <div>
      <h3>GREEN COFFEE</h3>
     </div>
    </TitleCompositionStyled>
    <Container maxWidth="lg">
     <img
      src="https://luminoum.com/dev/images/img-lumislim-green-coffee.png"
      alt=""
     />
     <p>
      <p>
       Green coffee bean mempunyai kemampuan untuk menyerap kandungan glukosa
       dalam tubuh Anda dan mengatur metabolisme tubuh. Asam klorogenat yang ada
       pada green coffee bean serta kafein merupakan senyawa utama untuk
       menurunkan berat badan. Tingkat Metabolisme Basar (BMR) pada tubuh akan
       mengalami proses lonjakan yang signifikan, bisa meminimalisir pelepasan
       glukosa berlebih dari hati menuju ke darah.
      </p>
      <p>
       Green coffee bean juga mampu meningkatkan kemampuan membakar lemak dan
       proses penurunan badan menjadi lebih mudah secara bersamaan dan
       berlangsung dengan cepat. Biji kopi ini dapat menjaga kadar nutrisi di
       tubuh Anda.
      </p>
     </p>
    </Container>
   </WhyStyled>
   <WhyStyled>
    <TitleCompositionStyled className="left">
     <div>
      <h3>GARCINIA CAMBOGIA</h3>
     </div>
    </TitleCompositionStyled>
    <Container maxWidth="lg">
     <p>
      Dikenal sebagai asam gelugur buah ini mengandung hydroxycitric acid (HCA)
      yang dapat mengubah kalori menjadi glikogen. Kandungan tersebut diperlukan
      tubuh untuk membangun otot, meningkatkan metabolisme dan menurunkan nafsu
      makan berlebih. Seperti dilansir oleh healthline, garnicia cambogia juga
      mampu menurunkan kadar insulin dan kadar leptin dan mengontrol kadar gula
      darah.
     </p>
     <img
      src="https://luminoum.com/dev/images/img-lumislim-garcinia.png"
      alt=""
     />
    </Container>
   </WhyStyled>
   <WhyStyled>
    <TitleCompositionStyled className="right">
     <div>
      <h3>PROBIOTIK DAN PREBIOTIK</h3>
     </div>
    </TitleCompositionStyled>
    <Container maxWidth="lg">
     <img
      src="https://luminoum.com/dev/images/img-lumislim-probiotik.png"
      alt=""
     />
     <p>
      Keduanya sangat bermanfaat untuk system pencernaan khususnya usus.
      Probiotik adalah bakteri baik sedangkan prebiotik adalah asupan makanan
      (serat tinggi) untuk menunjang pertumbuhan bakteri baik tersebut.
     </p>
    </Container>
   </WhyStyled>
   <WhyStyled>
    <TitleCompositionStyled className="left">
     <div>
      <h3>VITAMIN C</h3>
     </div>
    </TitleCompositionStyled>
    <Container maxWidth="lg">
     <p>
      Berperan penting dalam penyerapan zat besi dari makanan dan membantu
      system kekebalan tubuh bekerja dengan baik untuk melindungi tubuh dari
      berbagai penyakit serta membantu proses penyembuhan luka.
     </p>
     <img src="https://luminoum.com/dev/images/img-lumislim-vit-c.png" alt="" />
    </Container>
   </WhyStyled>
   <WhyStyled>
    <TitleCompositionStyled className="right">
     <div>
      <h3>RED BEET</h3>
     </div>
    </TitleCompositionStyled>
    <Container maxWidth="lg">
     <img
      src="https://luminoum.com/dev/images/img-lumislim-red-beet.png"
      alt=""
     />
     <p>
      Buah bit yang mengandung serat dan antioksidan terlihat memiliki efek baik
      bagi saluran pencernaan. Kandungan nutrisi ini membuat buah bit dapat
      membantu kelancaran proses pencernaan. Beberapa penelitian menyatakan
      bahwa manfaat buah bit adalah juga untuk mencegah kerusakan dinding
      saluran cerna karena proses peradangan, konstipasi, dan kanker usus besar.
     </p>
    </Container>
   </WhyStyled>
   <WhyStyled>
    <TitleCompositionStyled className="left">
     <div>
      <h3>GRAPE SEED</h3>
     </div>
    </TitleCompositionStyled>
    <Container maxWidth="lg">
     <p>
      Antioksidan yang tersimpan dalam biji anggur meliputi asam fenol,
      antosianin, proantosianidin, dan flavonoid. Sehingga Grapeseed dapat
      digunakan sebagai antioksidan untuk menangkal radikal bebas, membantu
      menambah daya tahan tubuh, serta memelihara kesehatan tubuh.
     </p>
     <img
      src="https://luminoum.com/dev/images/img-lumislim-grape-seed.png"
      alt=""
     />
    </Container>
   </WhyStyled>
  </CompositionOtherStyled>
 );
};

export default CompositionOtherPartial;
