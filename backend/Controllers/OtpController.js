import otpGenerator from 'otp-generator';

async function OTP(req,res){
let result = await otpGenerator.generate(6,{lowerCaseAlphabets:false,upperCaseAlphabets:false,specialChars:false});
res.status(200).send(result);
}


export { OTP};