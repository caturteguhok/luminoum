import Color from "../../assets/color";
import styled from "@emotion/styled";

export const PageLuminoumStyled = styled.div({
 backgroundColor: Color.light,
 overflow: "hidden",
 position: "relative",
});

export const BannerStyled = styled.div({
 position: "relative",
 "&:before": {
  content: "''",
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(246, 244, 246, 0.24)",
  zIndex: 1,
 },
 "& > img": {
  maxWidth: "100%",
  display: "block",
 },
});

export const ProductTitleStyled = styled.div({
 position: "absolute",
 top: "50%",
 right: 100,
 transform: "translate(-50%,-50%)",
 zIndex: 5,
 img: {
  maxWidth: 300,
 },
});

export const SectionOneStyled = styled.div({
 position: "relative",
 zIndex: 5,
 padding: "100px 24px 0 24px",
});

export const SectionTwoStyled = styled.div({
 position: "relative",
 zIndex: 6,
 padding: "1px 0 100px 0",
 backgroundColor: "#F4FEF8",
});

export const SectionThreeStyled = styled.div({
 position: "relative",
 zIndex: 6,
 backgroundColor: "#FFFFFF",
 padding: "1px 0 0 0",
});

export const SectionFourStyled = styled.div({
 position: "relative",
 backgroundColor: "#F1F9F4",
 padding: "1px 0 120px 0",
 boxShadow: "inset 0px 4px 19px -1px rgba(0, 0, 0, 0.15)",
});

export const HealthyStyled = styled.div({
 position: "relative",
 zIndex: 5,
 h1: {
  color: "#397350",
  textAlign: "center",
  marginBottom: 24,
  display: "block",
  span: {
   color: "#B0254D",
  },
 },
 p: {
  textAlign: "justify",
  color: "#397350",
  maxWidth: 700,
 },
 "& > div": {
  img: {
   maxWidth: 500,
   margin: "0 40px",
  },
  ".box": {
   img: {
    maxWidth: 300,
   },
  },
  "& > div": {
   display: "flex",
   alignItems: "center",
   justifyContent: "center",
   marginTop: 80,
   p: {
    fontSize: 20,
    lineHeight: 1.7,
   },
  },
 },
});

export const LumislimBgOneStyled = styled.div({
 position: "absolute",
 top: "2%",
 right: "-40%",
 zIndex: 0,
 img: {
  maxWidth: "80%",
 },
});

export const LumislimBgOneSubOneStyled = styled.div({
 position: "absolute",
 top: "8%",
 left: "-20%",
 zIndex: 0,
 img: {
  maxWidth: "80%",
 },
});

export const LuminoumBgThreeStyled = styled.div({
 position: "absolute",
 bottom: 0,
 left: 0,
 zIndex: 0,
 img: {
  maxWidth: "100%",
 },
});

export const WhyStyled = styled.div({
 position: "relative",
 zIndex: 5,
 marginTop: 100,
 h1: {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#397350",
  marginBottom: 40,
  img: {
   margin: "0 24px",
   maxWidth: 200,
  },
 },
});

export const TitleLuminoumStyled = styled.div({
 display: "flex",
 justifyContent: "center",
 marginTop: 120,
 marginBottom: 80,
 "& > h3": {
  fontSize: 32,
  color: "#540B6D",
 },
 div: {
  backgroundColor: "#FAEFFA",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  display: "inline-block",
  padding: "20px 32px",
  fontSize: 32,
  fontWeight: 700,
  color: "#923196",
 },
});

export const TitleWoBlockStyled = styled.div({
 display: "flex",
 justifyContent: "center",
 marginTop: 120,
 h1: {
  fontSize: 36,
  color: "#923196",
  marginBottom: 20,
 },
});

export const WhyItemStyled = styled.div({
 display: "flex",
 justifyContent: "center",
 marginBottom: 240,
 "& > div": {
  display: "flex",
  alignItems: "center",
  img: {
   maxWidth: 300,
   margin: "0 auto",
   marginRight: 80,
  },
  "& > strong": {
   color: "#761698",
   margin: "32px 16px",
   textAlign: "center",
   fontSize: 20,
  },
  p: {
   textAlign: "justify",
   color: "#397350",
   lineHeight: 1.7,
   fontSize: 20,
   maxWidth: 600,
  },
 },
});

export const CompositionItemStyled = styled.div({
 marginBottom: 100,
 "& > div": {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 36px",
  strong: {
   fontSize: 56,
   fontWeight: 700,
   marginBottom: 16,
   display: "block",
   color: "#397350",
  },
  p: {
   maxWidth: 400,
   color: "#397350",
   fontSize: 18,
   lineHeight: 1.5,
   textAlign: "justify",
  },
 },
 img: {
  maxWidth: 400,
  marginRight: 40,
 },
});

export const KnowledgeItemStyled = styled.div({
 maxWidth: "70%",
 margin: "0 auto",
 fontSize: 18,
 lineHeight: 1.5,
 p: {
  textAlign: "justify",
  color: "#540B6D",
 },
 "& > div": {
  display: "flex",
  alignItems: "center",
  img: {
   maxWidth: "50%",
  },
 },
 "& > img": {
  marginTop: 60,
  marginBottom: 60,
 },
});

export const RoleCollagenItemStyled = styled.div({
 maxWidth: "80%",
 margin: "0 auto",
 "& > div": {
  display: "flex",
  alignItems: "center",
  img: {
   maxWidth: 500,
  },
  "& > div": {
   marginLeft: 32,
   p: {
    textAlign: "justify",
    color: "#540B6D",
    fontSize: 20,
    lineHeight: 1.5,
   },
  },
 },
});

