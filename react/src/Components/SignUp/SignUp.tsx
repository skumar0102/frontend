import React,{useContext} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Navbar from '../Navbar/Navbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Formik} from 'formik';
import { SignupValidation } from './SignupValidation.js';
import { http } from '../../Config/axiosConfig.js';
import { ThemeContext } from '../../Context/Theme';
import { Theme,ThemesColors } from '../../Context/Enums';

function Copyright(props: any) {
  return (
    <>
<Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>


    
    </>

  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

function SignUp() {
  const { theme, setTheme } = useContext(ThemeContext);
  
  return (
    <div>
    <Navbar/>
    <Formik validationSchema={SignupValidation}
    initialValues={{first_name:"",last_name:"",email:"",password:""}}
    onSubmit={(values)=>{
          // alert(JSON.stringify(values));
          http.post("/register",values)
          .then((res)=>{
            if (res.status === 201) {
              console.log("Registration")
            }
          })
    }
  
  }
    >
      {({handleSubmit,handleBlur,handleChange,values,errors,touched,resetForm})=>{
          return(
            <>
                   <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" sx={{
        boxShadow:3,
        borderRadius:2,
        alignItems:'center',
      }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form"  onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="first_name"
                  
                  fullWidth
                  id="firstName"
                  label="First Name"
                  value={values.first_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />{
                  errors.first_name && touched.first_name ? (
                    <Typography sx={{color:'red'}}>
                      {errors.first_name}
                    </Typography>
                  ) : null
                }
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="last_name"
                  autoComplete="family-name"
                  value={values.last_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {
                  errors.last_name && touched.last_name ? (
                    <Typography sx={{color:'red'}}>
                      {errors.last_name}
                    </Typography>
                  ) : null
                }
              </Grid>
              <Grid item xs={12}>
                <TextField
                  
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {
                  errors.email && touched.email ? (
                    <Typography sx={{color:'red'}}>
                      {errors.email}
                    </Typography>
                  ) : null
                }
              </Grid>
              <Grid item xs={12}>
                <TextField
                  
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {
                  errors.password && touched.password ? (
                    <Typography sx={{color:'red'}}>
                      {errors.password}
                    </Typography>
                  ) : null
                }
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2,backgroundColor:'#9c27b0' }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
            </>
          )
      }}

    </Formik>
      
    </div>
  )
}

export default SignUp