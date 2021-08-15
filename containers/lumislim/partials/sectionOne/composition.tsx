import { Container } from "@material-ui/core";
import React from "react";
import {
 CompositionItemStyled,
 TitleLuminoumStyled,
 WhyStyled,
} from "../../lumislim.styles";

const CompositionPartial = () => {
 return (
  <WhyStyled>
   <Container maxWidth="lg">
    <TitleLuminoumStyled>
     <div>Komposisi LUMINOUM</div>
    </TitleLuminoumStyled>
    <CompositionItemStyled>
     <ul>
      <li>
       <div>
        <img
         src="https://luminoum.com/dev/images/composition-glutathione.png"
         alt=""
        />
        <p>
         <strong>L-Glutathione</strong>
         <span>
          Memainkan peranan penting sebagai antioksidan alami dan memberikan
          manfaat detoxifikasi.
         </span>
        </p>
       </div>
      </li>
      <li>
       <div>
        <img
         src="https://luminoum.com/dev/images/composition-vitamin-d3.png"
         alt=""
        />
        <p>
         <strong>Vitamin D3</strong>
         <span>
          Mencegah perburukan kondisi gagal ginjal dan memperbaiki kondisi
          penderita gagal ginjal.
         </span>
        </p>
       </div>
      </li>
      <li>
       <div>
        <img
         src="https://luminoum.com/dev/images/composition-zink.png"
         alt=""
        />
        <p>
         <strong>Zink</strong>
         <span>
          Manfaat Zinc untuk kulit adalah mengobati jerawat, mengurangi
          peradangan, menghambat pertumbuhan bakteri penyebab jerawat, dan
          menekan aktivitas kelenjar minyak.
         </span>
        </p>
       </div>
      </li>
      <li>
       <div>
        <img
         src="https://luminoum.com/dev/images/composition-vitamin-b.png"
         alt=""
        />
        <p>
         <strong>Vitamin B Kompleks</strong>
         <span>
          Stimulus yang mengubah makanan menjadi bahan bakar di dalam tubuh.
          sehingga organ di dalamnya bekerja dengan baik.
         </span>
        </p>
       </div>
      </li>
      <li>
       <div>
        <img
         src="https://luminoum.com/dev/images/composition-vitamin-c.png"
         alt=""
        />
        <p>
         <strong>Vitamin C</strong>
         <span>
          Meningkatkan system kekebalan tubuh bekerja dengan baik untuk
          melindungi tubuh dari berbagai penyakit.
         </span>
        </p>
       </div>
      </li>
      <li>
       <div>
        <img
         src="https://luminoum.com/dev/images/composition-grape.png"
         alt=""
        />
        <p>
         <strong>Grape Seed</strong>
         <span>
          Membantu mencegah timbulnya enzim yang merusak jaringan kolagen dan
          elastin yang berfungsi untuk mengencangkan dan mengenyalkan kulit,
          jaringan, otot, dan pembuluh darah serta dapat membantu kerja vitamin
          E dan C lebih efektif dalam mempertahankan kelembapan kulit.
         </span>
        </p>
       </div>
      </li>
      <li>
       <div>
        <img
         src="https://luminoum.com/dev/images/composition-vitamin-e.png"
         alt=""
        />
        <p>
         <strong>Vitamin E</strong>
         <span>
          Meremajakan kembali kulit yang kusam, keriput, dan mulai kendor.
          Vitamin E terbukti dapat menjaga elastisitas kulit.
         </span>
        </p>
       </div>
      </li>
      <li>
       <div>
        <img
         src="https://luminoum.com/dev/images/composition-red-beet.png"
         alt=""
        />
        <p>
         <strong>Red Beet</strong>
         <span>
          Sifat anti-inflamasi dalam buah bit akan meringankan peradangan
          jerawat dari dalam.
         </span>
        </p>
       </div>
      </li>
     </ul>
    </CompositionItemStyled>
   </Container>
  </WhyStyled>
 );
};

export default CompositionPartial;
