import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import SmallButton from '../components/custom-mui-comp/Button'
import { textAlign } from '@mui/system'
import { useDispatch } from 'react-redux'
import { resend_verification_email, verify } from '../redux/auth/action'
import { Box } from '@mui/system'
import Typography from '@mui/material/Typography'
const Verification = () => {
  const dispatch = useDispatch()
  return (
    <Box sx={{
      display:'flex',
      flexDirection:'column',
      maxWidth:'600px',
      margin:'auto',
      textAlign:'center',
      alignItems:'center',
      justifyContent:'center'
    }}>
      <Box sx={{
        margin:'60px auto 10px auto'
      }}>
            <Typography variant  = 'h4' 
            sx={{
              margin:'10px auto 30px auto'
            }}
            >A verification Email has been sent to your registered email address. Please use the provided link to verify the email.</Typography>
            <Typography variant  = 'h5' 
            sx={{
              margin:'10px auto 30px auto'
            }}
            >The email is only valid for one hour.</Typography>
            <p style={{
              margin:'10px auto 30px auto'
            }}>Haven't recieved email yet?</p>
            <SmallButton variant = 'contained'
            onClick={()=>{
              dispatch(resend_verification_email())
            }}
            >Resend Email</SmallButton>
      </Box>
    </Box>
  )
}

export default Verification