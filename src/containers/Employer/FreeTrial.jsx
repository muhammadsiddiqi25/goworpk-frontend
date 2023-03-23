import React, {useEffect} from 'react'
import Typography from '@mui/material/Typography'
import { useDispatch, useSelector } from 'react-redux'
import { getpricing } from '../../redux/pricing/action'
import { useNavigate } from 'react-router-dom'
import SmallButton from '../../components/custom-mui-comp/Button'
import { Box } from '@mui/system'
const FreeTrial = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getpricing())
    }, [])
    const {pricing} = useSelector((state)=>state.pricingReducer)
    console.log(pricing)
    if(pricing == ''){
        return null
    }
  return (
    <div style={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    }}>
        <Typography variant="h1" fontWeight={500} sx={{margin:'100px auto 20px auto'}}>Congratulations!!!</Typography>
        <Typography variant="h3" fontWeight={500} sx={{margin:'10px auto 50px auto'}}>You have got a free trial for {pricing[0]['duration']} days!!!</Typography>
        <Box 
        sx={{
            display:'flex',
            gap:'30px'
        }}
        >
        <SmallButton 
        variant = 'contained'
        onClick ={()=>{
            navigate('/employer/profile')
        }}>Continue Free</SmallButton>
        {/* <SmallButton 
        variant = 'contained'
        onClick ={()=>{
            navigate('/employer/packages')
        }}>Buy a Package</SmallButton> */}
        </Box>
    </div>
  )
}

export default FreeTrial