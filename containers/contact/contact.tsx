import React from "react";
import { HeaderMenu, Layout } from "../../components";
import { BgWhiteStyle } from "../faq/faq.styles";
import SocialMediaContainer from "./partials/socialMedia";
import SlideshowPartial from "../home/partials/slideshow";
import { Divider } from "@material-ui/core";
import ConsultantPartial from "./partials/consultant";

const AboutContainer = () => {
 return (
  <>
   <Layout>
    <HeaderMenu headerAbsolute />
    <SlideshowPartial />
    <BgWhiteStyle>
     <SocialMediaContainer />
    </BgWhiteStyle>
    <Divider />
    <BgWhiteStyle>
     <ConsultantPartial />
    </BgWhiteStyle>
   </Layout>
  </>
 );
};

export default AboutContainer;
