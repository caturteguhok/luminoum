import styled from "@emotion/styled";
import Color from "../../assets/color";

export const SocMedStyled = styled.div({
 ul: {
  display: "flex",
  flexWrap: "wrap",
  li: {
   padding: "24px 16px",
   flex: "0 0 50%",
   maxWidth: "50%",
   "&:last-of-type": {
    flex: "0 0 100%",
    maxWidth: "100%",
   },
  },
 },
});

export const BoxSocMedStyled = styled.div({
 color: Color.light,
 fontWeight: 600,
 fontSize: 24,
 letterSpacing: 1.1,
 a: {
  p: {
   display: "flex",
   alignItems: "center",
   margin: "0 auto",
   img: {
    maxWidth: 60,
    marginRight: 16,
   },
  },
  "&:hover": {
   p: {
    boxShadow: "0px -4px 4px rgba(0, 0, 0, 0.4)",
   },
  },
 },
});

export const TokopediaStyled = styled.p({
 backgroundColor: "#56B24F",
 boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
 borderRadius: 16,
 padding: "24px 32px",
 maxWidth: 400,
 transition: "all 0.5s",
});

export const ShopeeStyled = styled.p({
 backgroundColor: "#FF5722",
 boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
 borderRadius: 16,
 padding: "24px 32px",
 maxWidth: 400,
 transition: "all 0.5s",
});

export const InstagramStyled = styled.p({
 backgroundColor: "#f09433",
 boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
 background:
  "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
 borderRadius: 16,
 padding: "24px 32px",
 maxWidth: 400,
 transition: "all 0.5s",
});

export const WhatsappStyled = styled.p({
 backgroundColor: "#56B24F",
 boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
 borderRadius: 16,
 padding: "24px 32px",
 maxWidth: 400,
 transition: "all 0.5s",
});

export const ConsultantStyled = styled.div({
 display: "flex",
 flexDirection: "column",
 "& > div": {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& > div": {
   "& + div": {
    marginLeft: 40,
    h3: {
     fontSize: 32,
     marginBottom: 16,
     textAlign: "left",
    },
    p: {
     maxWidth: 400,
     lineHeight: 1.5,
     fontSize: 24,
     margin: 0,
     color: Color.font.pencil,
     "& + p": {
      a: {
       display: "flex",
       alignItems: "center",
       span: {
        marginLeft: 8,
        color: Color.font.pencil,
       },
       svg: {
        fill: "#56B24F",
       },
      },
     },
    },
   },
  },
 },
});
