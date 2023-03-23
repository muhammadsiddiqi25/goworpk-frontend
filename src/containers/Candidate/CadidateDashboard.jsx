import React, { useEffect }  from 'react';
// import data from '../../data/DashboardData';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import '../../assets/styles/Dashboard.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCandidateDashboardData } from '../../redux/dashboard/action';




const DashboardBox = styled(Box)(({ theme }) => ({
  backgroundColor: '#F4F4F4',
  margin: '30px auto',
  borderRadius: '10px',
  width:'300px',
  padding:'20px',
  display:'flex',
  flexDirection:'column',
  alignItems:'center'
}))

const CadidateDashboard = () => {
  const dispatch= useDispatch();
  const isNonMobile = useMediaQuery('(max-width:1000px)')
  console.log(isNonMobile);
  useEffect(()=>{
    dispatch(getCandidateDashboardData())
  },[])
  const data = useSelector((state)=>state.dashboardReducer.data)
  console.log('data is ',data)
  return (
    <div className = 'dashboard-div'>
      <h1 className='dashoboard-welcome'
      >Welcome Back!</h1>
      <Box
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      margin: isNonMobile ? '20px' : '20px 100px'
    }}
    >
      <DashboardBox>
        <h2 className = 'dashboardHeading'> {data.profile_views} </h2>
        <Typography variant='h2' fontWeight={400} fontSize={40} color='#000000'>Profile Views</Typography>
        
      </DashboardBox>

      <DashboardBox>
        <h2 className = 'dashboardHeading'> {data.offers} </h2>
        <Typography variant='h2' fontWeight={400} fontSize={40} color='#000000'>No of Offers</Typography>

      </DashboardBox>

      <DashboardBox>
        <h2 className = 'dashboardHeading'> {data.certifications} </h2>
        <Typography variant='h2' fontWeight={400} fontSize={40} color='#000000'>Certificates</Typography>
      </DashboardBox>
    </Box>
    </div>
  );
}

export default CadidateDashboard