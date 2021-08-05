import React from "react";
import { HeaderMenu, Layout } from "../../components";
import { PageHomeStyled } from "./home.styles";
import AboutPartial from "./partials/about";
import CertificatePartial from "./partials/certificate";
import ProductPartial from "./partials/product";
import SlideshowPartial from "./partials/slideshow";

const HomeContainer = () => {
 return (
  <>
   <Layout>
    <PageHomeStyled>
     <HeaderMenu headerAbsolute />
     <SlideshowPartial />
     <ProductPartial />
     <CertificatePartial />
     <AboutPartial />
    </PageHomeStyled>
   </Layout>
  </>
 );
};

export default HomeContainer;
