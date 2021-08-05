import React from "react";
import {
 Accordion,
 AccordionSummary,
 AccordionDetails,
 Container,
 Typography,
 Button,
} from "@material-ui/core";
import { RiArrowDownSLine } from "react-icons/ri";
import { CircleImgStyled, OrderNowStyled } from "../faq.styles";

const OrderNowPartial = () => {
 const [expanded, setExpanded] = React.useState<string | false>(
  "panel1a-header"
 );

 const handleChange =
  (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
   setExpanded(newExpanded ? panel : false);
  };

 return (
  <OrderNowStyled>
   <Container maxWidth="lg">
    <div>
     <CircleImgStyled
      style={{
       backgroundImage: "url(https://picsum.photos/id/1002/1920/1080)",
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
