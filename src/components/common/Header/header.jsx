import * as React from 'react';

// importing material UI components
import SearchIcon from '@mui/icons-material/Search';
import Settings from '@mui/icons-material/Settings';
import { Avatar, InputLabel, Paper } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { TrmericImage } from '../../../constants/ImageSvgs';
const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff', // Set your desired toolbar background color
    },
  },
  Paper: {
    body: {
      pad: 500,
    },
    button: {
      fontStyle: 'italic',
    },
  },
});

export default function Header() {
  const steps = ['Discover', 'Engage', 'Build', 'Transact'];
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar position='fixed' style={{ zIndex: 2222 }}>
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flex: '1 0 0',
              alignSelf: 'stretch',
             
              padding: '0px 40px',
            }}
          >
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
            >
              {/* <MenuIcon /> */}
            </IconButton>

            <Box
              component='img'
              alt='The house from the offer.'
              src={TrmericImage}
              sx={{
                flex: '0 0 auto',
                order: -1,
                marginRight: '10px',
              }}
            />

            <Box>
              <Box
                display={'flex'}
                flexDirection={'row'}
                justifyContent={'space-evenly'}
              >
                <SearchIcon /> &nbsp;
                <Settings />
                &nbsp;
                <Avatar
                  alt='Travis Howard'
                  src='https://robohash.org/impeditautest.png'
                />
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </>
  );
}
