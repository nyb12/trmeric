import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AccordionCard from '../../../components/common/AccordionCard/AccordionCards';
import AddIcon from '@mui/icons-material/Add';
import { Provdr, Eval, Milestones } from '../../../svg.js';
import Fonts from '../../../constants/Fonts.jsx';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import AddProvider from '../../AddProvider/AddProvider.jsx';
import Header from '../../../components/common/Header/header.jsx';
import SubHeader from '../../../components/common/subHeader/subHearder.jsx';
import Colors from '../../../constants/Colors.jsx';
import { Paper } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import PsychologyIcon from '@mui/icons-material/Psychology';
import { makeStyles } from '@mui/styles';
import Chatbot from '../../../components/common/ChatBot/ChatBot.jsx';
import MyNotes from '../../../components/common/MyNotes/MyNotes.jsx';
import TrText from '../../../components/common/TrText/TrText.jsx';
import { FontSizes } from '../../../constants/Sizes.jsx';
const drawerWidth = 240;

const MainContent = styled('div')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  marginTop: '100px',
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

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

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  border: 'none',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    position: 'sticky',
    marginTop: '5rem',
    top: 0,
    background: '#eee',
  },
  toolbar: theme.mixins.toolbar,
  customIcon: {
    backgroundColor: '#8080801f',
    padding: '2px',
    borderRadius: '50%',
  },
}));

const PaperPanel = styled(Paper)({
  position: 'fixed',
  top: 0,
  right: 0,
  height: '100%',
  padding: '5px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  zIndex: (theme) => theme.zIndex.drawer + 2,
});

const DrawerContent = styled(Box)({
  marginTop: '175px',
});

