import React from 'react';
import { SignUpContainer, Form, Title, Input, Anchor, Button } from './Style.js';
import Typography from '@mui/material/Typography';

function SignUp({onSubmit, image, signIn, handleBlur, errors, handleChange, values, resetForm}) {
    return (
        <SignUpContainer >
            <Form onSubmit={onSubmit} id="signup" >
                <img src={image} alt="" />
                <Title>Create Account</Title>
                <Input type='text' placeholder='First Name' name="first_name" value={values.first_name} onBlur={handleBlur} onChange={handleChange} />
                {errors.first_name ? (
                    <Typography sx={{ color: 'red' }}>
                        {errors.first_name}
                    </Typography>
                ) : null}
                <Input type='text' placeholder='Last Name' name="last_name" value={values.last_name} onBlur={handleBlur} onChange={handleChange} />
                {errors.last_name ? (
                    <Typography sx={{ color: 'red' }}>
                        {errors.last_name}
                    </Typography>
                ) : null}
                <Input type='email' placeholder='Email' name="email" value={values.email} onBlur={handleBlur} onChange={handleChange} />
                {errors.email ? (
                    <Typography sx={{ color: 'red' }}>
                        {errors.email}
                    </Typography>
                ) : null}
                <Input type='password' placeholder='Password' name="password" value={values.password} onBlur={handleBlur} onChange={handleChange} />
                {errors.password ? (
                    <Typography sx={{ color: 'red' }}>
                        {errors.password}
                    </Typography>
                ) : null}
                <Button type="submit">Sign Up</Button>
                <br />
                <Button type="reset" onClick={() => resetForm()} >Reset</Button>
            </Form>
        </SignUpContainer>
    )
}

export default SignUp