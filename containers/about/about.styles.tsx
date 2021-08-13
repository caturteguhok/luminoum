import styled from "@emotion/styled";
import Color from "../../assets/color";

export const BannerStyled = styled.div({
 img: {
  width: "100%",
 },
});

export const VisionStyled = styled.div({
 borderTop: `1px solid ${Color.slate[300]}`,
 borderBottom: `1px solid ${Color.slate[300]}`,
 paddingTop: 100,
 paddingBottom: 100,
 "& > div": {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-around",
  "& > div": {
   flex: "0 0 30%",
   maxWidth: "30%",
   textAlign: "center",
   fontSize: 18,
   lineHeight: 1.5,
  },
 },
});

export const HistoryStyled = styled.div({
 "& > p": {
  fontSize: 18,
  lineHeight: 1.5,
  maxWidth: 600,
  margin: "0 auto",
  textAlign: "center",
  "& + p": {
   marginTop: 24,
  },
 },
});

export const BoxRadiusStyled = styled.div({
 width: 400,
 height: 400,
 borderRadius: 20,
});
