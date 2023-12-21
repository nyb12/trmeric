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
import AddIcon from '@mui/icons-material/Add';
import { Provdr, Eval, Milestones } from '../../../svg.js';
import Fonts from '../../../constants/Fonts.jsx';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import AddProvider from '../../AddProvider/AddProvider.jsx';
import Header from '../../../components/common/Header/header.jsx';
import SubHeader from '../../../components/common/subHeader/subHearder.jsx';
import RightSideMenu from '../../../components/common/rightSideMenu/RightSideMenu.jsx';
import Colors from '../../../constants/Colors.jsx';
import { Paper } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import PsychologyIcon from '@mui/icons-material/Psychology';
import { makeStyles } from '@mui/styles';

const drawerWidth = 240;

const MainContent = styled('div')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
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
const ResponsiveDrawer = ({ children, detailedPage }) => {
  const theme = useTheme();
  const classes = useStyles();

  const [openLeft, setOpenLeft] = React.useState(false);
  const [modal, openModal] = React.useState(false);

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
    <Box>
      <Box
        sx={{
          display: 'flex',
        }}
      >
        <CssBaseline />
        {/* <MuiAppBar
          position='fixed'
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar>
            {openLeft || openRight ? renderAppBarText() : renderAppBarIcons()}
          </Toolbar>
        </MuiAppBar> */}
        <Header />
        <SubHeader />
        {/* {detailedPage ? (
          <Box></Box>
        ) : (
          <Drawer
            variant='permanent'
            open={openLeft}
            PaperProps={{
              sx: {
                border: 'none',
                background: 'white',
                zIndex: 1,
                height: 'auto',
                borderRadius: '18px',
                marginTop: '200px',
                marginLeft: '10px',
                marginRight: '10px',
                width: '50px',
              },
            }}
          >
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
          </Drawer>
        )} */}
        {/* remove after changes */}
        <Drawer
          variant='permanent'
          open={openLeft}
          PaperProps={{
            sx: {
              border: 'none',
              background: 'white',
              zIndex: 1,
              height: 'auto',
              borderRadius: '18px',
              marginTop: '200px',
              marginLeft: '10px',
              marginRight: '10px',
              width: '50px',
            },
          }}
        >
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
        </Drawer>
        <MainContent
          sx={{
            marginLeft: openLeft ? `0` : '0',
            marginRight: openRight ? `${drawerWidth}px` : '0',
          }}
        >
          <DrawerHeader />

          {/* Main Content */}
          {children}
        </MainContent>

        <MuiDrawer
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
          {/* <DrawerHeader>
            <IconButton onClick={toggleDrawer('right', false)}>
              <ChevronRightIcon />
            </IconButton>
          </DrawerHeader> */}
          <Divider />
          <RightSideMenu />
        </MuiDrawer>
        <Box>
          <AddProvider openModal={openModal} modal={modal} />;
        </Box>
      </Box>

      <Drawer
        variant='permanent'
        anchor='right'
        open={openRight}
        onClose={() => {
          setOpenRight(false);
        }}
        sx={{
          right: '85px !important',
          height: '100% !important',
        }}
        PaperProps={{
          sx: {
            border: 'none',
            background: 'white',
            zIndex: 1,
            height: 'auto',
            borderRadius: '10px',
            marginTop: '150px',
            marginLeft: '10px',
            marginRight: '5px',
            width: '104px',
          },
        }}
      >
        <div />
        <Paper className='right-icons' elevation={0}>
          <List>
            <ListItem className='d-flex align-center'>
              <ListItemIcon
                className={classes.customIcon}
                sx={{ minWidth: '10px', background: Colors.gradient }}
              >
                <IconButton>
                  <AllInclusiveIcon />
                </IconButton>
              </ListItemIcon>

              <ListItemIcon
                className={classes.customIcon}
                sx={{ minWidth: '10px' }}
              >
                {openRight === false ? (
                  <IconButton
                    onClick={() => {
                      setOpenRight(true);
                    }}
                  >
                    <ContentPasteIcon />
                  </IconButton>
                ) : (
                  <IconButton
                    onClick={() => {
                      setOpenRight(false);
                    }}
                  >
                    {theme.direction === 'rtl' ? (
                      <ContentPasteIcon />
                    ) : (
                      <CloseIcon />
                    )}
                  </IconButton>
                )}

                {/* <IconButton
                  onClick={() => {
                    setOpenRight(true);
                  }}
                >
                  <ContentPasteIcon />
                </IconButton> */}
              </ListItemIcon>

              <ListItemIcon
                className={classes.customIcon}
                sx={{ minWidth: '10px' }}
              >
                <IconButton>
                  <PsychologyIcon />
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
        </Paper>
      </Drawer>
    </Box>
  );
};

export default ResponsiveDrawer;
