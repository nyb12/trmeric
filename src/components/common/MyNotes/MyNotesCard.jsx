import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { FontSizes } from '../../../constants/Sizes';
import Fonts from '../../../constants/Fonts';
import Colors from '../../../constants/Colors';

function MyNotesCards({ setIsCardOpen, data }) {
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [editorContent, setEditorContent] = useState(data);

  const handleEditClick = () => {
    setIsEditorOpen(true);
  };

  const handleEditorChange = (content) => {
    setEditorContent(content);
  };

  const handleSaveClick = () => {
    setIsEditorOpen(false);
  };

  return (
    <Box>
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
                Nov 30 10:30am
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
            <DeleteOutlinedIcon className='cursor-pointer' />
          </Box>
        </Card>
      </Box>
    </Box>
  );
}

export default MyNotesCards;
