import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import moment from 'moment';

import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { FontSizes } from '../../../constants/Sizes';
import Fonts from '../../../constants/Fonts';
import Colors from '../../../constants/Colors';
import { deleteNotes } from '../../../api/ApiCalls';
import { Button, Popover, Tooltip } from '@mui/material';
import TrText from '../TrText/TrText';

function MyNotesCards({ setIsCardOpen, data }) {
  const { id, content, created_on } = data;
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [editorContent, setEditorContent] = useState(content);
  const [isPopoverOpen, setPopoverOpen] = useState(false);

  const handleEditClick = () => {
    setIsEditorOpen(true);
  };

  const handleEditorChange = (content) => {
    setEditorContent(content);
  };

  const handleSaveClick = () => {
    setIsEditorOpen(false);
  };
  const deleteMyNotes = async () => {
    const response = await deleteNotes(id);
  };

  const handleClick = (event) => {
    setPopoverOpen(true);
  };

  const handleClose = () => {
    setPopoverOpen(false);
  };

  const handleYes = () => {
    deleteMyNotes();
    handleClose();
  };

  const handleNo = () => {
    // Close the popover
    handleClose();
  };

  return (
    <Box
      sx={{
        marginBottom: '10px',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '12px',
      }}
    >
      <Box
        sx={{ display: 'flex', flexDirection: 'column', borderRadius: '12px' }}
      >
        <Box
          sx={{
            height: '8px',
            backgroundImage: Colors.gradient,
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px',
          }}
        ></Box>

        <Card sx={{ width: 250 }}>
          <CardContent sx={{ padding: '0 !important' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px',
              }}
            >
              <Box>
                <Box
                  sx={{
                    fontSize: FontSizes.fontFourteen,
                    colors: Colors.black,
                    fontWeight: '500',
                  }}
                >
                  Notes By OR
                </Box>
              </Box>
            </Box>
          </CardContent>
          <Divider />
          <Box sx={{ padding: '5px' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
                gap: '5px',
              }}
            >
              <Box
                sx={{
                  fontSize: FontSizes.fontTwelve,
                  fontFamily: Fonts.Poppins,
                }}
              >
                {moment(created_on).format('MMM D hh:mma')}
              </Box>
              <Divider orientation='vertical' sx={{ height: '20px' }} />
              <Box
                sx={{
                  fontSize: FontSizes.fontTwelve,
                  fontFamily: Fonts.Poppins,
                }}
              >
                Phase: Engage
              </Box>
            </Box>

            {isEditorOpen ? (
              <ReactQuill
                theme='snow'
                value={editorContent}
                onChange={handleEditorChange}
              />
            ) : (
              <Box
                sx={{ mt: '10px' }}
                dangerouslySetInnerHTML={{ __html: editorContent }}
              />
            )}
          </Box>
          <Divider />
          <Box
            sx={{
              display: 'flex',
              padding: '10px',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              gap: 5,
            }}
          >
            {isEditorOpen ? (
              <button onClick={handleSaveClick}>Save</button>
            ) : (
              <DriveFileRenameOutlineIcon
                className='cursor-pointer'
                onClick={handleEditClick}
              />
            )}
            <Box
              onClick={handleClick}
              sx={{
                cursor: 'pointer',
              }}
            >
              <DeleteOutlinedIcon />
            </Box>

            <Popover
              open={isPopoverOpen}
              anchorEl={null}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'center',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'center',
                horizontal: 'center',
              }}
            >
              <Box p={2}>
                <TrText title={'Are you sure you want to delete?'} />
                <Box mt={2} display='flex' justifyContent='flex-end'>
                  <Button onClick={handleYes} variant='contained' color='error'>
                    Yes
                  </Button>
                  <Button
                    onClick={handleNo}
                    variant='contained'
                    color='primary'
                    sx={{ ml: 2 }}
                  >
                    No
                  </Button>
                </Box>
              </Box>
            </Popover>
          </Box>
        </Card>
      </Box>
    </Box>
  );
}

export default MyNotesCards;
