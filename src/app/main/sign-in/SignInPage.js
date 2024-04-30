/* eslint-disable prettier/prettier */
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import _ from '@lodash';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import loginImg from "../../../images/Full-logo-01.jpg";
import jwtService from '../../auth/services/jwtService';
import {BrowserView, MobileView} from 'react-device-detect';
//import { GoogleLogin } from '@react-oauth/google';

const schema = yup.object().shape({
login: yup
  .string()
  .required("username/email is required")
  .min(3, "must be more than 1 characters")
  .max(100, "must be less than 100 character"),
password: yup
  .string()
  .required("pssword is required")
  .min(8, "must be more than 8 characters")
  .max(30, 'must be less than 30 character')
  .matches(
    "^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$",
    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
  ),
});

const defaultValues = {
  login: '',
  password: '',
};

function SignInPage() {
  const { control, formState, handleSubmit, setError, setValue } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;

  function onSubmit({ login, password }) {
    jwtService
      .signInWithEmailAndPassword(login, password)
      .then((user) => {
      })
      .catch((_errors) => {
        _errors.forEach((error) => {
          setError(error.type, {
            type: 'manual',
            message: error.message,
          });
        });
      });
  }
  const responseMessage = (response) => {
    console.log(response);
};
const errorMessage = (error) => {
    console.log(error);
};
  return (
    <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-1 min-w-0">
      
      <Paper className=" sm:mt-32 h-full sm:h-auto md:flex md:items-center md:justify-end w-full sm:w-auto md:h-full md:w-1/2 py-8 px-8 sm:p-48 md:p-64 sm:rounded-2xl md:rounded-none sm:shadow md:shadow-none ltr:border-r-1 rtl:border-l-1">
      <div className='md:hidden lg:hidden pt-24'></div>
      <img className="object-cover md:hidden lg:hidden pb-120"  src={loginImg} alt="s" />
        <div className="w-full max-w-320 sm:w-320 mx-auto sm:mx-0">
        {window.screen.width > 1280 &&
        <svg
        className="absolute inset-0 pointer-events-none"
        viewBox="0 0 960 540"
        width="70%"
        height="100%"
        preserveAspectRatio="xMidYMax slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Box
          component="g"
          sx={{ color: 'primary.svg' }}
          className="opacity-20"
          fill="none"
          stroke="currentColor"
          strokeWidth="70"
        >
          <circle r="244" cx="78" cy="29" />
       
        </Box>
      </svg>
        }

          <Typography style={{color: "#f4b231"}}
          className="mt-10 text-4xl font-extrabold tracking-tight leading-tight">
            Sign In
          </Typography>

          <form
            name="loginForm"
            noValidate
            className="flex flex-col justify-center w-full mt-32"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Controller
              name="login"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  className="mb-24"
                  label="username/email"
                  type="text"
                  error={!!errors.login}
                  helperText={errors?.login?.message}
                  variant="outlined"
                  required
                  fullWidth
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  className="mb-24"
                  label="Password"
                  type="password"
                  error={!!errors.password}
                  helperText={errors?.password?.message}
                  variant="outlined"
                  required
                  fullWidth
                  autoComplete="off"
                />
              )}
            />  

            <Button
              variant="contained"
              color="secondary"
              className=" w-full mt-16"
              aria-label="Sign in"
              autoComplete="off" 
              type="submit"
              size="large"
            >
              Sign in
            </Button>
          </form>
        </div>

      </Paper>

      <Box
        className="relative hidden md:flex flex-auto items-center justify-center h-full  lg:px-112 overflow-hidden"
        sx={{ backgroundColor: 'primary.main' }}
      >
        <svg
          className="absolute inset-0 pointer-events-none"
          viewBox="0 0 960 540"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMax slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Box
            component="g"
            sx={{ color: 'primary.light' }}
            className="opacity-20"
            fill="none"
            stroke="currentColor"
            strokeWidth="70"
          >
            <circle r="234" cx="890" cy="491" />
          </Box>
        </svg>
        <Box
          component="svg"
          className="absolute -top-64 -right-64 opacity-20"
          sx={{ color: 'primary.light' }}
          viewBox="0 0 220 192"
          width="220px"
          height="192px"
          fill="none"
        >

        </Box>

        <div className="z-100 relative py-30 px-0 w-full max-w-2xl">
        <img className="object-cover"  src={loginImg} alt="s" />
        <div style={{color:"#798287",display:'inline'}}className="text-xl px-6 py-10 px-0">
        Let us help you to Show{" "}
        </div> 
        <div style={{color:"#f4b231",display:'inline'}}className="text-xl py-10 px-0">
         the world{" "}
        </div> 
        <div style={{color:"#798287",display:'inline'}}className="text-xl py-10 px-0">
        your unique side.
        </div> 
        </div>
      
      </Box>
      
    </div>
  );
}

export default SignInPage;
