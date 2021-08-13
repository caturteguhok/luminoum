import React from "react";
import { HeaderMenu, Layout } from "../../components";
import { BgWhiteStyle } from "../faq/faq.styles";
import HistoryContainer from "./partials/history";
import OfficeContainer from "./partials/office";
import VisiMisiContainer from "./partials/visionMission";
import SlideshowPartial from "./partials/slideshow";

const AboutContainer = () => {
 return (
  <>
   <Layout>
    <HeaderMenu headerAbsolute />
    <SlideshowPartial />
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
