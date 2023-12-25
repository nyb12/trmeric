import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import TrmericCard from '../Card/TrmericCard';
import TrText from '../TrText/TrText';
import '../../../../src/index.css';
import Fonts from '../../../constants/Fonts';
import { FontSizes } from '../../../constants/Sizes';
import ResponsiveDrawer from '../../../pages/dashboard/Layout/DashLayout';
//import {Colors} from "../../../constants/Colors";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },

  '&:before': {
    display: 'none',
  },
  borderTop: `8px solid #FF8A00`,
  borderRadius: '20px',
  marginBottom: '32px',
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function AccordionCard() {
  const [expanded, setExpanded] = React.useState('panel1');
  const [currentCardIndex, setCurrentCardIndex] = React.useState(0);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const cards = [
    <TrmericCard key={1} />,
    <TrmericCard key={2} />,
    <TrmericCard key={3} />,
    <TrmericCard key={4} />,
    <TrmericCard key={5} />,

    <TrmericCard key={6} />,

    <TrmericCard key={7} />,
  ];

  const totalCards = cards.length;

  const nextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % totalCards);
  };

  const prevCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? totalCards - 1 : prevIndex - 1
    );
  };

  // React.useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollThreshold1 = -100;
  //     const scrollThreshold2 = 550;
  //     const scrollThreshold3 = 650;
  //     if (window.scrollY > scrollThreshold3) {
  //       setExpanded("panel3");
  //     } else if (window.scrollY > scrollThreshold2) {
  //       setExpanded("panel2");
  //     } else if (window.scrollY > scrollThreshold1) {
  //       setExpanded("panel1");
  //     } else {
  //       setExpanded(false);
  //     }
  //   };

  //   // Add event listener for scroll
  //   window.addEventListener("scroll", handleScroll);

  //   // Remove the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <ResponsiveDrawer>
      <div>
        <div className='mt-150'></div>
        <Accordion
          className='w-90'
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
            <div className='display-column ml-8'>
              <div className='lh-24 mb-8'>
                <TrText
                  sx={{
                    fontSize: FontSizes.fontEighteen,
                    fontFamily: Fonts.Poppins,
                    fontWeight: '600',
                  }}
                >
                  Provider Summary
                </TrText>
              </div>
              <div>
                <TrText
                  sx={{
                    fontSize: FontSizes.fontFourteen,
                    fontFamily: Fonts.Poppins,
                    fontWeight: '400',
                  }}
                  title='A brief introduction to the providers background, emphasizing their unique expertise'
                ></TrText>
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                overflow: 'hidden', // Ensure overflow is hidden to create a carousel effect
              }}
            >
              {cards.map((card, index) => (
                <div
                  key={index}
                  style={{
                    transform: `translateX(${-(currentCardIndex * 100)}%)`,
                    transition: 'transform 0.5s ease-in-out',
                    width: '100%',
                  }}
                >
                  {card}
                </div>
              ))}
            </div>
            <button onClick={prevCard}>Previous</button>
            <button onClick={nextCard}>Next</button>
          </AccordionDetails>
        </Accordion>

        <Accordion
          className='w-90'
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
          sx={{}}
        >
          <AccordionSummary aria-controls='panel2d-content' id='panel2d-header'>
            <div className='display-column ml-8'>
              <div className='lh-24 mb-8'>
                <TrText
                  sx={{
                    fontSize: FontSizes.fontEighteen,
                    fontFamily: Fonts.Poppins,
                    fontWeight: '600',
                  }}
                >
                  Evaluation
                </TrText>
              </div>
              <div>
                {' '}
                <TrText
                  sx={{
                    fontSize: FontSizes.fontFourteen,
                    fontFamily: Fonts.Poppins,
                    fontWeight: '400',
                  }}
                  title='Compare and Assess Providers'
                ></TrText>
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{ display: 'flex', flexDirection: 'row', gap: '40px' }}
            >
              hi
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          className='w-90'
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
          sx={{}}
        >
          <AccordionSummary aria-controls='panel3d-content' id='panel3d-header'>
            <div className='display-column ml-8'>
              <div className='lh-24 mb-8'>
                <TrText
                  sx={{
                    fontSize: FontSizes.fontEighteen,
                    fontFamily: Fonts.Poppins,
                    fontWeight: '600',
                  }}
                >
                  Milestones
                </TrText>
              </div>
              <div>
                {' '}
                <TrText
                  sx={{
                    fontSize: FontSizes.fontFourteen,
                    fontFamily: Fonts.Poppins,
                    fontWeight: '400',
                  }}
                  title='Customize and Track Engagement Stages'
                ></TrText>
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{ display: 'flex', flexDirection: 'row', gap: '40px' }}
            >
              hi
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </ResponsiveDrawer>
  );
}