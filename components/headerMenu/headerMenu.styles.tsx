import styled from "@emotion/styled";
import facepaint from "facepaint";

const breakpoints = [991.98, 767.98];

const mq = facepaint(breakpoints.map((bp) => `@media (max-width: ${bp}px)`));

export const HeaderMenuStyled = styled.div(
 mq({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  zIndex: 10,
  ".logo": {
   maxWidth: ["100%", undefined, 60],
  },
 })
);

export const HeaderMenuBlockStyled = styled.div(
 mq({
  paddingTop: [36, 16],
  paddingBottom: [36, 16],
  "& > div": {
   display: "flex",
   justifyContent: "space-between",
   "& > img": {
    width: 50,
   },
   a: {
    textDecoration: "none",
    "&:hover": {
     textDecoration: "none",
    },
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
 })
);

export const DrawerStyled = styled.div(
 mq({
  minWidth: 300,
  "& > div": {
   display: "flex",
   flexDirection: "column",
   "& > div, a": {
    button: {
     width: "100%",
     padding: 16,
     justifyContent: "flex-start",
    },
    "&:hover": {
     textDecoration: "none",
    },
   },
  },
  ul: {
   li: {
    textTransform: "uppercase",
    padding: "0 16px",
    "& > ul": {
     "& > li": {
      marginTop: 16,
     },
    },
    img: {
     maxWidth: 150,
    },
   },
  },
 })
);
