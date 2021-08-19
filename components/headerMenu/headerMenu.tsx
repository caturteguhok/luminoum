import {
 Button,
 ClickAwayListener,
 Container,
 Grow,
 Link,
 MenuItem,
 MenuList,
 Paper,
 Popper,
} from "@material-ui/core";
import React from "react";
import { HeaderMenuBlockStyled, HeaderMenuStyled } from "./headerMenu.styles";

export interface IProps {
 headerAbsolute?: boolean;
 headerBlock?: boolean;
}

const HomePage: React.FC<IProps> = ({ headerAbsolute, headerBlock }) => {
 const [open, setOpen] = React.useState(false);
 const anchorRef = React.useRef(null);

 const handleToggle = () => {
  setOpen((prevOpen) => !prevOpen);
 };
 const handleClose = (event) => {
  if (anchorRef.current && anchorRef.current.contains(event.target)) {
   return;
  }

  setOpen(false);
 };

 const menuItem = (
  <Container maxWidth="lg">
   <Link href="/">
    <img src="https://luminoum.com/dev/images/logo.svg" alt="" />
   </Link>
   <div>
    <Link href="/">
     <Button>Home</Button>
    </Link>
    <div>
     <Button
      ref={anchorRef}
      aria-controls={open ? "menu-list-grow" : undefined}
      aria-haspopup="true"
      onClick={handleToggle}
     >
      Product
     </Button>
     <Popper
      open={open}
      anchorEl={anchorRef.current}
      role={undefined}
      transition
      disablePortal
     >
      {({ TransitionProps, placement }) => (
       <Grow
        {...TransitionProps}
        style={{
         transformOrigin:
          placement === "bottom" ? "center top" : "center bottom",
        }}
       >
        <Paper>
         <ClickAwayListener onClickAway={handleClose}>
          <MenuList autoFocusItem={open} id="menu-list-grow">
           <MenuItem onClick={handleClose}>
            <Link href="/luminoum">LUMINOUM</Link>
           </MenuItem>
           <MenuItem onClick={handleClose}>
            <Link href="/lumislim">LUMISLIM</Link>
           </MenuItem>
          </MenuList>
         </ClickAwayListener>
        </Paper>
       </Grow>
      )}
     </Popper>
    </div>
    <Link href="/about">
     <Button>About</Button>
    </Link>
    <Link href="/contact">
     <Button>Contact</Button>
    </Link>
    <Link href="/faq">
     <Button>FAQ</Button>
    </Link>
   </div>
  </Container>
 );

 return (
  <>
   {headerAbsolute && (
    <HeaderMenuStyled>
     <HeaderMenuBlockStyled>{menuItem}</HeaderMenuBlockStyled>
    </HeaderMenuStyled>
   )}
   {headerBlock && <HeaderMenuBlockStyled>{menuItem}</HeaderMenuBlockStyled>}
  </>
 );
};

export default HomePage;
