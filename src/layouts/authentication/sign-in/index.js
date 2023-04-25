

import { useState } from 'react';

// react-router-dom components
import { Link, useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import Image from 'mui-image'
// @mui material components
import SignUpSEMS from "assets/images/SignUpSEMS.png"
import IconButton from '@mui/material/IconButton';
import { InputAdornment } from '@mui/material';
import { RiEyeCloseFill } from 'react-icons/ri';
import { IoEye } from 'react-icons/io5';
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import Card from '@mui/material/Card';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Grid';
import MuiLink from '@mui/material/Link';
import SignInBG from 'assets/images/SignInBG.jpg';

// @mui icons
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';

// Material Dashboard 2 React components
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';
import MDInput from 'components/MDInput';
import MDButton from 'components/MDButton';

// Authentication layout components
import BasicLayout from 'layouts/authentication/components/BasicLayout';

import {
     userLogin,
     //  getRoleMenuAccessById,
} from 'utility/apiService';

function SignIn() {
     const navigate = useNavigate();

     const [rememberMe, setRememberMe] = useState(false);
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');

     const [emailError, setEmailError] = useState('');
     const [passwordError, setPasswordError] = useState('');

     const [showPassword, setShowPassword] = useState(false);
     const handleClickShowPassword = () => setShowPassword(!showPassword);
     const handleMouseDownPassword = () => setShowPassword(!showPassword);
     const handleSetRememberMe = () => setRememberMe(!rememberMe);

     const handleSubmit = async (e) => {
          if (email === '') {
               setEmailError('Email is required');
          } else {
               setEmailError('');
          }
          if (password === '') {
               setPasswordError('Password is required');
          } else {
               setPasswordError('');
          }
          if (email !== '' && password !== '') {
               const body = {
                    email: email,
                    password: password,
               };
               try {
                    const response = await userLogin(body);
                    console.log(response);
                    if (response.ok) {
                         toast.success(response.data.message);
                         localStorage.setItem('sems-token', JSON.stringify(response.data.token));
                         return navigate('/dashboard');
                    } else {
                         toast.error(response.data.message);
                    }
               } catch (error) {
                    console.log(error);
               }
          }
     };

     return (
          <BasicLayout image={SignInBG}>
               <Card>
               <MDBox
          variant="gradient"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
          style={{
            background:'radial-gradient(circle, rgb(163, 0, 28) 0%, rgb(253, 83, 2) 38%, rgb(250, 176, 37) 100%)'
          }}
        >
       <Image src={SignUpSEMS} style={{
          width:'100%',
          height:'100%',
        }}/>
        </MDBox>
                    <MDBox pt={4} pb={3} px={3}>
                         <MDBox component='form' role='form'>
                              <MDBox mb={2}>
                                   <MDInput
                                        type='email'
                                        label='Email'
                                        fullwidth
                                        value={email}
                                        style={{width:'100%'}}
                                        onChange={(e) => setEmail(e.target.value)}/>
                                   {emailError ? (
                                        <p
                                             style={{
                                                  paddingLeft: '14px',
                                                  color: 'red',
                                                  fontSize: '14px',
                                             }}
                                             color='red'>
                                             {emailError}
                                        </p>
                                   ) : null}
                              </MDBox>
                              <MDBox mb={2}>
                                   <MDInput
                                        type={showPassword ? 'text' : 'password'}
                                        label='Password'
                                        fullwidth
                                        style={{width:'100%'}}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        InputProps={{
                                             // <-- This is where the toggle button is added.
                                             endAdornment: (
                                                  <InputAdornment position='end'>
                                                       <IconButton
                                                            aria-label='toggle password visibility'
                                                            onClick={handleClickShowPassword}
                                                            onMouseDown={handleMouseDownPassword}>
                                                            {showPassword ? <IoEye /> : <RiEyeCloseFill />}
                                                       </IconButton>
                                                  </InputAdornment>
                                             ),
                                        }}></MDInput>
                                   {passwordError ? (
                                        <p
                                             style={{
                                                  paddingLeft: '14px',
                                                  color: 'red',
                                                  fontSize: '14px',
                                             }}
                                             color='red'>
                                             {passwordError}
                                        </p>
                                   ) : null}
                              </MDBox>
                  

               <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" 
              style={{backgroundColor:'#fab025',color:"white"}}
               fullWidth
                onClick={handleSubmit}>
                Sign In
              </MDButton>
            </MDBox>
                              <MDBox mt={3} mb={1} textAlign='center'>
                                   <MDTypography variant='button' color='text'>
                                        Don&apos;t have an account?{' '}
                                        <MDTypography
                                             component={Link}
                                             to='/authentication/sign-up'
                                             variant='button'
                                             color='lightorange'
                                             fontWeight='medium'
                                             textGradient>
                                             Sign up
                                        </MDTypography>
                                   </MDTypography>
                              </MDBox>
                         </MDBox>
                    </MDBox>
               </Card>
               <Toaster />
          </BasicLayout>
     );
}

export default SignIn;
