import styled from "@emotion/styled";

export const FooterStyled = styled.div({
 paddingTop: 50,
 paddingBottom: 50,
 backgroundColor: "#E4E1DD",
 boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
 img: {
  maxWidth: 200,
 },
 "& > div": {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
 },
});

export const CopyrightStyled = styled.div({
 backgroundColor: "#BABABA",
 boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
 textAlign: "center",
 padding: "24px 8px",
 color: "#696969",
 fontSize: 14,
});

export const SosmedIconStyled = styled.div({
 ul: {
  display: "flex",
  alignItems: "center",
 },
});
