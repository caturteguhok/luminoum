import { Container, Drawer, IconButton, Link } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { DrawerStyled } from "../headerMenu.styles";
import { RiMenu4Fill } from "react-icons/ri";
import MasterMenuPartials from "./masterMenu";

type Anchor = "right";

const MenuItemPartial = () => {
 // Responsive Breakpoint
 const breakpoint = 767.98;
 const [width, setWidth] = useState(breakpoint);

 useEffect(() => {
  if (typeof window !== "undefined") {
   window.addEventListener("resize", () => setWidth(window.innerWidth));
  }
 }, []);

 // Drawer
 const [state, setState] = useState({
  right: false,
 });

 const toggleDrawer =
  (anchor: Anchor, open: boolean) =>
  (event: React.KeyboardEvent | React.MouseEvent) => {
   if (
    event.type === "keydown" &&
    ((event as React.KeyboardEvent).key === "Tab" ||
     (event as React.KeyboardEvent).key === "Shift")
   ) {
    return;
   }

   setState({ ...state, [anchor]: open });
  };

 const menuItem = (
  <Container maxWidth="lg">
   <Link href="/">
    <img
     src="https://luminoum.com/dev/images/logo.svg"
     className="logo"
     alt=""
    />
   </Link>
   {width < breakpoint ? (
    <>
     <div>
      <IconButton onClick={toggleDrawer("right", true)} size="medium">
       <RiMenu4Fill size={24} />
      </IconButton>
     </div>
     <Drawer
      anchor={"right"}
      open={state["right"]}
      onClose={toggleDrawer("right", false)}
     >
      <DrawerStyled>
       <MasterMenuPartials />
      </DrawerStyled>
     </Drawer>
    </>
   ) : (
    <MasterMenuPartials />
   )}
  </Container>
 );

 return <>{menuItem}</>;
};

export default MenuItemPartial;
