import AddIcon from '@mui/icons-material/Add';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import PsychologyIcon from '@mui/icons-material/Psychology';
import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
} from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import Colors from '../../../constants/Colors';
import MyNotes from '../MyNotes/MyNotes';
import MyNotesCards from '../MyNotes/MyNotesCard';

const drawerWidth = '6%';
const drawerOpen = true;

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

const RightSideMenu = () => {
  const classes = useStyles();
  const [isSwipeableDrawerOpen, setSwipeableDrawerOpen] = useState(false);
  const [isCardOpen, setIsCardOpen] = useState(false);

  const handleDrawerOpen = () => {
    setSwipeableDrawerOpen(true);
  };

  const handleSwipeableDrawerClose = () => {
    setSwipeableDrawerOpen(false);
  };

  const handleNewNoteClick = () => {
    setIsCardOpen(true);
  };

  return (
    <div style={{ position: 'sticky' }}>
      {/* Right Side Menu */}
      <Drawer
        className={classes.drawer}
        variant='permanent'
        anchor='right'
        open={drawerOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
        sx={{
          width: 250,
        }}
        PaperProps={{
          sx: {
            border: 'none',
            background: 'white',
            zIndex: 1,
            height: 'auto',
            borderRadius: '10px',
            marginTop: '200px',
            marginLeft: '10px',
            marginRight: '12px',
            width: '104px',
          },
        }}
      >
        <div />
        <Paper elevation={0}>
          <List>
            {[
              <AllInclusiveIcon />,
              <ContentPasteIcon />,
              <PsychologyIcon />,
              <CalendarTodayIcon />,
              <ChatBubbleOutlineIcon />,
            ].map((icon, index) => (
              <ListItem key={index} className='display-column-center'>
                <ListItemIcon
                  className={classes.customIcon}
                  sx={{ minWidth: '10px' }}
                >
                  <IconButton onClick={handleDrawerOpen}>{icon}</IconButton>
                </ListItemIcon>
              </ListItem>
            ))}
          </List>
        </Paper>
      </Drawer>
      <SwipeableDrawer
        anchor='right'
        open={isSwipeableDrawerOpen}
        onClose={handleSwipeableDrawerClose}
        onOpen={() => {}}
        sx={{ zIndex: 2300 }}
      >
        <List>
          <ListItem>
            <Box>
              <ListItemText primary='Notes' />

              <Box
                sx={{
                  mb: '10px',
                }}
              >
                {isCardOpen ? (
                  <Box />
                ) : (
                  <Button
                    variant='text'
                    startIcon={<AddIcon />}
                    // onClick={handleNewNoteClick}
                    sx={{ color: Colors.black }}
                    onClick={handleNewNoteClick}
                  >
                    New note
                  </Button>
                )}
              </Box>
              <Box>
                {isCardOpen && <MyNotes setIsCardOpen={setIsCardOpen} />}
                <Box className='mt-20'>
                  <MyNotesCards />
                </Box>
              </Box>
            </Box>
          </ListItem>
          {/* Add more Swipeable Drawer content as needed */}
        </List>
      </SwipeableDrawer>
    </div>
  );
};

export default RightSideMenu;
