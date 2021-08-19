import {
 Button,
 ClickAwayListener,
 Grow,
 Link,
 MenuItem,
 MenuList,
 Paper,
 Popper,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";

const MasterMenuPartial = () => {
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

 // Responsive Breakpoint
 const breakpoint = 767.98;
 const [width, setWidth] = useState(breakpoint);

 //  useEffect(() => {
 //   if (typeof window !== "undefined") {
 //    window.addEventListener("resize", () => setWidth(window.innerWidth));
 //   }
 //  }, []);

 useEffect(() => {
  const handleWindowResize = () => setWidth(window.innerWidth);
  window.addEventListener("resize", handleWindowResize);

  // Return a function from the effect that removes the event listener
  return () => window.removeEventListener("resize", handleWindowResize);

  // if (typeof window !== "undefined") {
  //  window.addEventListener("resize", () => setWidth(window.innerWidth));
  // }
  // return () => dispatch(resetListCarAction());
 }, []);

 const masterMenu = (
  <div>
   <Link href="/">
    <Button>Home</Button>
   </Link>
   {width < breakpoint ? (
    <ul>
     <li>
      Product
      <ul>
       <li>
        <Link href="/luminoum">
         <img src="https://luminoum.com/dev/images/logo-luminoum.png" alt="" />
        </Link>
       </li>
       <li>
        <Link href="/lumislim">
         <img src="https://luminoum.com/dev/images/logo-lumislim.png" alt="" />
        </Link>
       </li>
      </ul>
     </li>
    </ul>
   ) : (
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
   )}
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
 );

 return <>{masterMenu}</>;
};

export default MasterMenuPartial;
