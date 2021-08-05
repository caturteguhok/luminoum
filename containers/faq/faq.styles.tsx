import Color from "../../assets/color";
import styled from "@emotion/styled";

export const PageFaqstyled = styled.div({
 backgroundColor: "#FCFBFB",
 paddingTop: 100,
 paddingBottom: 100,
});

export const BgWhiteStyle = styled.div({
 backgroundColor: Color.light,
 paddingTop: 100,
 paddingBottom: 100,
});

export const CircleImgStyled = styled.div({
 width: 400,
 height: 400,
 borderRadius: "50%",
});

export const OrderNowStyled = styled.div({
 "& > div": {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",

  "& > div": {
   "& + div": {
    marginLeft: 40,
    h1: {
     marginBottom: 32,
     textAlign: "left",
    },
    p: {
     maxWidth: 400,
     lineHeight: 1.5,
     "& + button": {
      marginTop: 24,
      width: 200,
      textTransform: "capitalize",
      backgroundColor: "#9E67A0",
      color: Color.light,
      fontSize: 18,
      "&:hover": {
       backgroundColor: "rgba(158,103,160,0.6)",
      },
     },
    },
   },
  },
 },
});
