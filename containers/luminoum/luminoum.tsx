import React from "react";
import { HeaderMenu, Layout } from "../../components";
import {
 PageLuminoumStyled,
 SectionOneStyled,
 SectionTwoStyled,
 SectionThreeStyled,
 SectionFourStyled,
 LuminoumBgOneStyled,
} from "./luminoum.styles";
import BannerPartial from "./partials/banner";
import CollagenPartial from "./partials/sectionOne/collagen";
import CompositionPartial from "./partials/sectionOne/composition";
import KnowledgePartial from "./partials/sectionOne/knowledge";
import WhyPartial from "./partials/sectionOne/why";
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
    <SectionThreeStyled></SectionThreeStyled>
    <SectionFourStyled></SectionFourStyled>
   </PageLuminoumStyled>
  </Layout>
 );
};

export default LuminoumContainer;
