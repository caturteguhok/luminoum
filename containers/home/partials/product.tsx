import { Card, Container } from "@material-ui/core";
import React from "react";
import { ProductItemSection, ProductSectionStyled } from "../home.styles";

const ProductPartial = () => {
 return (
  <ProductSectionStyled>
   <Container maxWidth="lg">
    <h1>Products</h1>
    <ProductItemSection>
     <Card>Luminoum</Card>
     <Card>Lumislim</Card>
    </ProductItemSection>
   </Container>
  </ProductSectionStyled>
 );
};

export default ProductPartial;
