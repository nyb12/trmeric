//package Import
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { FormControl, OutlinedInput } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Multitab from '../MultiTabs/Multitabs';
import * as yup from 'yup';

//component Import
import Colors from '../../../constants/Colors';
import { FontSizes } from '../../../constants/Sizes';
import AccordionCard from '../AccordionCard/AccordionCards';
import Page from './Page';
import ErrorMessage from '../ErrorMessages/ErrorMessage';

const drawerWidth = 240;
const MAX_PHONE_LENGTH = 10;
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  width: '50%',
  maxWidth: '600px',
  padding: '0 !important',
};
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
    flex: '0 0 200px',
  },
  content: {
    flex: 1,
  },
};

const Sidenav = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [isCollapse, setIsCollapse] = React.useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedRecommend, setSelectedRecommend] = useState('');

  const validationSchema = yup.object().shape({
    companyName: yup.string().required('Company Name is required *'),
    companyWebsite: yup.string().required('Company Website is required *'),
    contactName: yup.string().required('Contact Name is required *'),
    email: yup
      .string()
      .email('Invalid email format *')
      .required('Email is required *'),
    phone: yup
      .string()
      .matches(/^[6-9]\d{9}$/, 'Invalid phone number')
      .typeError('Phone must be a number *')
      .required('Phone is required *'),
    description: yup.string().required('Description is required *'),
  });
  const [error, setError] = useState({
    companyName: '',
    companyWebsite: '',
    contactName: '',
    email: '',
    phone: '',
    description: '',
  });

  const handleButtonClick = (event) => {
    setSelectedValue(event);
  };
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleRecButtonClick = (event) => {
    setSelectedRecommend(event);
  };
  const handleRecChange = (event) => {
    setSelectedRecommend(event.target.value);
  };

  const [formData, setFormData] = useState({
    companyName: '',
    companyWebsite: '',
    contactName: '',
    email: '',
    phone: '',
    description: '',
    provider: selectedValue,
    recommend: selectedRecommend,
  });

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      provider: selectedValue,
      recommend: selectedRecommend,
    }));
  }, [selectedValue, selectedRecommend]);

  const handleClear = () => {
    setSelectedValue('');
    setSelectedRecommend('');
    setFormData({
      companyName: '',
      companyWebsite: '',
      contactName: '',
      email: '',
      phone: '',
      description: '',
      provider: '',
      recommend: '',
    });
  };

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

  const validateField = async (name, value) => {
    try {
      await yup.reach(validationSchema, name).validate(value);
      setError((prevErrors) => ({ ...prevErrors, [name]: '' }));
    } catch (error) {
      setError((prevErrors) => ({
        ...prevErrors,
        [name]: error.message || 'Validation error',
      }));
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));
    validateField(field, value);
  };

  const handleSubmit = async () => {
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      console.log('Form Data:', formData);
    } catch (error) {
      if (error.inner) {
        const validationErrors = {};
        error.inner.forEach((validationError) => {
          validationErrors[validationError.path] = validationError.message;
        });
        setError(validationErrors);
      }
    }
  };
  const { t } = useTranslation();

  return (
    <Box sx={{ display: 'flex', mt: 18, ml: 5 }}>
      <CssBaseline />

      <Card sx={{ maxWidth: 345 }}>
        <Box>
          <Button
            variant='outlined'
            size='small'
            onClick={() => {
              setOpen(true);
            }}
            startIcon={<AddIcon />}
          >
            Add my own provider
          </Button>
        </Box>
        <CardContent></CardContent>
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
          {/* <Box>
            <Modal />
          </Box> */}
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
        <Box>
          <Modal
            open={open}
            // onClose={() => {
            //   setOpen(false);
            // }}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
            sx={{ zIndex: '3333', padding: '2 !important' }}
          >
            <Box sx={style}>
              <Box
                sx={{
                  bgcolor: Colors.veryLightGrey,
                  padding: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <Box>
                  <Typography
                    id='modal-title'
                    variant='h6'
                    component='h2'
                    sx={{ fontWeight: 'bold' }}
                  >
                    Add a provider
                  </Typography>
                  <Typography
                    id='modal-sub-title'
                    sx={{
                      fontSize: FontSizes.fontSixteen,
                    }}
                  >
                    Enter the information below to add a provider
                  </Typography>
                </Box>
                <Box>
                  <IconButton
                    edge='end'
                    color='inherit'
                    onClick={() => {
                      setOpen(false);
                      setError({});
                    }}
                    aria-label='close'
                    sx={{ top: 0, right: 10 }}
                  >
                    <CloseIcon />
                  </IconButton>
                </Box>
              </Box>
              <Box sx={{ padding: '20px' }}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: '20px',
                  }}
                >
                  <Typography
                    id='modal-modal-description'
                    sx={{
                      fontSize: FontSizes.fontSixteen,
                    }}
                  >
                    Is this an existing providers for your company ?
                  </Typography>
                  <Box sx={{ ml: '20px' }}>
                    <FormControlLabel
                      value='yes'
                      control={
                        <Radio
                          checked={selectedValue === 'yes'}
                          onChange={handleChange}
                          value='yes'
                          name='radio-buttons'
                          inputProps={{ 'aria-label': 'Yes' }}
                          style={{ display: 'none' }}
                        />
                      }
                      label={
                        <Button
                          variant={
                            selectedValue === 'yes' ? 'contained' : 'outlined'
                          }
                          sx={{
                            color: Colors.black,

                            backgroundImage:
                              selectedValue === 'yes'
                                ? Colors.gradient
                                : Colors.gradientLight,
                          }}
                          onClick={() => handleButtonClick('yes')}
                        >
                          Yes
                        </Button>
                      }
                    />
                    <FormControlLabel
                      value='no'
                      control={
                        <Radio
                          checked={selectedValue === 'no'}
                          onChange={handleChange}
                          value='no'
                          name='radio-buttons'
                          inputProps={{ 'aria-label': 'No' }}
                          style={{ display: 'none' }}
                        />
                      }
                      label={
                        <Button
                          variant={
                            selectedValue === 'no' ? 'contained' : 'outlined'
                          }
                          sx={{
                            color: Colors.black,
                            backgroundImage:
                              selectedValue === 'no'
                                ? Colors.gradient
                                : Colors.gradientLight,
                          }}
                          onClick={() => handleButtonClick('no')}
                        >
                          No
                        </Button>
                      }
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    mt: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                  }}
                >
                  <FormControl>
                    <OutlinedInput
                      id='my-input'
                      required
                      aria-describedby='my-helper-text'
                      placeholder='Company Name'
                      sx={{
                        borderRadius: '15px',
                        width: '100%',
                      }}
                      value={formData.companyName}
                      onChange={(e) =>
                        handleInputChange('companyName', e.target.value)
                      }
                      onBlur={() =>
                        validateField('companyName', formData.companyName)
                      }
                    />
                    <ErrorMessage error={error?.companyName} />
                  </FormControl>

                  <OutlinedInput
                    id='my-input'
                    aria-describedby='my-helper-text'
                    placeholder='Company Website'
                    sx={{
                      borderRadius: '15px',
                      width: '100%',
                    }}
                    value={formData.companyWebsite}
                    onChange={(e) =>
                      handleInputChange('companyWebsite', e.target.value)
                    }
                    onBlur={() =>
                      validateField('companyWebsite', formData.companyWebsite)
                    }
                  />
                  <ErrorMessage error={error?.companyWebsite} />
                  <FormControl>
                    <OutlinedInput
                      id='my-input'
                      aria-describedby='my-helper-text'
                      placeholder='Contact Name'
                      sx={{
                        borderRadius: '15px',
                        width: '100%',
                      }}
                      value={formData.contactName}
                      onChange={(e) =>
                        handleInputChange('contactName', e.target.value)
                      }
                      onBlur={() =>
                        validateField('contactName', formData.contactName)
                      }
                    />
                    <ErrorMessage error={error?.contactName} />
                  </FormControl>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}
                  >
                    <FormControl>
                      <OutlinedInput
                        id='my-input'
                        aria-describedby='my-helper-text'
                        placeholder='Email'
                        sx={{
                          borderRadius: '15px',
                          width: '100%',
                        }}
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange('email', e.target.value)
                        }
                        onBlur={() => validateField('email', formData.email)}
                      />
                      <ErrorMessage error={error?.email} />
                    </FormControl>
                    <FormControl>
                      <OutlinedInput
                        id='my-input'
                        aria-describedby='my-helper-text'
                        placeholder='Phone'
                        sx={{
                          borderRadius: '15px',
                          width: '100%',
                        }}
                        value={formData.phone}
                        type='number'
                        inputProps={{ maxLength: MAX_PHONE_LENGTH }}
                        onChange={(e) => {
                          const value = e.target.value.slice(
                            0,
                            MAX_PHONE_LENGTH
                          );
                          handleInputChange('phone', value);
                        }}
                        onBlur={() => validateField('phone', formData.phone)}
                      />
                      <ErrorMessage error={error?.phone} />
                    </FormControl>
                  </Box>
                  <FormControl>
                    <OutlinedInput
                      id='my-input'
                      aria-describedby='my-helper-text'
                      placeholder='Please describe the reason for including this provider on this mission.'
                      sx={{
                        borderRadius: '15px',
                        width: '100%',
                      }}
                      value={formData.description}
                      onChange={(e) =>
                        handleInputChange('description', e.target.value)
                      }
                      onBlur={() =>
                        validateField('description', formData.description)
                      }
                    />
                    <ErrorMessage error={error?.description} />
                  </FormControl>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: '20px',
                  }}
                >
                  <Typography
                    id='modal-modal-description'
                    sx={{
                      fontSize: FontSizes.fontSixteen,
                    }}
                  >
                    Would you recommend this Provider into Trmeric community?
                  </Typography>
                  <Box
                    sx={{ ml: '20px', display: 'flex', flexDirection: 'row' }}
                  >
                    <FormControlLabel
                      value='yes'
                      control={
                        <Radio
                          checked={selectedRecommend === 'yes'}
                          onChange={handleRecChange}
                          value='yes'
                          name='radio-buttons'
                          inputProps={{ 'aria-label': 'Yes' }}
                          style={{ display: 'none' }}
                        />
                      }
                      label={
                        <Button
                          variant={
                            selectedRecommend === 'yes'
                              ? 'contained'
                              : 'outlined'
                          }
                          sx={{
                            color: Colors.black,
                            backgroundImage:
                              selectedRecommend === 'yes'
                                ? Colors.gradient
                                : Colors.gradientLight,
                          }}
                          onClick={() => handleRecButtonClick('yes')}
                        >
                          Yes
                        </Button>
                      }
                    />
                    <FormControlLabel
                      value='no'
                      control={
                        <Radio
                          checked={selectedRecommend === 'no'}
                          onChange={handleRecChange}
                          value='no'
                          name='radio-buttons'
                          inputProps={{ 'aria-label': 'No' }}
                          style={{ display: 'none' }}
                        />
                      }
                      label={
                        <Button
                          variant={
                            selectedRecommend === 'no'
                              ? 'contained'
                              : 'outlined'
                          }
                          sx={{
                            color: Colors.black,
                            // bgcolor:
                            //   selectedRecommend === 'no'
                            //     ? Colors.primary
                            //     : Colors.lightGrey,
                            backgroundImage:
                              selectedRecommend === 'no'
                                ? Colors.gradient
                                : Colors.gradientLight,
                          }}
                          onClick={() => handleRecButtonClick('no')}
                        >
                          No
                        </Button>
                      }
                    />
                  </Box>
                </Box>
                <Box sx={{ width: '100%', mt: '15px' }}>
                  <hr />
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    gap: 2,
                  }}
                >
                  <Button
                    sx={{ color: Colors.black, bgcolor: Colors.lightGrey }}
                    onClick={() => {
                      handleClear();
                      setError({});
                    }}
                  >
                    Clear
                  </Button>
                  <Button
                    sx={{
                      color: Colors.black,
                      // bgcolor: Colors.primary,
                      backgroundImage: Colors.gradient,
                      '&:hover': {
                        bgcolor: Colors.primary,
                      },
                    }}
                    onClick={() => {
                      handleSubmit();
                    }}
                  >
                    Submit
                  </Button>
                </Box>
              </Box>
            </Box>
          </Modal>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidenav;
