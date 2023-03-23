import { Box,Typography } from '@mui/material'
import jwtDecode from 'jwt-decode'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import SmallButton from '../components/custom-mui-comp/Button'
import { verify } from '../redux/auth/action'

const Verify = () => {
  const {id,key} = useParams()
  const dispatch = useDispatch()
  return (
    <Box sx={{
      display:'flex',
      flexDirection:'column',
      maxWidth:'600px',
      margin:'auto',
      textAlign:'center',
      alignItems:'center',
      justifyContent:'center',
      minHeight:'85vh',
    }}>
    <Box>
        <Typography variant = 'h4' fontWeight={700}>Welcome to GoWork.pk</Typography>
        <Typography variant = 'h5'>Click the button below to verify your email!</Typography>
        <SmallButton variant = 'contained' onClick={()=>{dispatch(verify({id,key}))}}>Verify</SmallButton>
        
    </Box></Box>
  )
}

export default Verify