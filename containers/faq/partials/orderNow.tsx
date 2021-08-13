import React from "react";
import { Container, Button } from "@material-ui/core";
import { CircleImgStyled, OrderNowStyled } from "../faq.styles";

const OrderNowPartial = () => {
 return (
  <OrderNowStyled>
   <Container maxWidth="lg">
    <div>
     <CircleImgStyled
      style={{
       backgroundImage:
        "url(https://via.placeholder.com/400x400.png?text=Circle+Image+Order)",
      }}
     />
    </div>
    <div>
     <h1>Order Now</h1>
     <p>
      PT. Anugrah Luminoum Indonesia is contribute in healthy products in likes
      of dietary supplements industry. Operate in the Capital of INDONESIA,
      Jakarta & spread horizontally throughout the archipelago, NUSANTARA.
     </p>
     <Button variant="contained">About Us</Button>
    </div>
   </Container>
  </OrderNowStyled>
 );
};

export default OrderNowPartial;
