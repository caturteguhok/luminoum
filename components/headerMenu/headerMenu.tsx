import React from "react";
import { HeaderMenuBlockStyled, HeaderMenuStyled } from "./headerMenu.styles";
import MenuItemPartial from "./partials/menuItem";

export interface IProps {
 headerAbsolute?: boolean;
 headerBlock?: boolean;
}

const HomePage: React.FC<IProps> = ({ headerAbsolute, headerBlock }) => {
 return (
  <>
   {headerAbsolute && (
    <HeaderMenuStyled>
     <HeaderMenuBlockStyled>
      <MenuItemPartial />
     </HeaderMenuBlockStyled>
    </HeaderMenuStyled>
   )}
   {headerBlock && (
    <HeaderMenuBlockStyled>
     <MenuItemPartial />
    </HeaderMenuBlockStyled>
   )}
  </>
 );
};

export default HomePage;
