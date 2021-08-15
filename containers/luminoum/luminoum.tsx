import React from "react";
import { HeaderMenu, Layout } from "../../components";
import {
 PageLuminoumStyled,
 SectionOneStyled,
 SectionTwoStyled,
 SectionThreeStyled,
 SectionFourStyled,
 LuminoumBgOneStyled,
 LuminoumBgThreeStyled,
} from "./luminoum.styles";
import BannerPartial from "./partials/banner";
import OrderNowPartial from "./partials/orderNow";
import ServingPartial from "./partials/sectionFour/serving";
import TimingPartial from "./partials/sectionFour/timing";
import CollagenPartial from "./partials/sectionOne/collagen";
import CompositionPartial from "./partials/sectionOne/composition";
import KnowledgePartial from "./partials/sectionOne/knowledge";
import WhyPartial from "./partials/sectionOne/why";
import BenefitPartial from "./partials/sectionThree/benefit";
import RoleCollagenPartial from "./partials/sectionTwo/roleCollagen";
import SkinStructurePartial from "./partials/sectionTwo/skinStructure";

const LuminoumContainer = () => {
 return (
  <Layout>
   <PageLuminoumStyled>
    <HeaderMenu headerAbsolute />
    <BannerPartial />
    <SectionOneStyled>
     <LuminoumBgOneStyled>
      <img src="https://luminoum.com/dev/images/luminoum-bg-1.png" alt="" />
     </LuminoumBgOneStyled>
     <CollagenPartial />
     <WhyPartial />
     <CompositionPartial />
     <KnowledgePartial />
    </SectionOneStyled>
    <SectionTwoStyled>
     <RoleCollagenPartial />
     <SkinStructurePartial />
    </SectionTwoStyled>
    <SectionThreeStyled>
     <BenefitPartial />
     <LuminoumBgThreeStyled>
      <img src="https://luminoum.com/dev/images/img-bg-benefit.svg" alt="" />
     </LuminoumBgThreeStyled>
    </SectionThreeStyled>
    <SectionFourStyled>
     <TimingPartial />
     <ServingPartial />
    </SectionFourStyled>
    <OrderNowPartial />
   </PageLuminoumStyled>
  </Layout>
 );
};

export default LuminoumContainer;
