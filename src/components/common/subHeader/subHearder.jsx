import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import TrText from '../TrText/TrText';
import Fonts from '../../../constants/Fonts';
import { FontSizes } from '../../../constants/Sizes';
import { Paper } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { UserPlus } from '../../../svg';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

const steps = ['Discover', 'Engage', 'Build', 'Transact'];
export default function SubHeader({ detailedPage }) {
  const navigate = useNavigate();
  return (
    <div>
      <>
        <AppBar position='fixed' style={{ zIndex: 2000, marginTop: '60px' }}>
          <Paper square sx={{ padding: 2, color: '#000', background: '#fff' }}>
            <Box className=''>
              {detailedPage ? (
                <Box className='display-row-flex-start'>
                  <ArrowBackIcon
                    onClick={() => {
                      navigate(-1);
                    }}
                    sx={{ cursor: 'pointer' }}
                  />
                  <span className='mt-5'>NexaTech Solution</span>
                </Box>
              ) : (
                <Box>
                  <div>
                    <div className='display-column'>
                      <div className='display-start-row mt-5 pt-8 pl-24 pr-24'>
                        <div className='lh-24 mb-8'>
                          <TrText
                            sx={{
                              fontSize: FontSizes.fontEighteen,
                              fontFamily: Fonts.Poppins,
                              fontWeight: '400',
                            }}
                          >
                            Digital Inventory System
                          </TrText>
                        </div>
                        <div>
                          <div className='d-f'>
                            <AvatarGroup max={4}>
                              <Avatar
                                alt='Remy Sharp'
                                className='avatar-logo'
                                src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                              />
                              <Avatar
                                alt='Travis Howard'
                                className='avatar-logo'
                                src='https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                              />
                              <Avatar
                                alt='Cindy Baker'
                                className='avatar-logo'
                                src='https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                              />

                              <Avatar
                                alt='Trevor Henderson'
                                className='avatar-logo'
                                src='/static/images/avatar/5.jpg'
                              />
                            </AvatarGroup>
                            <Button
                              className='secondary-btn'
                              startIcon={<PersonAddAltIcon className='pc' />}
                              size='medium'
                            >
                              {' '}
                              Invite
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div>
                        <Stepper className='w-50 pl-24' activeStep={1}>
                          {steps.map((label) => (
                            <Step key={label}>
                              <StepLabel>{label}</StepLabel>
                            </Step>
                          ))}
                        </Stepper>
                      </div>
                    </div>
                  </div>
                </Box>
              )}
            </Box>
          </Paper>
        </AppBar>
      </>
    </div>
  );
}
