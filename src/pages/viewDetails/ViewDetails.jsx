import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/common/Header/header';

import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import { styled } from '@mui/material/styles';
import SubHeader from '../../components/common/subHeader/subHearder';
import Fonts from '../../constants/Fonts';
import { FontSizes } from '../../constants/Sizes';
import { Divider, Grid, Link } from '@mui/material';
import Colors from '../../constants/Colors';
import { Featured_video } from '../../constants/ImageSvgs';
import demo from '../../assets/Demo.mp4';
import TrText from '../../components/common/TrText/TrText';
import RadarChart from '../../components/common/Charts/TrCharts';
import ResponsiveDrawer from '../dashboard/Layout/DashLayout';

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

export default function ViewDetails() {
  const navigate = useNavigate();
  const [expanded, setExpanded] = React.useState('panel1');
  const financialRef = React.useRef(null);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    if (newExpanded && panel === 'panel4' && financialRef.current) {
      financialRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* <Header /> */}
      <ResponsiveDrawer detailedPage>
        {/* <SubHeader detailedPage /> */}
        <Box className='details-box-main'>
          <Box className='details-box-inner'>
            <Box className='display-row'>
              <a
                href='#'
                style={{
                  color: Colors.black,
                  fontFamily: Fonts.Inter,
                  fontSize: FontSizes.fontFourteen,
                  cursor: 'pointer',
                  fontWeight: expanded === 'panel0' ? '700' : 'normal',
                  textDecoration: 'none',
                  borderBottom:
                    expanded === 'panel0' ? '4px solid #FF8A00' : 'none',
                }}
                onClick={() => setExpanded('panel0')}
              >
                Overview
              </a>
              {[
                "Trmeric's Assessment",
                'Capabilities',
                'Customer Feedback',
                'Financial',
              ].map((label, index) => (
                <a
                  href='#demo'
                  key={index}
                  style={{
                    color: Colors.black,
                    fontFamily: Fonts.Inter,
                    fontSize: FontSizes.fontFourteen,
                    cursor: 'pointer',
                    fontWeight:
                      expanded === `panel${index + 1}` ? '700' : 'normal',
                    textDecoration: 'none',
                    borderBottom:
                      expanded === `panel${index + 1}`
                        ? '4px solid #FF8A00'
                        : 'none',
                  }}
                  onClick={() => setExpanded(`panel${index + 1}`)}
                >
                  {label}
                </a>
              ))}
            </Box>
            <Box
              sx={{ background: Colors.lightBackground, mt: '24px' }}
              className='display-row'
            >
              <Box className='display-data'>
                <TrText
                  sx={{
                    fontSize: FontSizes.fontFourteen,
                    fontFamily: Fonts.Poppins,
                  }}
                  title={
                    'NexaTech, at the forefront of inventory digitization, empowers businesses to harness real-time data benefits. Their dedicated team specializes in transforming traditional stock checks into streamlined digital processes, offering tailored solutions for varied enterprise needs.'
                  }
                />
                <TrText
                  sx={{
                    fontFamily: Fonts.Inter,
                    fontSize: FontSizes.fontFourteen,
                    fontWeight: 'bold',
                    lineHeight: '24px',
                    backgroundColor: Colors.white,
                  }}
                  title={'4/5 Average Customer Feedback '}
                >
                  <Link
                    sx={{ color: Colors.blue, textDecoration: 'underline' }}
                    className='cursor-pointer'
                  >
                    (214 reviews)
                  </Link>
                </TrText>
                <Box className='display-row-space-between' sx={{ gap: '24px' }}>
                  <Box className='dispay-column'>
                    <TrText
                      sx={{
                        fontFamily: Fonts.Inter,
                      }}
                      title={'Experience'}
                    />
                    <TrText
                      sx={{
                        fontFamily: Fonts.Inter,
                        fontWeight: '600',
                      }}
                      title={'10+ Years'}
                    />
                  </Box>
                  <Divider orientation='vertical' className='.ht-100vh' />
                  <Box className='dispay-column'>
                    <TrText
                      sx={{
                        fontFamily: Fonts.Inter,
                      }}
                      title={'Team'}
                    />
                    <TrText
                      sx={{
                        fontFamily: Fonts.Inter,
                        fontWeight: '600',
                      }}
                      title={'150-200'}
                    />
                  </Box>

                  <Divider orientation='vertical' className='.ht-100vh' />
                  <Box className='dispay-column'>
                    <TrText
                      sx={{
                        fontFamily: Fonts.Inter,
                      }}
                      title={'Success Rate'}
                    />
                    <TrText
                      sx={{
                        fontFamily: Fonts.Inter,
                        fontWeight: '600',
                      }}
                      title={'90%'}
                    />
                  </Box>
                </Box>
              </Box>
              <Box className='display-data'>
                <Box item xs={6}>
                  <video className='details-box-video' controls>
                    <source
                      src={'https://trmeric-dev.trmeric.com/Demo.mp4'}
                      type='video/mp4'
                    />
                    <source
                      src={'https://trmeric-dev.trmeric.com/Demo.mp4'}
                      type='video/webm'
                    />
                    <source
                      src={'https://trmeric-dev.trmeric.com/Demo.mp4'}
                      type='video/ogg'
                    />
                    Your browser does not support the video tag.
                  </video>
                </Box>
              </Box>
            </Box>
            <Box sx={{ marginTop: '50px' }}>
              <Accordion
                expanded={expanded === 'panel1'}
                onChange={handleChange('panel1')}
              >
                <AccordionSummary
                  aria-controls='panel1d-content'
                  id='panel1d-header'
                >
                  <TrText
                    sx={{
                      fontSize: FontSizes.fontEighteen,
                      fontFamily: Fonts.Poppins,
                      fontWeight: '600',
                    }}
                    title={'Trmeric’s Assessment'}
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <Box className='outer-box'>
                    <Box className='display-view-details'>
                      <Box className='details-box-accordion'>
                        <TrText
                          sx={{
                            fontSize: FontSizes.fontFourteen,
                            fontFamily: Fonts.Poppins,
                            maxWidth: '95%',
                          }}
                          title={
                            'Expertise Their solutions are tailored to meet the unique challenges faced by businesses transitioning to digital platforms. Client Feedback Their dedication to understanding and addressing specific client needs shines through in feedback. Areas for Improvement Their initial onboarding process can take a bit longer than anticipated. However, this is often offset by the quality of the final deliverable. Why Trmeric Recommends Considering their consistent performance, client-centric methodology, and innovative solutions, NexaTech is an ideal match for those seeking to elevate their inventory management systems.'
                          }
                        />
                      </Box>
                      <Box className='details-box-accordion'>
                        <TrText
                          sx={{ fontWeight: '600' }}
                          title={'Performance Analysis'}
                        />
                        <br />
                        <RadarChart />
                      </Box>
                    </Box>
                  </Box>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === 'panel2'}
                onChange={handleChange('panel2')}
              >
                <AccordionSummary
                  aria-controls='panel2d-content'
                  id='panel2d-header'
                >
                  <Box className='display-column'>
                    <TrText
                      sx={{
                        fontSize: FontSizes.fontEighteen,
                        fontFamily: Fonts.Poppins,
                        fontWeight: '600',
                      }}
                      title={'Capabilities'}
                    />

                    <TrText
                      sx={{
                        fontSize: FontSizes.fontSixteen,
                        fontFamily: Fonts.Poppins,
                        fontWeight: '400',
                      }}
                      title={
                        'This section provides a comprehensive snapshot of our resource commitment and expertise in different domains.'
                      }
                    />
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <TrText
                    sx={{
                      fontSize: FontSizes.fontFourteen,
                      fontFamily: Fonts.Poppins,
                    }}
                    title={
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
                    }
                  />
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === 'panel3'}
                onChange={handleChange('panel3')}
              >
                <AccordionSummary
                  aria-controls='panel3d-content'
                  id='panel3d-header'
                >
                  <Box className='display-column'>
                    <TrText
                      sx={{
                        fontSize: FontSizes.fontEighteen,
                        fontFamily: Fonts.Poppins,
                        fontWeight: '600',
                      }}
                      title={'Customer Feedback'}
                    />
                    <TrText
                      sx={{
                        fontSize: FontSizes.fontSixteen,
                        fontFamily: Fonts.Poppins,
                        fontWeight: '400',
                      }}
                      title={
                        'Get a holistic view of our proficiency with details on technical and domain expertise, showcased experience, and illustrative case studies'
                      }
                    />
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <TrText
                    sx={{
                      fontSize: FontSizes.fontFourteen,
                      fontFamily: Fonts.Poppins,
                    }}
                    title={
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
                    }
                  />
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === 'panel4'}
                onChange={handleChange('panel4')}
                id='demo'
              >
                <AccordionSummary
                  aria-controls='panel4d-content'
                  id='panel4d-header'
                >
                  <Box className='display-column'>
                    <TrText
                      sx={{
                        fontSize: FontSizes.fontEighteen,
                        fontFamily: Fonts.Poppins,
                        fontWeight: '600',
                      }}
                      title={'Financial Information'}
                    />
                    <TrText
                      sx={{
                        fontSize: FontSizes.fontSixteen,
                        fontFamily: Fonts.Poppins,
                        fontWeight: '400',
                      }}
                      title={
                        'Explore our financial health through metrics like revenues,revenue growth rate, and our expanding customer base.'
                      }
                    />
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <TrText
                    sx={{
                      fontSize: FontSizes.fontFourteen,
                      fontFamily: Fonts.Poppins,
                    }}
                    title={
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
                    }
                  />
                </AccordionDetails>
              </Accordion>
            </Box>
          </Box>
        </Box>
      </ResponsiveDrawer>
    </div>
  );
}
