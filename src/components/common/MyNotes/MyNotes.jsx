import CloseIcon from '@mui/icons-material/Close';
import {
  Button,
  Card,
  CardContent,
  IconButton,
  TextField,
  Divider,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import Colors from '../../../constants/Colors';
import { FontSizes } from '../../../constants/Sizes';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const modules = {
  toolbar: [
    [{ header: [2, 3, false] }],
    ['bold', 'italic', 'underline'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    // ['link', 'image'],
    // ['clean'],
  ],
};

const formats = ['header', 'bold', 'italic', 'underline', 'list', 'bullet'];

function MyNotes({ setIsCardOpen }) {
  const [value, setValue] = useState('');

  const onSubmit = () => {
    console.log(value);
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

        <Card sx={{ width: 300 }}>
          <CardContent sx={{ padding: '0 !important' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '5px',
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

              <Box>
                <IconButton
                  edge='end'
                  onClick={() => {
                    setIsCardOpen(false);
                  }}
                  aria-label='close'
                  sx={{
                    top: 0,
                    right: 15,
                    fontSize: FontSizes.fontEight,
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
            </Box>
          </CardContent>
          <Divider />
          <Box sx={{ padding: '5px' }}>
            <ReactQuill
              className='quill-style'
              theme='snow'
              placeholder='Add description'
              value={value}
              onChange={setValue}
              modules={modules}
              formats={formats}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              padding: '10px',
              justifyContent: 'flex-end',
            }}
          >
            <Button
              variant='text'
              onClick={onSubmit}
              sx={{
                color: Colors.black,
                textTransform: 'none',
                fontWeight: '500',
              }}
            >
              Save Note
            </Button>
          </Box>
        </Card>
      </Box>
    </Box>
  );
}

export default MyNotes;
