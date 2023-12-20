import AddIcon from "@mui/icons-material/Add";
import CloseIcon from '@mui/icons-material/Close';
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled, useTheme } from "@mui/material/styles";
import React, { useEffect, useState }  from "react";
import {Provdr, Eval, Milestones} from '../../../svg.js';
import Modal from '@mui/material/Modal';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';
import { FormControl, OutlinedInput } from '@mui/material';
import * as yup from 'yup';

import Colors from '../../../constants/Colors';
import { FontSizes } from '../../../constants/Sizes';

import ErrorMessage from '../ErrorMessages/ErrorMessage';


import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import Fonts from "../../../constants/Fonts.jsx";
import TrmericCard from "../Card/TrmericCard.jsx";
import AccordionCard from "../AccordionCard/AccordionCards.jsx";
const drawerWidth = 250;


const MAX_PHONE_LENGTH = 10;
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  
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
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  border: "none",

  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Sidenav() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [modal, openModal] = useState(false);

  const [selectedValue, setSelectedValue] = useState('');
  const [selectedRecommend, setSelectedRecommend] = useState('');


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
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
  return (
    <Box sx={{ display: "flex", background: "#F2F4F7" }}>
      <CssBaseline />
      {/* <AppBar position='fixed' open={open}></AppBar> */}
      <Drawer
        variant="permanent"
        open={open}
        PaperProps={{
          sx: {
            border: "none",
            background: "white",
            zIndex: 1,
            height: "auto",
            borderRadius: "18px",
            marginTop: "200px",
            marginLeft: "10px",
            marginRight: "10px",
            width: "50px",
          },
        }}
      >
        {/* <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader> */}
        {/* <Divider /> */}
        {/* <List>
          {['Add My Own Provider', 'Provider Summary', 'Evaluation', 'Milestones'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}

        <List>
          <ListItem>
            <ListItemButton onClick={() => {
              openModal(true);
            }}
              sx={{
                minHeight: 48,
                display: "flex",
                justifyContent: open ? "initial" : "center",
                alignItems: "center",

                border: "1px solid #D0D5DD",
                borderRadius: "8px",
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  ml: open ? 0 : "auto",

                  alignItems: "center",
                  color: "#FF8A00",
                }}
              >
                <AddIcon></AddIcon>
              </ListItemIcon>
              <ListItemText
                sx={{
                  fontWeight: "500",
                  opacity: open ? 1 : 0,
                  marginRight: "5px",
                }}
              >
                <b>Add my own provider</b>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <Divider></Divider>

          <ListItem disablePadding sx={{ display: "flex" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                display: "flex",
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  ml: open ? 0 : "auto",

                  alignItems: "center",
                  color: "#FF8A00",
                }}
              >
                <Box
                  component="img"
                  alt="The house from the offer."
                  src={Provdr}
                  sx={{
                    flex: "0 0 auto",
                    order: -1,
                    marginRight: "10px",
                  }}
                />
              </ListItemIcon>
              <ListItemText
                sx={{
                  opacity: open ? 1 : 0,
                  fontWeight: "bold",
                }}
              >
                <b>Provider Summary</b>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <Divider></Divider>

          <ListItem disablePadding sx={{ display: "flex" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                display: "flex",
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  ml: open ? 0 : "auto",

                  alignItems: "center",
                  color: "#344054",
                }}
              >
                <Box
                  component="img"
                  alt="The house from the offer."
                  src={Eval}
                  sx={{
                    flex: "0 0 auto",
                    order: -1,
                    marginRight: "30px",
                    marginLeft: open ? "15px " : "22px",
                  }}
                />
              </ListItemIcon>
              <ListItemText
                sx={{
                  opacity: open ? 1 : 0,
                }}
              >
                <b>Evaluation</b>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <Divider></Divider>

          <ListItem disablePadding sx={{ display: "flex" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                display: "flex",
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  ml: open ? 0 : "auto",

                  alignItems: "center",
                  color: "#344054",
                }}
              >
                <Box
                  component="img"
                  alt="The house from the offer."
                  src={Milestones}
                  sx={{
                    flex: "0 0 auto",
                    order: -1,
                    marginRight: "30px",
                    marginLeft: open ? "15px " : "22px",

                  }}
                />
              </ListItemIcon>
              <ListItemText
                sx={{
                  opacity: open ? 1 : 0,
                  fontFamily:Fonts.Noto_Sans_KR
                }}
              >
                <b>Milestones</b>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>

        <Divider></Divider>
        <DrawerHeader
          sx={{
            background: "#F2F4F7",
          }}
        >
          {open === false ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
            >
              <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon>
            </IconButton>
          ) : (
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <KeyboardDoubleArrowLeftIcon />
              ) : (
                <KeyboardDoubleArrowLeftIcon />
              )}
            </IconButton>
          )}
        </DrawerHeader>
        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, border: "none" }}>
        <DrawerHeader />
        {/* <Box paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Box>
        <Box paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Box> */}
     <AccordionCard></AccordionCard>
     {/* <TrmericCard></TrmericCard> */}
      </Box>

      <Box>
          <Modal
            open={modal}
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
                      openModal(false);
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

    
  );
}
