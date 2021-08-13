import React from "react";
import { HeaderMenu, Layout } from "../../components";
import { BgWhiteStyle } from "../faq/faq.styles";
import BannerSection from "./partials/banner";
import HistoryContainer from "./partials/history";
import OfficeContainer from "./partials/office";
import VisiMisiContainer from "./partials/visionMission";

const AboutContainer = () => {
 return (
  <>
   <Layout>
    <HeaderMenu headerBlock />
    <BannerSection />
    <BgWhiteStyle>
     <HistoryContainer />
    </BgWhiteStyle>
    <VisiMisiContainer />
    <BgWhiteStyle>
     <OfficeContainer />
    </BgWhiteStyle>
   </Layout>
  </>
 );
};

export default AboutContainer;
