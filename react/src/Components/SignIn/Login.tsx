import  React,{useContext} from 'react';
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
import { http } from '../../Config/axiosConfig.js';
import {Formik} from 'formik'
import {SigninValidation} from './SigninValidation.js';
import {useNavigate} from 'react-router-dom';
import { ThemeContext } from '../../Context/Theme'; 
import { Theme,ThemesColors } from '../../Context/Enums';

function Copyright(props: any) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'All Rights Reserved. Designed, Developed and Powered by IDS.'}
        <Link color="inherit" href="https://ids-technologies.in/">
          IDS INFOTECH LTD.
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  // TODO remove, this demo shouldn't need to reset the theme.
  const defaultTheme = createTheme();

function Login() {
  const { theme, setTheme } = useContext(ThemeContext);

  const navigator = useNavigate();

  return (
    <div style={{backgroundColor: theme === Theme.Light ? ThemesColors.light.Bg :ThemesColors.dark.Bg,height:'100vh'}}>
        <Navbar/>

        <Formik validationSchema={SigninValidation}
        initialValues={{email:"",password:""}}
        onSubmit={(values)=>{
          // alert(JSON.stringify(values));
          http.post("/auth/login",values)
          .then((res)=>{
            if(res.status === 200){
              localStorage.setItem('token',res.data.token);
              navigator("/dashboard");
            }
          })

        }}
        >

        {({handleSubmit,handleBlur,handleChange,values,errors,touched})=>{
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
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1,color: theme === Theme.Light ? ThemesColors.light.textColor :ThemesColors.dark.textColor,
          }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
              <TextField
              sx={{color:'white'}}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={values.email}
              onChange={handleChange}
            onBlur={handleBlur}
            />
            {errors.email ? (
            <Typography style={{color:"red"}}>
              {errors.email}
            </Typography>
          ): null}
              </Grid>
              </Grid>
              <Grid container spacing={2}>
              <Grid item xs={12} >
              <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={values.password}
              onChange={handleChange}
            onBlur={handleBlur}
            />
              {errors.password  ? (
            <Typography style={{color:"red"}}>
              {errors.password}
            </Typography>
          ): null}
              </Grid>
            </Grid>
            
            
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2,backgroundColor:'#9c27b0' }}
            >
              Sign In
            </Button>
            <Grid container >
              <Grid item xs>
                <Link href="#" sx={{textDecoration:'none'}}  variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Grid item>
                <Link href="#" sx={{textDecoration:'none'}}  variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
            </>
          )
        }}
        
    </Formik>

    </div>
  )
}

export default Login