import React from 'react';
import { Drawer, IconButton, List, ListItem, ListItemIcon } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { MailOutline, Inbox, Drafts, Delete, Bookmark } from '@mui/icons-material';

const drawerWidth = '5%';
const drawerOpen = true;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    position: 'sticky',
    top: 0,
  },
  toolbar: theme.mixins.toolbar,
}));

const RightSideMenu = () => {
  const classes = useStyles();

  const handleDrawerOpen = () => {
    // action here
  };

  return (
    <div>
      {/* Right Side Menu */}
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={drawerOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List>
          {[<Inbox />, <MailOutline />, <Drafts />, <Delete />, <Bookmark />].map((icon, index) => (
            <ListItem IconButton key={index}>
              <ListItemIcon>
                <IconButton onClick={handleDrawerOpen}>{icon}</IconButton>
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
      </Drawer>

      
    </div>
  );
};

export default RightSideMenu;
