import React from "react";
import {
 Accordion,
 AccordionSummary,
 AccordionDetails,
 Container,
 Typography,
} from "@material-ui/core";
import { RiArrowDownSLine } from "react-icons/ri";

const CollapsePartial = () => {
 const [expanded, setExpanded] = React.useState<string | false>(
  "panel1a-header"
 );

 const handleChange =
  (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
   setExpanded(newExpanded ? panel : false);
  };

 return (
  <Container maxWidth="lg">
   <h1>Frequently Asked Questions</h1>
   <Accordion
    expanded={expanded === "panel1a-header"}
    onChange={handleChange("panel1a-header")}
   >
    <AccordionSummary
     expandIcon={<RiArrowDownSLine />}
     aria-controls="panel1a-content"
     id="panel1a-header"
    >
     <Typography variant="h5">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     </Typography>
    </AccordionSummary>
    <AccordionDetails>
     <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan
      eros diam, quis hendrerit quam scelerisque id. Aenean non placerat sem.
      Suspendisse erat nibh, condimentum at iaculis ac, lacinia quis purus.
      Maecenas eget odio ac elit congue imperdiet. In elementum fermentum nisl
      eu ullamcorper. Nulla facilisi. Proin lobortis orci eu neque semper, ut
      fringilla ex pharetra. Fusce non felis vulputate, ornare tortor in,
      laoreet nunc. Etiam metus odio, laoreet at cursus et, fermentum eget
      nulla.
     </Typography>
    </AccordionDetails>
   </Accordion>
   <Accordion>
    <AccordionSummary
     expandIcon={<RiArrowDownSLine />}
     aria-controls="panel2a-content"
     id="panel2a-header"
    >
     <Typography variant="h5">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     </Typography>
    </AccordionSummary>
    <AccordionDetails>
     <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan
      eros diam, quis hendrerit quam scelerisque id. Aenean non placerat sem.
      Suspendisse erat nibh, condimentum at iaculis ac, lacinia quis purus.
      Maecenas eget odio ac elit congue imperdiet. In elementum fermentum nisl
      eu ullamcorper. Nulla facilisi. Proin lobortis orci eu neque semper, ut
      fringilla ex pharetra. Fusce non felis vulputate, ornare tortor in,
      laoreet nunc. Etiam metus odio, laoreet at cursus et, fermentum eget
     </Typography>
    </AccordionDetails>
   </Accordion>
   <Accordion>
    <AccordionSummary
     expandIcon={<RiArrowDownSLine />}
     aria-controls="panel3a-content"
     id="panel3a-header"
    >
     <Typography variant="h5">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      malesuada lacus ex, sit amet blandit leo lobortis eget. nulla.
     </Typography>
    </AccordionSummary>
    <AccordionDetails>
     <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan
      eros diam, quis hendrerit quam scelerisque id. Aenean non placerat sem.
      Suspendisse erat nibh, condimentum at iaculis ac, lacinia quis purus.
      Maecenas eget odio ac elit congue imperdiet. In elementum fermentum nisl
      eu ullamcorper. Nulla facilisi. Proin lobortis orci eu neque semper, ut
      fringilla ex pharetra. Fusce non felis vulputate, ornare tortor in,
      laoreet nunc. Etiam metus odio, laoreet at cursus et, fermentum eget
     </Typography>
    </AccordionDetails>
   </Accordion>
  </Container>
 );
};

export default CollapsePartial;
