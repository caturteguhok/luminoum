import {
 Button,
 ClickAwayListener,
 Container,
 Grow,
 MenuItem,
 MenuList,
 Paper,
 Popper,
} from "@material-ui/core";
import React from "react";
import { HeaderMenuStyled } from "./headerMenu.styles";

const HomePage = () => {
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

 return (
  <HeaderMenuStyled>
   <Container maxWidth="lg">
    <img src="https://luminoum.com/dev/images/logo.svg" alt="" />
    <div>
     <Button>Home</Button>
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
            <MenuItem onClick={handleClose}>Luminoum</MenuItem>
            <MenuItem onClick={handleClose}>Lumislim</MenuItem>
           </MenuList>
          </ClickAwayListener>
         </Paper>
        </Grow>
       )}
      </Popper>
     </div>
     <Button>About</Button>
     <Button>Contact</Button>
     <Button>FAQ</Button>
    </div>
   </Container>
  </HeaderMenuStyled>
 );
};

export default HomePage;
