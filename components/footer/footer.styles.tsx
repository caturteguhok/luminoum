import styled from "@emotion/styled";
import Color from "../../assets/color";

export const FooterStyled = styled.div({
 paddingTop: 50,
 paddingBottom: 50,
 backgroundColor: "#E4E1DD",
 boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
 "& > div": {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
  "& > div": {
   img: {
    maxWidth: 200,
    "& + p": {
     maxWidth: 240,
     color: Color.font.pencil,
     lineHeight: 1.5,
    },
   },
   "& > ul": {
    li: {
     textAlign: "right",
     a: {
      fontSize: 18,
      textTransform: "uppercase",
      fontWeight: 500,
      color: Color.slate[700],
     },
     "& + li": {
      marginTop: 8,
     },
    },
   },
  },
 },
});

export const CopyrightStyled = styled.div({
 backgroundColor: "#BABABA",
 boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
 textAlign: "center",
 padding: "32px 8px",
 color: "#696969",
 fontSize: 14,
});

export const SosmedIconStyled = styled.div({
 marginTop: 16,
 ul: {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  li: {
   svg: {
    fill: Color.slate[700],
   },
   "& + li": {
    marginLeft: 16,
   },
  },
 },
});
