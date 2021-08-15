import { Card, Container, Link } from "@material-ui/core";
import React from "react";
import { ProductItemSection, ProductSectionStyled } from "../home.styles";

const ProductPartial = () => {
 return (
  <ProductSectionStyled>
   <Container maxWidth="lg">
    <h1>Products</h1>
    <ProductItemSection>
     <div>
      <Link href="/luminoum">
       <img
        src="https://luminoum.com/dev/images/img-product-luminoum.jpg"
        alt=""
       />
       <p className="logo-luminoum">
        <img src="https://luminoum.com/dev/images/logo-luminoum.png" alt="" />
       </p>
      </Link>
     </div>
     <div>
      <Link href="/lumislim">
       <img
        src="https://luminoum.com/dev/images/img-product-lumislim.jpg"
        alt=""
       />
       <p>
        <img src="https://luminoum.com/dev/images/logo-lumislim.png" alt="" />
       </p>
      </Link>
     </div>
    </ProductItemSection>
   </Container>
  </ProductSectionStyled>
 );
};

export default ProductPartial;
