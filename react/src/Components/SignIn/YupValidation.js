
import * as Yup from 'yup';

export const SigninValidation = Yup.object({

    loginemail:Yup.string().max(100).required('* Please enter your email'),
    loginpassword:Yup.string().max(100).required('* Please enter your password')
    
})


export const SignUpValidation = Yup.object({

    first_name:Yup.string().max(100).required('* Please enter First Name'),
    last_name:Yup.string().max(100).required('* Please enter Last Name'),
    email:Yup.string().max(100).required('* Please enter your email'),
    password:Yup.string().max(100).required('* Please enter your password')
    
})