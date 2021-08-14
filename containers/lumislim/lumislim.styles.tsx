import Color from "../../assets/color";
import styled from "@emotion/styled";

export const PageHomeStyled = styled.div({
 backgroundColor: Color.light,
 overflow: "hidden",
 position: "relative",
});

export const ProductSectionStyled = styled.div({
 backgroundColor: Color.light,
 paddingTop: 100,
 paddingBottom: 100,
 "& > div": {},
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
 position: "absolute",
 left: 0,
 top: 0,
 width: "100%",
 display: "flex",
 alignItems: "center",
 minHeight: 600,

 img: {
  width: 300,
 },
 p: {
  marginTop: 24,
  marginBottom: 24,
  lineHeight: 1.5,
  maxWidth: 360,
 },
 a: {
  textDecoration: "none",
  "&:hover": {
   textDecoration: "none",
  },
 },
 button: {
  width: 200,
  textTransform: "capitalize",
  backgroundColor: "#762300",
  color: Color.light,
  fontSize: 18,
  "&:hover": {
   backgroundColor: "rgba(118,35,0,0.6)",
  },
 },
});

export const CertificateStyled = styled.div({
 background: "#F9F9F9",
 boxShadow: "-1px 4px 4px rgba(0, 0, 0, 0.25)",
 borderRadius: "640px 0 0 640px",
 paddingTop: 140,
 paddingBottom: 140,
 marginTop: 100,
 marginBottom: 0,
 position: "relative",
 zIndex: 1,

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
   flexDirection: "column",
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

export const AboutSectionStyled = styled.div({
 display: "flex",
 justifyContent: "flex-end",
 backgroundColor: Color.light,
 position: "relative",
});

export const ImageBlock = styled.div({
 display: "flex",
 justifyContent: "flex-end",
 minHeight: 600,
 flex: "0 0 50%",
 maxWidth: "50%",
 backgroundPosition: "center",
 backgroundRepeat: "no-repeat",
 backgroundSize: "cover",
});
