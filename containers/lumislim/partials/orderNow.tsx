import React from "react";
import { Container, Button } from "@material-ui/core";
import { OrderNowStyled } from "../../faq/faq.styles";
import { SpacingStyled } from "../lumislim.styles";

const OrderNowPartial = () => {
 return (
  <SpacingStyled>
   <OrderNowStyled>
    <Container maxWidth="lg">
     <div>
      <img
       src="https://luminoum.com/dev/images/img-lumislim-circle-order.jpg"
       alt=""
      />
     </div>
     <div>
      <h1>Dapatkan Produk Lumislim</h1>
      <Button variant="contained">Disini</Button>
     </div>
    </Container>
   </OrderNowStyled>
  </SpacingStyled>
 );
};

export default OrderNowPartial;
