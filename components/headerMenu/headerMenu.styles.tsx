import Color from "../../assets/color";
import styled from "@emotion/styled";

export const HeaderMenuStyled = styled.div({
 paddingTop: 50,
 paddingBottom: 50,
 "& > div": {
  display: "flex",
  justifyContent: "space-between",
  "& > div": {
   display: "flex",
   alignItems: "center",
  },
 },
});
