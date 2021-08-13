import styled from "@emotion/styled";

export const HeaderMenuStyled = styled.div({
 position: "absolute",
 top: 0,
 left: 0,
 width: "100%",
 zIndex: 1,
});

export const HeaderMenuBlockStyled = styled.div({
 paddingTop: 36,
 paddingBottom: 36,
 "& > div": {
  display: "flex",
  justifyContent: "space-between",
  "& > img": {
   width: 50,
  },
  "& > div": {
   display: "flex",
   alignItems: "center",
   "& > a": {
    "& + a": {
     marginLeft: 24,
    },
   },
   "& > div": {
    marginLeft: 24,
    marginRight: 24,
   },
  },
 },
 button: {
  fontSize: 16,
 },
 a: {
  textDecoration: "none",
  color: "inherit",
 },
});
