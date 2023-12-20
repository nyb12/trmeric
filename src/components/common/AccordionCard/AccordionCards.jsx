import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import TrmericCard from "../Card/TrmericCard";
import TrText from "../TrText/TrText";
import '../../../../src/index.css';
import Fonts from '../../../constants/Fonts';
import { FontSizes } from "../../../constants/Sizes";
//import {Colors} from "../../../constants/Colors";


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
  borderTop:`8px solid #FF8A00`,
  borderRadius:"20px",
  marginBottom:"32px"
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
      const scrollThreshold2 = 250;
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
    <div>
      <div className="mt-150"></div>
      <Accordion className="w-90"
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <div className="display-column ml-8">
            <div className="lh-24 mb-8"><TrText sx={{
                    fontSize: FontSizes.fontEighteen,
                    fontFamily: Fonts.Poppins,
                    fontWeight: '600',
                  
                  }}>
             Provider Summary
          </TrText></div>
          <div> <TrText sx={{
                    fontSize: FontSizes.fontFourteen,
                    fontFamily: Fonts.Poppins,
                    fontWeight: '400',
                  }}
           title="A brief introduction to the providers background, emphasizing their unique expertise"></TrText></div>

          </div>
          
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{display:'flex',flexDirection:'row', justifyContent:"flex-start"}}>
          <TrmericCard />  <TrmericCard />  <TrmericCard />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="w-90"
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        sx={{}}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
        <div className="display-column ml-8">
            <div className="lh-24 mb-8"><TrText sx={{
                    fontSize: FontSizes.fontEighteen,
                    fontFamily: Fonts.Poppins,
                    fontWeight: '600',
                  
                  }}>
             Evaluation
          </TrText></div>
          <div> <TrText sx={{
                    fontSize: FontSizes.fontFourteen,
                    fontFamily: Fonts.Poppins,
                    fontWeight: '400',
                  }}
           title="Compare and Assess Providers"></TrText></div>

          </div>
        </AccordionSummary>
        <AccordionDetails>
        <Typography sx={{display:'flex',flexDirection:'row', gap:'40px'}}>
        hi
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion className="w-90"
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        sx={{}}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
        <div className="display-column ml-8">
            <div className="lh-24 mb-8"><TrText sx={{
                    fontSize: FontSizes.fontEighteen,
                    fontFamily: Fonts.Poppins,
                    fontWeight: '600',
                  
                  }}>
             Milestones
          </TrText></div>
          <div> <TrText sx={{
                    fontSize: FontSizes.fontFourteen,
                    fontFamily: Fonts.Poppins,
                    fontWeight: '400',
                  }}
           title="Customize and Track Engagement Stages"></TrText></div>

          </div>
        </AccordionSummary>
        <AccordionDetails>
        <Typography sx={{display:'flex',flexDirection:'row', gap:'40px'}}>
          hi
          </Typography>
        </AccordionDetails>
      </Accordion> 
    </div>
  );
}
