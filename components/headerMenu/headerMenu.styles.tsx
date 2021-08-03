import styled from "@emotion/styled";

export const HeaderMenuStyled = styled.div({
 paddingTop: 50,
 paddingBottom: 50,
 position: "absolute",
 top: 0,
 left: 0,
 width: "100%",
 zIndex: 1,
 "& > div": {
  display: "flex",
  justifyContent: "space-between",
  "& > img": {
   width: 50,
  },
  "& > div": {
   display: "flex",
   alignItems: "center",
  },
 },
});
