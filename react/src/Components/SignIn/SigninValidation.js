
import * as Yup from 'yup';

export const SigninValidation = Yup.object({
    email:Yup.string().max(100).required('* Please enter your email'),
    password:Yup.string().max(100).required('* Please enter your password')
})