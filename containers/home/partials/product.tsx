import { Card, Container } from "@material-ui/core";
import React from "react";
import { ProductItemSection, ProductSectionStyled } from "../home.styles";

const ProductPartial = () => {
 return (
  <ProductSectionStyled>
   <Container maxWidth="lg">
    <h1>Products</h1>
    <ProductItemSection>
     <div>
      <img
       src="https://luminoum.com/dev/images/img-product-luminoum.jpg"
       alt=""
      />
      <p className="logo-luminoum">
       <img src="https://luminoum.com/dev/images/logo-luminoum.png" alt="" />
      </p>
     </div>
     <div>
      <img
       src="https://luminoum.com/dev/images/img-product-lumislim.jpg"
       alt=""
      />
      <p>
       <img src="https://luminoum.com/dev/images/logo-lumislim.png" alt="" />
      </p>
     </div>
    </ProductItemSection>
   </Container>
  </ProductSectionStyled>
 );
};

export default ProductPartial;
