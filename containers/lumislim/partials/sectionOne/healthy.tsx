import { Container } from "@material-ui/core";
import React from "react";

import { CircleImgStyled, HealthyStyled } from "../../lumislim.styles";

const HealthyPartial = () => {
 return (
  <HealthyStyled>
   <Container maxWidth="lg">
    <h1>
     Healthy life begins with Lumislim Fiber drink with <span>Raspberry</span>{" "}
     flavour
    </h1>
    <div className="box">
     <img src="https://luminoum.com/dev/images/img-lumislim-box.png" alt="" />
     <p>
      <p>
       Mengkonsumsi serat dengan takaran kebutuhan yang tepat dapat memberikan
       manfaat Kesehatan bagi tubuh, terutama pada masyarakat modern sekarang
       ini dengan segala latar belakang, demografi dan social.
      </p>
      <p>
       Pada kenyataannya, pola hidup tidak sehat banyak diterapkan oleh
       masyarakat modern yang serba cepat, praktis dan instant, contohnya
       seperti mengkonsumsi makanan cepat saji dan makanan dalam kemasan.
       Kebutuhan serat alami tentu saja tidak dapat didapatkan dari makanan
       cepat saji dan makanan dalam kemasan. Tidak heran keluhan masyarakat
       modern tidak jauh dari masalah pencernaan seperti konstipasi salah
       satunya.
      </p>
     </p>
    </div>
    <div>
     <p>
      <p>
       Mengetahui sangat kurangnya pemenuhan serat harian oleh masyarakat modern
       sekarang ini, oleh sebab itu LUMISLIM hadir untuk memenuhi kebutuhan
       tersebut yang tentunya sangat krusial diperlukan oleh tubuh manusia.
      </p>
      <p>
       Mengkonsumsi LUMISLIM akan memberikan rasa penuh atau kenyang lebih lama
       sehingga dapat mengurangi asupan makanan, tentunya hal ini akan sangat
       membantu anda dalam mengatur pola diet harian anda, terutama untuk anda
       yang sedang dalam proses menurunkan berat badan.
      </p>
     </p>
     <div>
      <CircleImgStyled
       style={{
        backgroundImage:
         "url(https://luminoum.com/dev/images/img-lumislim-vege.jpg)",
       }}
      />
     </div>
    </div>
    <div>
     <div>
      <CircleImgStyled
       style={{
        backgroundImage:
         "url(https://luminoum.com/dev/images/img-lumislim-husk.jpg)",
       }}
      />
     </div>
     <p>
      <p>
       Selain itu, kandungan Psyllium husk (suplemen serat alami) dalam LUMISLIM
       dapat membantu meningkatkan ekskresi (pengeluaran) lemak dan kolestrol di
       feses saat buang air besar sehingga dapat membantu menurunkan kolestrol.
      </p>
      <p>
       Psyllium husk juga dilaporkan mampu mengendalikan response glikemik tubuh
       terhadap makanan seperti dengan mengendalikan hormon insulin dan kadar
       gula darah. Dengan terkendalinya kolestrol serta gula darah, maka
       kesehatan jantung anda dapat terjaga dengan baik.
      </p>
     </p>
    </div>
   </Container>
  </HealthyStyled>
 );
};

export default HealthyPartial;
