import Color from "../../assets/color";
import styled from "@emotion/styled";

export const DashboardStyled = styled.div({
 backgroundColor: "red",
 ".ant-card + .ant-card": {
  marginTop: 0,
 },
 "& > div": {
  "& + div": {
   marginTop: 16,
  },
 },
});

export const DashboardBlockStyled = styled.div({
 display: "grid",
 gridTemplateColumns: "repeat(4, 1fr)",
 gridGap: 16,
 ".ant-card-body": {
  padding: 0,
 },
});

export const DashboardChartStyled = styled.div({
 //  display: "grid",
 //  gridTemplateColumns: "1fr 1fr",
 //  gridGap: 16,
 display: "flex",
 "& > div": {
  flex: "0 0 50%",
  maxWidth: "calc(50% - 8px)",
  "& + div": {
   marginLeft: 16,
  },
 },
});

export const CardTotalStyled = styled.div({
 display: "flex",
 alignItems: "center",
 "& > div": {
  padding: 24,
  display: "flex",
  alignItems: "center",

  "&.primary": {
   backgroundColor: Color.primary.hover,
  },
  "&.danger": {
   backgroundColor: Color.danger.hover,
  },
  "&.secondary": {
   backgroundColor: Color.secondary.hover,
  },
  "&.approval": {
   backgroundColor: Color.approval.hover,
  },
  svg: {
   color: Color.white,
   fontSize: 40,
  },
 },
 "& > p": {
  marginLeft: 16,
  lineHeight: 1.3,
  span: {
   fontSize: 24,
   fontWeight: 500,
  },
  p: {
   fontWeight: 300,
  },
 },
 p: {
  marginBottom: 0,
 },
});

export default DashboardStyled;
