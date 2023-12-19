import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import TrmericCard from "../Card/TrmericCard";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function AccordionCard() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold1 = -100;
      const scrollThreshold2 = 200;
      const scrollThreshold3 = 350;
      if (window.scrollY > scrollThreshold3) {
        setExpanded("panel3");
      } else if (window.scrollY > scrollThreshold2) {
        setExpanded("panel2");
      } else if (window.scrollY > scrollThreshold1) {
        setExpanded("panel1");
      } else {
        setExpanded(false);
      }
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="mt-200 w-900">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{marginTop:'200px'}}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography sx={{ fontWeight: "bold" }}>
             Provider Summary
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{display:'flex',flexDirection:'row', gap:'40px'}}>
          <TrmericCard />  <TrmericCard />  <TrmericCard />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        sx={{marginTop:'300px',marginBottom:'300px'}}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography sx={{ fontWeight: "bold" }}>
            Collapsible Group Item #2
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography sx={{display:'flex',flexDirection:'row', gap:'40px'}}>
          <TrmericCard />  <TrmericCard />  <TrmericCard />
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        sx={{marginTop:'300px',marginBottom:'300px'}}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography sx={{ fontWeight: "bold" }}>
            Collapsible Group Item #3
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography sx={{display:'flex',flexDirection:'row', gap:'40px'}}>
          <TrmericCard />  <TrmericCard />  <TrmericCard />
          </Typography>
        </AccordionDetails>
      </Accordion> 
    </div>
  );
}
