import Color from "../../assets/color";
import styled from "@emotion/styled";

export const PageHomeStyled = styled.div({
 backgroundColor: Color.slate[100],
 overflow: "hidden",
 position: "relative",
});

export const ProductSectionStyled = styled.div({
 backgroundColor: Color.light,
 paddingTop: 100,
 paddingBottom: 100,
 "& > div": {
  h1: {
   marginTop: 0,
   marginBottom: 80,
   textTransform: "uppercase",
   textAlign: "center",
  },
 },
});

export const SliderStyled = styled.div({
 img: {
  width: "100%",
 },
 ".slick-prev": {
  left: 80,
 },
 ".slick-next": {
  right: 80,
 },
 ".slick-prev, .slick-next": {
  zIndex: 10,
  color: Color.light,
  width: 70,
  height: 70,
 },
 ".slick-dots": {
  bottom: 60,
  li: {
   "button:before": {
    color: Color.light,
    opacity: 0.7,
    fontSize: 12,
   },
   "&.slick-active": {
    "button:before": {
     color: Color.font.ink,
     opacity: 1,
    },
   },
  },
 },
});

export const ProductItemSection = styled.div({
 display: "grid",
 gridTemplateColumns: "repeat(2, 1fr)",
 gap: 100,
 "& > div": {
  minHeight: 300,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: Color.slate[100],
 },
});

export const AboutDescStyled = styled.div({
 maxWidth: 400,
 img: {
  width: 300,
 },
 p: {
  marginTop: 24,
  marginBottom: 24,
 },
});

export const CertificateStyled = styled.div({
 ul: {
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gap: 40,
  listStyle: "none",
  padding: 0,
  margin: 0,
  li: {
   display: "flex",
   justifyContent: "center",
   alignItems: "center",
   div: {
    backgroundColor: Color.light,
    borderRadius: "50%",
    padding: 16,
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    img: {
     maxWidth: 180,
    },
   },
  },
 },
});
