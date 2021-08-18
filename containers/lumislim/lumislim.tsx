import React from "react";
import { HeaderMenu, Layout } from "../../components";
import {
 PageLuminoumStyled,
 SectionOneStyled,
 SectionTwoStyled,
 SectionThreeStyled,
 SectionFourStyled,
 LumislimBgOneStyled,
 LumislimBgOneSubOneStyled,
} from "./lumislim.styles";
import BannerPartial from "./partials/banner";
import OrderNowPartial from "./partials/orderNow";
import ServingPartial from "./partials/sectionFour/serving";
import HealthyPartial from "./partials/sectionOne/healthy";
import WhyPartial from "./partials/sectionOne/why";
import CompositionPartial from "./partials/sectionThree/composition";
import CompositionOtherPartial from "./partials/sectionThree/compositionOther";
import BenefitPartial from "./partials/sectionTwo/benefit";

const LuminoumContainer = () => {
 return (
  <Layout>
   <PageLuminoumStyled>
    <HeaderMenu headerAbsolute />
    <BannerPartial />
    <SectionOneStyled>
     <LumislimBgOneStyled>
      <img src="https://luminoum.com/dev/images/img-bg-lumislim-1.svg" alt="" />
     </LumislimBgOneStyled>
     <LumislimBgOneSubOneStyled>
      <img src="https://luminoum.com/dev/images/img-bg-lumislim-2.svg" alt="" />
     </LumislimBgOneSubOneStyled>
     <HealthyPartial />
     <WhyPartial />
    </SectionOneStyled>
    <SectionTwoStyled>
     <BenefitPartial />
    </SectionTwoStyled>
    <SectionThreeStyled>
     <CompositionPartial />
     <CompositionOtherPartial />
    </SectionThreeStyled>
    <SectionFourStyled>
     <ServingPartial />
    </SectionFourStyled>
    <OrderNowPartial />
   </PageLuminoumStyled>
  </Layout>
 );
};

export default LuminoumContainer;
