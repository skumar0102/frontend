import React, { useState } from 'react';
import * as Components from './Style.js';
import Navbar from '../Navbar/Navbar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import { Formik } from 'formik';
import { SigninValidation, SignUpValidation } from './YupValidation.js';
import { http } from '../../Config/axiosConfig.js';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import New2 from './SignUp.js';
import image from '../../img/logo.gif';
import Footer from '../Footer/Footer.js';
import New3 from './SignIn.js';
import Slider from './Slider.js';
const init1 = { loginemail: '', loginpassword: '' }
const init2 = { first_name: '', last_name: '', email: '', password: '' }
function New() {
    const [signIn, toggle] = useState(true);
    const navigator = useNavigate();
    return (
        <>
            <Components.mydiv>
                <Navbar />
                <Formik validationSchema={signIn ? SigninValidation : SignUpValidation}
                    initialValues={signIn ? init1 : init2}
                    onSubmit={(values: any) => {
                        signIn? http.post("/auth/login", {email: values.loginemail, password: values.loginpassword})
                            .then((res) => {
                                if (res.status === 200) {
                                    localStorage.setItem('token', res.data.token);
                                    Swal.fire({
                                        toast: true,
                                        position: 'bottom-end',
                                        icon: 'success',
                                        title: 'Signed in successfully',
                                        showConfirmButton: false,
                                        timer: 3000,
                                        // background:'#4aa3d1',
                                        timerProgressBar: true,
                                        didOpen: (toast) => {
                                            toast.addEventListener('mouseenter', Swal.stopTimer)
                                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                                        }
                                    })

                                    navigator("/dashboard");
                                }else if(res.status === 401 || res.status === 400 || res.status === 404){
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Oops...',
                                        text: 'Something went wrong!',
                                        footer: '<a href="">Why do I have this issue?</a>'
                                      })
                                }
                            })
                        : http.post("/register", values)
                            .then((res) => {
                                if (res.status === 201) {
                                    Swal.fire({
                                        toast: true,
                                        position: 'bottom-end',
                                        icon: 'success',
                                        background:'#4aa3d1',
                                        title: 'Registration in successfully Done !',
                                        showConfirmButton: false,
                                        timer: 3000,
                                        timerProgressBar: true,
                                        didOpen: (toast) => {
                                            toast.addEventListener('mouseenter', Swal.stopTimer)
                                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                                        }
                                    })
                                }
                            })
                    }}
                >

                    {({ handleSubmit, handleBlur, handleChange, values, errors, resetForm }) => {
                        return (
                            <>
                                <Components.Container value={signIn} >
                                    <New2 onSubmit={handleSubmit} image={image} signIn={signIn} handleBlur={handleBlur} errors={errors} handleChange={handleChange} values={values} resetForm={resetForm}/>
                                    <New3 onSubmit={handleSubmit} image={image} signIn={signIn} handleBlur={handleBlur} errors={errors} handleChange={handleChange} values={values} resetForm={resetForm} />
                                    <Slider signIn={signIn} toggle={toggle} />
                                </Components.Container>
                            </>
                        )
                    }}

                </Formik>
            </Components.mydiv>
            {/* <Footer />s */}
        </>
    )
}

export default New