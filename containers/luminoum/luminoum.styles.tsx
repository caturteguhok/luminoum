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
  background: "rgba(254, 234, 255, 0.51)",
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
 padding: "100px 24px",
 background:
  "linear-gradient(180deg, #F7E5F8 0%, rgba(249, 235, 249, 0.640625) 79.17%, rgba(252, 247, 252, 0) 100%)",
});

export const SectionTwoStyled = styled.div({
 position: "relative",
 padding: "1px 0 0 0",
 background:
  "linear-gradient(180deg, rgba(249, 225, 236, 0.6) 0%, rgba(252, 240, 240, 0) 100%)",
});

export const SectionThreeStyled = styled.div({
 backgroundColor: "#F9E1EC",
});

export const SectionFourStyled = styled.div({
 backgroundColor: "#FDE5FE",
});

export const CollagenStyled = styled.div({
 position: "relative",
 zIndex: 5,
 "& > div": {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  img: {
   maxWidth: 500,
  },
  "& > div": {
   maxWidth: 500,
   h1: {
    color: "#923196",
    textAlign: "left",
    marginBottom: 24,
   },
   p: {
    color: "#851689",
    fontSize: 18,
    lineHeight: 1.7,
   },
  },
 },
});

export const LuminoumBgOneStyled = styled.div({
 position: "absolute",
 top: "20%",
 right: -30,
 zIndex: 0,
 img: {
  maxWidth: "100%",
 },
});

export const WhyStyled = styled.div({
 position: "relative",
 zIndex: 5,
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

export const WhyItemStyled = styled.div({
 display: "grid",
 gridTemplateColumns: "repeat(3, 1fr)",
 gap: 60,
 "& > div": {
  display: "flex",
  flexDirection: "column",
  img: {
   maxWidth: 240,
   margin: "0 auto",
  },
  "& > strong": {
   color: "#761698",
   margin: "32px 16px",
   textAlign: "center",
   fontSize: 20,
  },
  p: {
   textAlign: "justify",
   color: "#540B6D",
   lineHeight: 1.7,
   margin: 0,
  },
 },
});

export const CompositionItemStyled = styled.div({
 ul: {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: 40,
  li: {
   "& > div": {
    backgroundColor: "#F9E1EC99",
    display: "flex",
    alignItems: "center",
    padding: 24,
    minHeight: 290,
    img: {
     width: 160,
     marginRight: 24,
    },
    p: {
     display: "flex",
     flexDirection: "column",
     strong: {
      color: "#761698",
      marginBottom: 16,
     },
     span: {
      color: "#540B6D",
      lineHeight: 1.5,
     },
    },
   },
  },
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
  top: 0,
  left: 0,
  zIndex: 0,
  width: "100%",
  height: 400,
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
   color: "#540B6D",
   fontStyle: "italic",
   fontSize: 24,
   marginTop: 16,
   marginBottom: 16,
  },
  p: {
   fontSize: 20,
   maxWidth: 620,
   lineHeight: 1.5,
   margin: "0 auto",
   color: "#540B6D",
   fontStyle: "italic",
   textAlign: "center",
  },
 },
});
