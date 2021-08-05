import React from "react";
import { Footer } from "../../components";
import { LayoutStyled } from "./layout.styles";

const LayoutComponent: React.FC = ({ children }) => {
 return (
  <>
   <LayoutStyled>{children}</LayoutStyled>
   <Footer />
  </>
 );
};

export default LayoutComponent;
