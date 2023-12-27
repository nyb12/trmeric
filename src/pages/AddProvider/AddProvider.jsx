import React, { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';
import { Box, FormControl, FormHelperText, OutlinedInput } from '@mui/material';
import * as yup from 'yup';

import Colors from '../../constants/Colors';
import { FontSizes } from '../../constants/Sizes';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

import ErrorMessage from '../../components/common/ErrorMessages/ErrorMessage';
import TrText from '../../components/common/TrText/TrText';
import Fonts from '../../constants/Fonts';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { addProvider } from '../../api/ApiCalls';

function AddProvider({ openModal, modal }) {
  const [selectedValue, setSelectedValue] = useState('no');
  const [selectedRecommend, setSelectedRecommend] = useState('no');
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const MAX_PHONE_LENGTH = 10;
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    width: '50%',
    maxWidth: '600px',
    padding: '0 !important',
  };

  const successStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const validationSchema = yup.object().shape({
    company_name: yup.string().required('Company Name is required *'),
    company_website: yup.string().required('Company Website is required *'),
    contact_name: yup.string().required('Contact Name is required *'),
    email: yup
      .string()
      .email('Invalid email format *')
      .required('Email is required *')
      .test('valid-domain', 'Invalid top-level domain *', (value) => {
        if (!value) return true;
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(value);
      }),
    phone: yup.string().required('Phone is required *'),
    params: yup.string().required('Description is required *'),
  });
  const [error, setError] = useState({
    company_name: '',
    company_website: '',
    contact_name: '',
    email: '',
    phone: '',
    params: '',
  });
  const handleButtonClick = (event) => {
    setSelectedValue(event);
  };
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleRecButtonClick = (event) => {
    setSelectedRecommend(event);
  };
  const handleRecChange = (event) => {
    setSelectedRecommend(event.target.value);
  };

  const [formData, setFormData] = useState({
    company_name: '',
    company_website: '',
    contact_name: '',
    email: '',
    phone: '',
    params: '',
    provider_existing: selectedValue,
    provider_recommend: selectedRecommend,
  });

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      provider_existing: selectedValue,
      provider_recommend: selectedRecommend,
    }));
  }, [selectedValue, selectedRecommend]);

  const handleClear = () => {
    setSelectedValue('');
    setSelectedRecommend('');
    setFormData({
      company_name: '',
      company_website: '',
      contact_name: '',
      email: '',
      phone: '',
      params: '',
      provider_existing: '',
      provider_recommend: '',
    });
  };

  const validateField = async (name, value) => {
    try {
      await yup.reach(validationSchema, name).validate(value);
      setError((prevErrors) => ({ ...prevErrors, [name]: '' }));
    } catch (error) {
      setError((prevErrors) => ({
        ...prevErrors,
        [name]: error.message || 'Validation error',
      }));
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));
    validateField(field, value);
  };

  const handleSubmit = async () => {
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      const response = await addProvider(formData);
      if (response?.status === 'success') {
        handleClear();
        alert('successfully added provider');
        openModal(false);
        //setOpen(true);
        //setsuccessMessage(response?.message);
      } else {
        alert(response?.error);
      }
    } catch (error) {
      if (error.inner) {
        const validationErrors = {};
        error.inner.forEach((validationError) => {
          validationErrors[validationError.path] = validationError.message;
        });
        setError(validationErrors);
      }
    }
  };
  return (
    <Box>
      <Modal
        open={modal}
        // onClose={() => {
        //   setOpen(false);
        // }}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        sx={{
          zIndex: '3333',
          padding: '2 !important',
        }}
      >
        <Box sx={style}>
          <Box
            sx={{
              bgcolor: Colors.veryLightGrey,
              padding: '10px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Box>
              <TrText
                id='modal-title'
                variant='h6'
                component='h2'
                sx={{
                  fontWeight: '600',
                  fontFamily: Fonts.Inter,
                  fontSize: FontSizes.fontEighteen,
                }}
              >
                Add a provider
              </TrText>
              <TrText
                id='modal-sub-title'
                sx={{
                  fontSize: FontSizes.fontSixteen,
                  fontWeight: '400',
                  fontFamily: Fonts.Poppins,
                }}
              >
                Enter the information below to add a provider
              </TrText>
            </Box>
            <Box>
              <IconButton
                edge='end'
                color='inherit'
                onClick={() => {
                  handleClear();
                  openModal(false);
                  setError({});
                }}
                aria-label='close'
                sx={{ top: 0, right: 10 }}
              >
                <CloseIcon />
              </IconButton>
            </Box>
          </Box>
          <Box sx={{ padding: '20px' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: '10px',
                justifyContent: 'space-between',
              }}
            >
              <TrText
                id='modal-modal-description'
                sx={{
                  fontSize: FontSizes.fontSixteen,
                  fontWeight: '400',
                  fontFamily: Fonts.Poppins,
                }}
              >
                Is this an existing providers for your company ?
              </TrText>
              <Box sx={{ ml: '20px', display: 'flex', flexDirection: 'row' }}>
                <FormControlLabel
                  value='yes'
                  control={
                    <Radio
                      checked={selectedValue === 'yes'}
                      onChange={handleChange}
                      value='yes'
                      name='radio-buttons'
                      inputProps={{ 'aria-label': 'Yes' }}
                      style={{ display: 'none' }}
                    />
                  }
                  label={
                    <Button
                      variant={
                        selectedValue === 'yes' ? 'contained' : 'outlined'
                      }
                      sx={{
                        color: Colors.black,
                        textTransform: 'none !important',
                        fontFamily: Fonts.Poppins,
                        fontWeight: '500',
                        backgroundImage:
                          selectedValue === 'yes'
                            ? Colors.gradient
                            : Colors.gradientLight,
                      }}
                      onClick={() => handleButtonClick('yes')}
                    >
                      Yes
                    </Button>
                  }
                />
                <FormControlLabel
                  value='no'
                  control={
                    <Radio
                      checked={selectedValue === 'no'}
                      onChange={handleChange}
                      value='no'
                      name='radio-buttons'
                      inputProps={{ 'aria-label': 'No' }}
                      style={{ display: 'none' }}
                    />
                  }
                  label={
                    <Button
                      variant={
                        selectedValue === 'no' ? 'contained' : 'outlined'
                      }
                      sx={{
                        color: Colors.black,
                        textTransform: 'none !important',
                        fontFamily: Fonts.Poppins,
                        fontWeight: '400',
                        backgroundImage:
                          selectedValue === 'no'
                            ? Colors.gradient
                            : Colors.gradientLight,
                      }}
                      onClick={() => handleButtonClick('no')}
                    >
                      No
                    </Button>
                  }
                />
              </Box>
            </Box>
            <Box
              sx={{
                mt: '10px',
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
              }}
            >
              <FormControl>
                <OutlinedInput
                  id='my-input'
                  required
                  aria-describedby='my-helper-text'
                  placeholder='Company Name'
                  sx={{
                    borderRadius: '15px',
                    width: '100%',
                  }}
                  value={formData.company_name}
                  onChange={(e) =>
                    handleInputChange('company_name', e.target.value)
                  }
                  onBlur={() =>
                    validateField('company_name', formData.company_name)
                  }
                  error={error?.company_name}
                />
                {/* {error && (
                <FormHelperText>{error?.company_name}</FormHelperText>
              )} */}
              </FormControl>

              <OutlinedInput
                id='my-input'
                aria-describedby='my-helper-text'
                placeholder='Company Website'
                sx={{
                  borderRadius: '15px',
                  width: '100%',
                }}
                value={formData.company_website}
                onChange={(e) =>
                  handleInputChange('company_website', e.target.value)
                }
                onBlur={() =>
                  validateField('company_website', formData.company_website)
                }
                error={error?.company_website}
              />
              {/* {error && (
              <FormHelperText>{error?.company_website}</FormHelperText>
            )} */}
              <FormControl>
                <OutlinedInput
                  id='my-input'
                  aria-describedby='my-helper-text'
                  placeholder='Contact Name'
                  sx={{
                    borderRadius: '15px',
                    width: '100%',
                  }}
                  value={formData.contact_name}
                  onChange={(e) =>
                    handleInputChange('contact_name', e.target.value)
                  }
                  onBlur={() =>
                    validateField('contact_name', formData.contact_name)
                  }
                  error={error?.contact_name}
                />
                {/* {error && (
                <FormHelperText>{error?.contact_name}</FormHelperText>
              )} */}
              </FormControl>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gridGap: '10px',
                }}
              >
                <FormControl>
                  <OutlinedInput
                    id='my-input'
                    aria-describedby='my-helper-text'
                    placeholder='Email'
                    sx={{
                      borderRadius: '15px',
                      width: '100%',
                    }}
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    onBlur={() => validateField('email', formData.email)}
                    error={error.email}
                  />
                  {/* {error && <FormHelperText>{error?.email}</FormHelperText>} */}
                </FormControl>
                <FormControl>
                  <PhoneInput
                    className='phone-input'
                    placeholder='Phone'
                    style={{
                      borderColor: error?.phone ? 'red' : '',
                    }}
                    value={formData.phone}
                    onChange={(value) => {
                      handleInputChange('phone', value);
                    }}
                    onBlur={() => validateField('phone', formData.phone)}
                  />
                  {/* {error && (
                    <FormHelperText style={{ color: 'red' }}>
                      {error?.phone}
                    </FormHelperText>
                  )} */}
                </FormControl>
              </Box>
              <FormControl>
                <OutlinedInput
                  id='my-input'
                  aria-describedby='my-helper-text'
                  placeholder='Please describe the reason for including this provider on this mission.'
                  multiline
                  rows={3}
                  sx={{
                    borderRadius: '15px',
                    width: '100%',
                  }}
                  value={formData.params}
                  onChange={(e) => handleInputChange('params', e.target.value)}
                  onBlur={() => validateField('params', formData.params)}
                  error={error?.params}
                />
                {/* {error && (
                <FormHelperText>{error?.params}</FormHelperText>
              )} */}
              </FormControl>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: '20px',
              }}
            >
              <TrText
                id='modal-modal-description'
                sx={{
                  fontSize: FontSizes.fontSixteen,
                  fontFamily: Fonts.Poppins,
                }}
                title={
                  'Would you recommend this Provider into Trmeric community?'
                }
              />

              <Box sx={{ ml: '20px', display: 'flex', flexDirection: 'row' }}>
                <FormControlLabel
                  value='yes'
                  control={
                    <Radio
                      checked={selectedRecommend === 'yes'}
                      onChange={handleRecChange}
                      value='yes'
                      name='radio-buttons'
                      inputProps={{ 'aria-label': 'Yes' }}
                      style={{ display: 'none' }}
                    />
                  }
                  label={
                    <Button
                      variant={
                        selectedRecommend === 'yes' ? 'contained' : 'outlined'
                      }
                      sx={{
                        color: Colors.black,
                        textTransform: 'none !important',
                        fontFamily: Fonts.Poppins,
                        fontWeight: '500',
                        backgroundImage:
                          selectedRecommend === 'yes'
                            ? Colors.gradient
                            : Colors.gradientLight,
                      }}
                      onClick={() => handleRecButtonClick('yes')}
                    >
                      Yes
                    </Button>
                  }
                />
                <FormControlLabel
                  value='no'
                  control={
                    <Radio
                      checked={selectedRecommend === 'no'}
                      onChange={handleRecChange}
                      value='no'
                      name='radio-buttons'
                      inputProps={{ 'aria-label': 'No' }}
                      style={{ display: 'none' }}
                    />
                  }
                  label={
                    <Button
                      variant={
                        selectedRecommend === 'no' ? 'contained' : 'outlined'
                      }
                      sx={{
                        color: Colors.black,
                        textTransform: 'none !important',
                        fontFamily: Fonts.Poppins,
                        fontWeight: '500',
                        backgroundImage:
                          selectedRecommend === 'no'
                            ? Colors.gradient
                            : Colors.gradientLight,
                      }}
                      onClick={() => handleRecButtonClick('no')}
                    >
                      No
                    </Button>
                  }
                />
              </Box>
            </Box>
            <Box sx={{ width: '100%', mt: '15px' }}>
              <hr />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                gap: 2,
                mt: '15px',
              }}
            >
              <Button
                sx={{
                  color: Colors.black,
                  bgcolor: Colors.lightGrey,
                  textTransform: 'none !important',
                  fontFamily: Fonts.Poppins,
                  fontWeight: '500',
                }}
                onClick={() => {
                  handleClear();
                  setError({});
                }}
              >
                Clear
              </Button>
              <Button
                sx={{
                  color: Colors.black,
                  fontFamily: Fonts.Poppins,
                  fontWeight: '500',
                  backgroundImage: Colors.gradient,
                  '&:hover': {
                    bgcolor: Colors.primary,
                  },
                  textTransform: 'none !important',
                }}
                onClick={() => {
                  handleSubmit();
                }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={successStyle}>
          <TrText id='modal-modal-title' variant='h6' component='h2'>
            Provider Added Successfully!
          </TrText>
        </Box>
      </Modal>
    </Box>
  );
}

export default AddProvider;
