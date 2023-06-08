
import * as Yup from 'yup';

export const SignupValidation = Yup.object({
    first_name:Yup.string().max(100).required('* Enter First Name'),
    last_name:Yup.string().max(100).required('* Enter Last Name'),
    email:Yup.string().max(100).required('* Please enter your email'),
    password:Yup.string().max(100).required('* Please enter your password')
})