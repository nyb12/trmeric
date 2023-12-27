import AddIcon from '@mui/icons-material/Add';
import { Box, Button, List, ListItem } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import React, { useState } from 'react';
import Colors from '../../../constants/Colors';
import MyNotes from '../MyNotes/MyNotes';
import MyNotesCards from '../MyNotes/MyNotesCard';

const RightSideMenu = () => {
  const [isCardOpen, setIsCardOpen] = useState(false);

  const handleNewNoteClick = () => {
    setIsCardOpen(true);
  };

  return (
    <Box style={{ height: '100%' }}>
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
                <MyNotesCards
                  data={
                    '<ul><li>Aligns with evaluation criteria</li><li>Need to connect with the larger team to review the profile</li></ul>'
                  }
                />
                <br />
                <MyNotesCards data={'Check the new Provider'} />
                <br />
                <MyNotesCards data={'Set Out the prints'} />
                <br />
                <MyNotesCards data={'Check the new Milestone'} />
                <br />
                <MyNotesCards data={'Nexatech'} />
                <br />
                <MyNotesCards data={'Tekdi'} />
                <br />
                <MyNotesCards data={'My Notes'} />
              </Box>
            </Box>
          </Box>
        </ListItem>
      </List>
    </Box>
  );
};

export default RightSideMenu;