export const SkinItemStyled = styled.div({
 ul: {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: 16,
  marginTop: 80,
  li: {
   color: "#540B6D",
   padding: "24px 48px",
   background:
    "linear-gradient(180deg, rgba(249, 225, 236, 0.6) 0%, rgba(249, 225, 236, 0) 100%)",
   strong: {
    textAlign: "center",
    display: "block",
    fontSize: 24,
   },
   p: {
    fontSize: 20,
    lineHeight: 1.5,
   },
  },
 },
});

export const QuoteStyled = styled.div({
 marginTop: 100,
 position: "relative",
 "&:before": {
  content: "''",
  position: "absolute",
  top: "-14%",
  left: "50%",
  zIndex: -1,
  width: 2000,
  height: 2000,
  transform: "translate(-50%,0)",
  backgroundColor: "#FEF5F9",
  borderTopLeftRadius: "50%",
  borderTopRightRadius: "50%",
 },
 div: {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: 400,
  zIndex: 1,
  strong: {
   color: "#B0254D",
   fontStyle: "italic",
   fontSize: 40,
   marginTop: 16,
   marginBottom: 16,
  },
 },
});

export const ImgLogoCollagenStyled = styled.div({
 display: "flex",
 flexDirection: "column",
 alignItems: "center",
 marginBottom: 80,
 img: {
  maxWidth: 300,
  "& + img": {
   maxWidth: 500,
  },
 },
});

export const BenefitItemStyled = styled.div({
 display: "flex",
 flexDirection: "column",
 alignItems: "center",
 "& > div": {
  display: "flex",
  alignItems: "center",
  color: "#397350",
  "& > div": {
   margin: "0 36px",
   strong: {
    fontSize: 32,
    fontWeight: 700,
    marginBottom: 16,
    display: "block",
   },
   ul: {
    listStyle: "none",
    maxWidth: 600,
    li: {
     listStyle: "none",
     display: "flex",
     alignItems: "flex-start",
     fontSize: 24,
     lineHeight: 1.5,
     "&:before": {
      content: "'·'",
      fontSize: 100,
      lineHeight: "40px",
      position: "relative",
      top: -12,
      left: 0,
      marginRight: 10,
     },
     span: {
      display: "table",
     },
     svg: {
      marginLeft: 16,
      position: "relative",
      top: 2,
     },
     "& + li": {
      marginTop: 16,
     },
    },
   },
  },
  "& + div": {
   marginTop: 80,
  },
 },
 img: {
  maxWidth: 400,
  filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.4))",
 },
});

export const TimingItemStyled = styled.div({
 display: "flex",
 alignItems: "center",
 flexWrap: "wrap",
 fontSize: 24,
 color: "#540B6D",
 div: {
  flex: "0 0 45%",
  maxWidth: "45%",
  textAlign: "center",
  img: {
   maxWidth: "100%",
  },
 },
 p: {
  flex: "0 0 10%",
  maxWidth: "10%",
  textAlign: "center",
  lineHeight: 1.5,
 },
});

export const ServingItemStyled = styled.div({
 display: "grid",
 gridTemplateColumns: "repeat(3, 1fr)",
 gap: 36,
 div: {
  textAlign: "center",
  fontSize: 24,
  color: "#540B6D",
  lineHeight: 1.5,
  img: {
   maxHeight: 240,
  },
 },
});

export const SpacingStyled = styled.div({
 paddingTop: 100,
 paddingBottom: 100,
});

export const CircleImgStyled = styled.div({
 width: 400,
 height: 400,
 borderRadius: "50%",
 backgroundPosition: "center",
 backgroundRepeat: "no-repeat",
 backgroundSize: "cover",
 margin: "0 40px",
});

export const LumislimBgWhyStyled = styled.div({
 position: "absolute",
 top: "6%",
 right: "-44%",
 zIndex: 0,
 img: {
  maxWidth: "75%",
 },
});

export const ImgLogoCompositionLumislimStyled = styled.div({
 display: "flex",
 flexDirection: "column",
 alignItems: "center",
 marginBottom: 80,
 marginTop: -70,
 img: {
  maxWidth: 300,
 },
});

export const TitleCompositionStyled = styled.div({
 marginBottom: 24,
 div: {
  display: "flex",
  justifyContent: "flex-end",
  minWidth: "60%",
  borderBottom: "3px solid #EEC756",
  h3: {
   fontSize: 36,
  },
 },
 "&.right": {
  justifyContent: "flex-end",
  div: {
   justifyContent: "flex-start",
  },
 },
 "&.left": {
  justifyContent: "flex-start",
  div: {
   justifyContent: "flex-end",
  },
 },
});

export const CompositionOtherStyled = styled.div({
 backgroundColor: "#F4F5FE",
 padding: "1px 24px 100px 24px",
 h3: {
  color: "#397350",
  display: "block",
 },
 "& > div": {
  "& > div": {
   display: "flex",
   alignItems: "center",
   img: {
    maxWidth: 400,
    marginRight: 40,
    marginLeft: 40,
   },
   p: {
    color: "#397350",
    lineHeight: 1.5,
    fontSize: 20,
    maxWidth: 600,
    textAlign: "justify",
   },
   "& + div": {
    justifyContent: "center",
   },
  },
 },
});
