//package Import
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuIcon from '@mui/icons-material/Menu';
import { InputLabel, Step, StepLabel, Stepper } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Multitab from '../MultiTabs/Multitabs';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

//component Import
import AccordionCard from '../AccordionCard/AccordionCards';
import Modal from '../Modal/modal';
import Page from './Page';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',

  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

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
    screenY: true,
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
  const navigate = useNavigate();

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

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [isCollapse, setIsCollapse] = React.useState(false);
  const { t } = useTranslation();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleCollapse = () => {
    setIsCollapse(!isCollapse);
  };

  return (
    <Box sx={{ display: 'flex', mt: 18, ml: 5 }}>
      <CssBaseline />
      {/* <Drawer variant='permanent' open={open}>
        <DrawerHeader style={{ marginTop: '120px' }}>
          {open === false ? (
            <IconButton
              color='inherit'
              aria-label='open drawer'
              onClick={handleDrawerOpen}
              edge='start'
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          )}
        </DrawerHeader>
        <Divider />

        <Stepper
          orientation='vertical'
          activeStep={activeStep}
          sx={{ position: 'sticky', ml: 2, mt: 2 }}
        >
          {[...Array(3).keys()].map((index) => (
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
          ) : (
            ''
          )}
        </div>
      </Drawer> */}

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <Box>
            <Button variant='outlined' size='small' startIcon={<AddIcon />}>
              Add my own provider
            </Button>
          </Box>
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Lizard
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Box
        component='main'
        sx={{ flexGrow: 1, p: 2, marginLeft: '200px', marginRight: '200px' }}
      >
        <DrawerHeader />
        <Typography paragraph></Typography>
        <Paper
          elevation={1}
          sx={{
            background: '#ff',
            marginLeft: '1%',
            padding: '4%',
            width: '90%',
          }}
        >
          <Typography paragraph>{getStepContent(0)}</Typography>
          <AccordionCard />
          <Typography sx={{ mt: '50px' }} paragraph></Typography>
          <Box>
            <Modal />
          </Box>
          <Box>
            <Multitab />
          </Box>
          <br />
          <Box>
            <Button
              variant='contained'
              onClick={() => {
                navigate('/design');
              }}
            >
              Desgin System
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Sidenav;