const ResponsiveDrawer = ({ children, detailedPage }) => {
  const theme = useTheme();
  const classes = useStyles();

  const [openLeft, setOpenLeft] = React.useState(false);
  const [modal, openModal] = React.useState(false);
  const [chatbotOpen, setChatbotOpen] = React.useState(false);
  const [openRight, setOpenRight] = React.useState(false);

  const toggleDrawer = (side, open) => () => {
    if (side === 'left') {
      setOpenLeft(open);
    } else {
      setOpenRight(open);
    }
  };

  const renderAppBarIcons = () => (
    <>
      <IconButton
        color='inherit'
        aria-label='open left drawer'
        onClick={toggleDrawer('left', !openLeft)}
        edge='start'
      >
        <MenuIcon />
      </IconButton>
      <Typography variant='h6' noWrap component='div'>
        Your App
      </Typography>
      <div style={{ flexGrow: 1 }} />
      <IconButton
        color='inherit'
        aria-label='open right drawer'
        onClick={toggleDrawer('right', !openRight)}
        edge='end'
      >
        <MenuIcon />
      </IconButton>
    </>
  );

  const renderAppBarText = () => (
    <>
      <IconButton
        color='inherit'
        aria-label='open left drawer'
        onClick={toggleDrawer('left', !openLeft)}
        edge='start'
      >
        {openLeft ? <ChevronLeftIcon /> : <MenuIcon />}
      </IconButton>
      <Typography variant='h6' noWrap component='div'>
        Your App
      </Typography>
      <div style={{ flexGrow: 1 }} />
      <IconButton
        color='inherit'
        aria-label='open right drawer'
        onClick={toggleDrawer('right', !openRight)}
        edge='end'
      >
        {openRight ? <ChevronRightIcon /> : <MenuIcon />}
      </IconButton>
    </>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* <MuiAppBar
        // position='fixed'
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          {openLeft || openRight ? renderAppBarText() : renderAppBarIcons()}
        </Toolbar>
      </MuiAppBar> */}
      <Header />
      {detailedPage ? <SubHeader detailedPage /> : <SubHeader />}

      {detailedPage ? (
        <Box></Box>
      ) : (
        <Drawer
          variant='permanent'
          anchor='left'
          open={openLeft}
          onClose={toggleDrawer('left', false)}
          PaperProps={{
            sx: {
              border: 'none',
              background: 'white',
              zIndex: 1,
              height: 'auto',
              borderRadius: '18px',
              marginTop: '190px',
              marginLeft: '10px',
              marginRight: '10px',
              width: '50px',
            },
          }}
        >
          <Box>
            <List>
              <ListItem>
                <ListItemButton
                  onClick={() => {
                    openModal(true);
                  }}
                  sx={{
                    minHeight: 48,
                    display: 'flex',
                    justifyContent: openLeft ? 'initial' : 'center',
                    alignItems: 'center',

                    border: '1px solid #D0D5DD',
                    borderRadius: '8px',
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      ml: openLeft ? 0 : 'auto',

                      alignItems: 'center',
                      color: '#FF8A00',
                    }}
                  >
                    <AddIcon></AddIcon>
                  </ListItemIcon>
                  <ListItemText
                    sx={{
                      fontWeight: '500',
                      opacity: openLeft ? 1 : 0,
                      marginRight: '5px',
                    }}
                  >
                    <b>Add my own provider</b>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <Divider></Divider>

              <ListItem disablePadding sx={{ display: 'flex' }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    display: 'flex',
                    justifyContent: openLeft ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      ml: openLeft ? 0 : 'auto',

                      alignItems: 'center',
                      color: '#FF8A00',
                    }}
                  >
                    <Box
                      component='img'
                      alt='The house from the offer.'
                      src={Provdr}
                      sx={{
                        flex: '0 0 auto',
                        order: -1,
                        marginRight: '10px',
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    sx={{
                      opacity: openLeft ? 1 : 0,
                      fontWeight: 'bold',
                    }}
                  >
                    <b>Provider Summary</b>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <Divider></Divider>

              <ListItem disablePadding sx={{ display: 'flex' }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    display: 'flex',
                    justifyContent: openLeft ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      ml: openLeft ? 0 : 'auto',

                      alignItems: 'center',
                      color: '#344054',
                    }}
                  >
                    <Box
                      component='img'
                      alt='The house from the offer.'
                      src={Eval}
                      sx={{
                        flex: '0 0 auto',
                        order: -1,
                        marginRight: '30px',
                        marginLeft: openLeft ? '15px ' : '22px',
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    sx={{
                      opacity: openLeft ? 1 : 0,
                    }}
                  >
                    <b>Evaluation</b>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <Divider></Divider>

              <ListItem disablePadding sx={{ display: 'flex' }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    display: 'flex',
                    justifyContent: openLeft ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      ml: openLeft ? 0 : 'auto',

                      alignItems: 'center',
                      color: '#344054',
                    }}
                  >
                    <Box
                      component='img'
                      alt='The house from the offer.'
                      src={Milestones}
                      sx={{
                        flex: '0 0 auto',
                        order: -1,
                        marginRight: '30px',
                        marginLeft: openLeft ? '15px ' : '22px',
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    sx={{
                      opacity: openLeft ? 1 : 0,
                      fontFamily: Fonts.Noto_Sans_KR,
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
                background: '#F2F4F7',
              }}
            >
              {openLeft === false ? (
                <IconButton
                  color='inherit'
                  aria-label='open drawer'
                  onClick={() => {
                    setOpenLeft(true);
                  }}
                  edge='start'
                >
                  <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon>
                </IconButton>
              ) : (
                <IconButton
                  onClick={() => {
                    setOpenLeft(false);
                  }}
                >
                  {theme.direction === 'rtl' ? (
                    <KeyboardDoubleArrowLeftIcon />
                  ) : (
                    <KeyboardDoubleArrowLeftIcon />
                  )}
                </IconButton>
              )}
            </DrawerHeader>
            <Divider />
          </Box>
        </Drawer>
      )}
      <MainContent
        sx={{
          marginLeft: openLeft ? `0` : '0',
          marginRight: openRight ? `0` : '0',
          width: '50%',
        }}
      >
        <DrawerHeader />
        {children}
      </MainContent>
      {/* <MuiDrawer
        variant='temporary'
        anchor='right'
        open={openRight}
        onClose={toggleDrawer('right', false)}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': { width: drawerWidth },
        }}
      >
        <DrawerHeader>
          <IconButton onClick={toggleDrawer('right', false)}>
            <ChevronRightIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItemButton></ListItemButton>
          <ListItemButton></ListItemButton>
        </List>
      </MuiDrawer> */}

      <Box>
        <PaperPanel className='right-icons' elevation={0}>
          <List>
            <ListItem className='d-flex align-center'>
              <ListItemIcon
                className={classes.customIcon}
                sx={{ minWidth: '10px', background: Colors.gradient }}
              >
                <IconButton
                // onClick={() => {
                //   setOpenRight(false);
                //   setChatbotOpen(!chatbotOpen);
                // }}
                >
                  {chatbotOpen ? <CloseIcon /> : <AllInclusiveIcon />}
                </IconButton>
              </ListItemIcon>

              <ListItemIcon
                className={classes.customIcon}
                sx={{ minWidth: '10px' }}
              >
                <IconButton
                  onClick={() => {
                    setOpenRight(!openRight);
                    setChatbotOpen(false);
                  }}
                >
                  {openRight ? <CloseIcon /> : <ContentPasteIcon />}
                </IconButton>
              </ListItemIcon>
              <ListItemIcon
                className={classes.customIcon}
                sx={{ minWidth: '10px' }}
              >
                <IconButton>
                  <CalendarTodayIcon />
                </IconButton>
              </ListItemIcon>

              <ListItemIcon
                className={classes.customIcon}
                sx={{ minWidth: '10px' }}
              >
                <IconButton>
                  <ChatBubbleOutlineIcon />
                </IconButton>
              </ListItemIcon>
            </ListItem>
          </List>
        </PaperPanel>
      </Box>

      {/* Right Drawer */}
      {chatbotOpen && (
        <DrawerContent
          sx={{
            background: Colors.lightBackground,
            maxWidth: '100%',
          }}
        >
          <Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                margin: '5px',
                padding: '5px',
              }}
            >
              <IconButton
                onClick={() => {
                  setChatbotOpen(false);
                }}
              >
                <CloseIcon />
              </IconButton>
            </Box>
            <Box sx={{ maxHeight: 'calc(100vh - 50px)', overflowY: 'auto' }}>
              <Chatbot />
            </Box>
          </Box>
        </DrawerContent>
      )}

      {openRight && (
        <DrawerContent
          sx={{
            background: Colors.lightBackground,
            marginRight: '95px',
            maxWidth: '100%',
          }}
        >
          <Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: '5px',
                padding: '5px',
              }}
            >
              <Box className='notes'>
                <ContentPasteIcon
                  sx={{
                    fontSize: FontSizes.fontSixteen,
                  }}
                />
                <TrText
                  title={'Notes'}
                  sx={{
                    fontFamily: Fonts.Poppins,
                    fontSize: FontSizes.fontFourteen,
                  }}
                />
              </Box>
              <IconButton
                onClick={() => {
                  setOpenRight(false);
                }}
              >
                <CloseIcon />
              </IconButton>
            </Box>
            <Box sx={{ maxHeight: 'calc(100vh - 50px)', overflowY: 'auto' }}>
              <MyNotes />
            </Box>
          </Box>
        </DrawerContent>
      )}
      <Box>
        <Box>
          <AddProvider openModal={openModal} modal={modal} />;
        </Box>
      </Box>
    </Box>
  );
};

export default ResponsiveDrawer;
