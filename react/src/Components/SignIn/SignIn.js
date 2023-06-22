import React from 'react';
import {SignInContainer, Form, Title, Input, Anchor, Button} from './Style.js';
import Typography from '@mui/material/Typography';

function SignIn({onSubmit, image, signIn, handleBlur, errors, handleChange, values, resetForm}) {
    return (
        <SignInContainer signinIn={signIn} id="signin">
            <Form onSubmit={onSubmit}>
                <img src={image} alt="" />
                <Title>Sign in</Title>
                <Input type='email' name="loginemail" value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur} placeholder='Email' />
                {errors.loginemail ? (
                    <Typography style={{ color: "red" }}>
                        {errors.loginemail}
                    </Typography>
                ) : null}
                <Input type='password' name="loginpassword" value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur} placeholder='Password' />
                {errors.loginpassword ? (
                    <Typography style={{ color: "red" }}>
                        {errors.loginpassword}
                    </Typography>
                ) : null}
                <Anchor href='#'>Forgot your password?</Anchor>
                <Button type="submit" >Sigin In</Button>
                <br />
                <Button type="button" onClick={() => resetForm()} >Reset</Button>
            </Form>
        </SignInContainer>
    )
}

export default SignIn