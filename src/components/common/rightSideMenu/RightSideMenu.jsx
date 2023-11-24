import React from 'react';
import { Drawer, List, IconButton, ListItem, ListItemIcon } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import Paper from '@mui/material/Paper';

const drawerWidth = '6%';
const drawerOpen = true;

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth,
        position: 'sticky',
        marginTop: '5%',
        top: 0
    },
    toolbar: theme.mixins.toolbar,
    customIcon: {
        backgroundColor: '#8080801f',
        padding: '7px',
        borderRadius: '50%'
    },
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
                <Paper elevation={3}>
                    <List>
                        {[<AllInclusiveIcon />, <ContentPasteIcon />, <PsychologyIcon />, <CalendarTodayIcon />, <ChatBubbleOutlineIcon />].map((icon, index) => (
                            <ListItem key={index}>
                                <ListItemIcon className={classes.customIcon}>
                                    <IconButton onClick={handleDrawerOpen}>{icon}</IconButton>
                                </ListItemIcon>
                            </ListItem>

                        ))}
                    </List>
                </Paper>
            </Drawer>


        </div>
    );
};

export default RightSideMenu;
