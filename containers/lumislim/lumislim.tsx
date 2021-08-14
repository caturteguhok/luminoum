import React from "react";
import { HeaderMenu, Layout } from "../../components";
import { PageHomeStyled } from "./lumislim.styles";

const LumislimContainer = () => {
 return (
  <>
   <Layout>
    <PageHomeStyled>
     <HeaderMenu headerAbsolute />
    </PageHomeStyled>
   </Layout>
  </>
 );
};

export default LumislimContainer;
