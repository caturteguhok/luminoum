import React from "react";
import { Footer, HeaderMenu } from "../../components";
import { PageHomeStyled } from "./home.styles";
import AboutPartial from "./partials/about";
import CertificatePartial from "./partials/certificate";
import ProductPartial from "./partials/product";
import SlideshowPartial from "./partials/slideshow";

const HomePage = () => {
 return (
  <>
   <PageHomeStyled>
    <HeaderMenu />
    <SlideshowPartial />
    <ProductPartial />
    <CertificatePartial />
    <AboutPartial />
   </PageHomeStyled>
   <Footer />
  </>
 );
};

export default HomePage;
