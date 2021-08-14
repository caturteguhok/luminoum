import React from "react";
import { BannerStyled, ProductTitleStyled } from "../luminoum.styles";

const BannerPartial = () => {
 return (
  <BannerStyled>
   <img src="https://luminoum.com/dev/images/banner-luminoum.jpg" alt="" />
   <ProductTitleStyled>
    <img src="https://luminoum.com/dev/images/logo-luminoum.png" alt="" />
   </ProductTitleStyled>
  </BannerStyled>
 );
};

export default BannerPartial;
