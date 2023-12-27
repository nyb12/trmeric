import CloseIcon from '@mui/icons-material/Close';
import {
  Button,
  Card,
  CardContent,
  IconButton,
  TextField,
  Divider,
  Alert,
  List,
  ListItem,
} from '@mui/material';
import { Box } from '@mui/system';
import Colors from '../../../constants/Colors';
import { FontSizes } from '../../../constants/Sizes';
import Fonts from '../../../constants/Fonts';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { addNotes, getAllNotes } from '../../../api/ApiCalls';

import AddIcon from '@mui/icons-material/Add';
import ListItemText from '@mui/material/ListItemText';
import React, { useEffect, useState } from 'react';
import MyNotesCards from './MyNotesCard';
import Loader from '../loader/loader';
import moment from 'moment';
import TrText from '../TrText/TrText';

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

function MyNotes() {
  const [value, setValue] = useState('');
  const [successMessage, setsuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const [isCardOpen, setIsCardOpen] = useState(false);
  const [notesRecords, setNotesRecord] = useState([]);

  const handleNewNoteClick = () => {
    setIsCardOpen(true);
  };
  useEffect(() => {
    getMyAllNotes();
  }, []);

  const onSubmit = async () => {
    const bodyData = {
      content: value,
    };

    const response = await addNotes(bodyData);
    if (response?.status === 'success') {
      setValue('');
      setsuccessMessage(response?.message);
      setIsLoading(false);

      setTimeout(() => {
        setsuccessMessage('');
      }, 1000);
      getMyAllNotes();
    } else {
      alert(response?.error);
    }
  };

  const getMyAllNotes = async () => {
    const response = await getAllNotes();
    setNotesRecord(response?.records);

    setIsLoading(false);
  };

  return (
    <Box>
      {/* Save Notes TextInput Box */}
      <Box style={{ height: '100%' }}>
        <List>
          <ListItem>
            <Box>
              <Divider sx={{ width: '100%' }} />
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
                {isCardOpen && (
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: '12px',
                    }}
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
                      <Box>
                        {successMessage && (
                          <Box
                            className='display-center'
                            sx={{
                              fontFamily: Fonts.Poppins,
                              fontSize: FontSizes.fontFourteen,
                              color: Colors.secondary,
                            }}
                          >
                            {successMessage}
                          </Box>
                        )}
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
                )}

                {/* All Notes Cards */}

                <Box className='mt-20'>
                  {isLoading && <Loader />}
                  {notesRecords?.length === 0 && (
                    <TrText
                      title={'No Notes Data'}
                      sx={{ fontFamily: Fonts.Poppins }}
                    />
                  )}
                  {notesRecords
                    ?.sort((a, b) =>
                      moment(b.created_on).diff(moment(a.created_on))
                    )
                    .map((item) => (
                      <MyNotesCards key={item.id} data={item} />
                    ))}
                </Box>
              </Box>
            </Box>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default MyNotes;
