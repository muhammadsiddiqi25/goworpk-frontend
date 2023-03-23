import React, { useEffect }  from 'react';
import data from '../../data/DashboardData';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import '../../assets/styles/Dashboard.css';
import { useDispatch } from 'react-redux';
import { getCandidateDashboardData } from '../../redux/dashboard/action';
const DashboardBox = styled(Box)(({ theme }) => ({
  backgroundColor: '#F4F4F4',
  margin: '30px auto',
  borderRadius: '25px',
  width: '347px',
  height: '285px',
  left: '255px',
  top: '178px'
}))

const Dashboard = () => {
  const dispatch= useDispatch();
  const isNonMobile = useMediaQuery('(max-width:1000px)')
  console.log(isNonMobile)
  console.log("data is: ", data);
  useEffect(()=>{
    dispatch(getCandidateDashboardData())
  })

  return (
    <Box
    className="box"
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '1000%',
        margin: isNonMobile ? '20px' : '20px 100px'
      }}
    >
      <DashboardBox>
        <h2> {data.views} </h2>
        <Typography variant='h2' fontWeight={400} fontSize={40} color='#000000'>Profile Views</Typography>
        
      </DashboardBox>

      <DashboardBox>
        <h2 > {data.no_of_offer} </h2>
        <Typography variant='h2' fontWeight={400} fontSize={40} color='#000000'>No of Offers</Typography>

      </DashboardBox>

      <DashboardBox>
        <h2> {data.certificates} </h2>
        <Typography variant='h2' fontWeight={400} fontSize={40} color='#000000'>Certificates</Typography>
      </DashboardBox>
    </Box>
  );
}

export default Dashboard