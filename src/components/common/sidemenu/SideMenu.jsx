import React, { useState, useEffect } from 'react';
import { Stepper, Step, StepLabel } from '@mui/material';
import Page from './Page';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function getSteps() {
  return ['Step 1', 'Step 2', 'Step 3'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Page></Page>;
    case 1:
      return '';
    case 2:
      return '';
    default:
      return 'Unknown step';
  }
}

const styles = {
  container: {
    display: 'flex',
    screenY: true
  },
  stepper: {
    flex: '0 0 200px', // Fixed width for the stepper
  },
  content: {
    flex: 1, // Remaining space for the content
  },
};


const Sidenav = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const newActiveStep = Math.floor(scrollPosition / 150); //20 = window.innerHeight
    setActiveStep(newActiveStep);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={styles.container}>
      <Stepper orientation="vertical" activeStep={activeStep} sx={{ position: 'sticky' }}>
        {[...Array(5).keys()].map((index) => (
          <Step key={index}>
            <StepLabel>{`Step ${index + 1}`}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div style={styles.content}>
        {activeStep === steps.length ? (
          <div>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : ''}
        <Paper elevation={1} sx={{ background: '#ff', marginLeft: '6%', padding: '4%', width: '80%' }}>
          <Typography sx={{ mt: 2, mb: 1 }}>{getStepContent(0)}
            <br />   <br />  <br />   <br />
            {getStepContent(1)}  <br />   <br /> <br />   <br />
            {getStepContent(2)}

          </Typography>

        </Paper>
      </div>
    </div>
  );
};

export default Sidenav;
