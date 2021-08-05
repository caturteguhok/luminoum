import React from "react";
import { HeaderMenu, Layout } from "../../components";
import { BgWhiteStyle, PageFaqstyled } from "./faq.styles";
import CollapsePartial from "./partials/collapse";
import OrderNowPartial from "./partials/orderNow";

const FaqContainer = () => {
 return (
  <>
   <Layout>
    <HeaderMenu headerBlock />
    <PageFaqstyled>
     <CollapsePartial />
    </PageFaqstyled>
    <BgWhiteStyle>
     <OrderNowPartial />
    </BgWhiteStyle>
   </Layout>
  </>
 );
};

export default FaqContainer;
