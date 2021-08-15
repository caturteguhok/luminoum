import { Container } from "@material-ui/core";
import React from "react";
import {
 KnowledgeItemStyled,
 TitleLuminoumStyled,
 WhyItemStyled,
 WhyStyled,
} from "../../lumislim.styles";

const KnowledgePartial = () => {
 return (
  <WhyStyled>
   <Container maxWidth="lg">
    <TitleLuminoumStyled>
     <div>Tahukah kamu?</div>
    </TitleLuminoumStyled>
    <KnowledgeItemStyled>
     <div>
      <p>
       <p>
        Seiring bertambahnya usia, kemampuan produksi kolagen dalam tubuh akan
        berkurang dibanding ketika kita berusia remaja.
       </p>
       <p>
        Banyak faktor yang dapat menyebabkan pengurangan jumlah kolagen alami,
        salah satunya adalah <strong>radikal bebas</strong> seperti udara yang
        tidak bersih yang disebabkan oleh polusi dan asap rokok. Faktor lainnya
        adalah pola makan tidak sehat pada masyarakat modern, dsb.
       </p>
      </p>
      <img src="https://luminoum.com/dev/images/img-knowledge-1.png" alt="" />
     </div>
     <div>
      <img src="https://luminoum.com/dev/images/img-knowledge-2.png" alt="" />
      <p>
       <p>
        Masyarakat di Jepang pada umumnya memiliki kebiasaan mengkonsumsi
        makanan yang banyak mengandung protein berkolagen seperti ikan salmon,
        telur, daging tanpa lemak, kaldu tulang, dan sayuran segar berwarna
        hijau. Sehingga tidak heran mereka memiliki kulit yang sehat, mulus dan
        bercahaya alami tanpa operasi bahkan pada mereka yang telah berusia
        lanjut.
       </p>
       <p>
        Menurut penelitian dari Departemen Dermatologi, Universitas Kiel di
        Germany, suplemen yang mengandung kolagen dengan dosis 2.500 – 5.000mg
        per hari dapat membantu menghambat proses penuaan, mengurangi kerutan
        dan melembabkan kulit lebih baik dibandingan dengan orang yang tidak
        mengkonsumsi suplemen kolagen.
       </p>
      </p>
     </div>
     <p>
      Skincare adalah salah satu cara merawat kulit dari luar. Namun Kolagen
      dapat membantu merawat kulit dari dalam. Rutin mencukupi asupan kolagen
      dari sekarang untuk mencegah penuaan dini, keriput, kulit kusam tidak
      bercahaya dan jerawat.
     </p>
     <p>
      Memahami akan kebutuhan asupan suplemen kolagen di Indonesia, Luminoum
      Collagen hadir di pasar Indonesia. Suplemen yang berbahan utama collagen
      tripeptide dilengkapi dengan L-Glutathione dan vitamin C, E, D3 dan B
      kompleks, serta terdapat zinc di dalam kandungan untuk mendukung imunitas
      tubuh khususnya di masa pandemik saat ini.
     </p>
     <p>
      <strong>Luminoum Collagen dengan teknologi tripeptide</strong>, mengurai
      senyawa kolagen menjadi partikel yang lebih kecil dibanding kolagen pada
      umum-nya, sehingga partikel kolagen ini{" "}
      <strong>lebih mudah diserap oleh tubuh</strong> sehingga manfaatnya dapat
      lebih maksimal bagi tubuh kita.
     </p>
     <img
      src="https://luminoum.com/dev/images/box-sachet-luminoum.png"
      alt=""
      style={{ width: "100%" }}
     />
    </KnowledgeItemStyled>
   </Container>
  </WhyStyled>
 );
};

export default KnowledgePartial;
