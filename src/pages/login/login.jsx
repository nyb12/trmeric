import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useLocation, useNavigate } from 'react-router-dom';
import Tutorial from '../dashboard/onBoardingTutorial/Tutorial';
import React, { useEffect } from 'react';
import { login } from '../../api/ApiCalls';
import ReactGA from 'react-ga4';

export const initGA = () => {
  ReactGA.initialize('G-46H3DEL1ZB');
};
export default function Login() {
  const [open, setOpen] = React.useState(false);

  const location = useLocation();

  useEffect(() => {
    const { search } = location;
    const params = new URLSearchParams(search);

    ReactGA.event({
      category: 'UTM',
      action: 'Visit',
      label: `Source: ${params.get('utm_source')}, Medium: ${params.get(
        'utm_medium'
      )}, Campaign: ${params.get('utm_campaign')}`,
    });
  }, [location]);

  useEffect(() => {
    initGA();
    logPageView();
  }, []);

  ReactGA.event(window.location.pathname);

  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const loggedIn = async () => {
    const bodyData = {
      username: 'frontend_user',
      password: '1w`Mxc<67b%A',
    };
    const response = await login(bodyData);
    localStorage.setItem('token', response?.access);
    // localStorage.setItem('login', true);
  };
  useEffect(() => {
    let login = localStorage.getItem('token');
    if (login) {
      navigate('/');
    }
  }, []);

  const handleSubmit = (event) => {
    loggedIn();
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });

    // Open the modal when the form is submitted
    handleOpen();
  };

  return (
    <Container component='main' sx={{ bgcolor: 'white' }} maxWidth='xs'>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* <Typography component='h1' variant='h5'>
          Sign in
        </Typography> */}
        <Box
          component='form'
          // onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1 }}
        >
          {/* <TextField
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            autoFocus
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
          />
          <FormControlLabel
            sx={{ color: 'black' }}
            control={<Checkbox value='remember' color='primary' />}
            label='Remember me'
          /> */}
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
          >
            Login In
          </Button>
          <Tutorial
            open={open}
            handleOpen={handleOpen}
            handleClose={handleClose}
            navigate={navigate}
          />

          {/* <Grid container>
            <Grid item xs>
              <Link href='#' variant='body2'>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href='#' variant='body2'>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid> */}
        </Box>
      </Box>
    </Container>
  );
}
