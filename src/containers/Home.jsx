import React from 'react'
import '../assets/styles/Home.css'
import { Button } from '@mui/material'
import { useMediaQuery, Typography } from '@mui/material'
import { Box } from '@mui/system'
import FlakyIcon from '@mui/icons-material/Flaky';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import candidate_points from '../assets/images/candidate_points.jpg'
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import AssistantIcon from '@mui/icons-material/Assistant';
import TextField from '@mui/material/TextField'
import SmallButton from '../components/custom-mui-comp/Button'
import Footer from '../components/Footer'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useNavigate } from 'react-router'
const Home = () => {
  const navigate  = useNavigate()
  const isNonMobile = useMediaQuery('(max-width:730px)')
  console.log(isNonMobile)
  return (
    <div className='homepage'>
      <div className='blue-back-circle back-circle'></div>
      <div className='red-back-circle back-circle'></div>
      <div className='home-back'>
      </div>
      <div className='home-content'>
        <h1>Build a <span style={{color:'rgb(5,247,85)'}}>Profound Team</span> For your business.</h1>
        <p>We help you hire highly skilled people in just a day. Send offers to more than 500 applicants daily and establish your perfect team.</p>
        <div className='join'>
          <div className='lines'></div>
          <h4>Join as</h4>
          <div className='lines'></div>
        </div>
        <div className='home-buttons'>
          <Button variant='contained'
          onClick = {()=>{
            navigate('/signup')
          }}
            sx={
              !isNonMobile ?
                {
                  background: ' rgb(5,247,85)',
                  background: 'linear-gradient(50deg, rgba(5,247,85,1) 0%, rgba(0,255,179,1) 100%)',
                  fontSize: '20px',
                  padding: '10px 40px',
                  color: 'white',
                  margin: 'auto 30px'
                } : {
                  fontSize: '15px',
                  padding: '5px 20px',
                  color: 'white',
                  margin: 'auto 0px'
                }}
          >
            Employer
          </Button>
          <Button variant='contained'
            className='home-button'
            onClick = {()=>{
              navigate('/signup')
            }}
            sx={
              !isNonMobile ?
                {
                  background: ' rgb(5,247,85)',
                  background: 'linear-gradient(50deg, rgba(5,247,85,1) 0%, rgba(0,255,179,1) 100%)',
                  fontSize: '20px',
                  padding: '10px 40px',
                  color: 'white',
                  margin: 'auto 30px'
                } : {
                  fontSize: '15px',
                  padding: '5px 20px',
                  color: 'white',
                  margin: 'auto 10px'
                }}
          >
            Candidate
          </Button>
        </div>
      </div>
      <Box className="employer-points-div">
        <Typography variant="h3" fontWeight='700' textAlign='center'>GoWork For Employers</Typography>
        <Box className='employer-points'>
          <Box className='employer-points-card'>
            <FlakyIcon className='employer-points-icon' sx={{ fontSize: '60px' }} />
            <Typography variant='h5'>Fast and Easy</Typography>
            <p>Avoid unwanted applications and choose the candidates of your desire.</p>
          </Box>
          <Box className='employer-points-card'>
            <AcUnitIcon className='employer-points-icon' sx={{ fontSize: '60px' }} />
            <Typography variant='h5'>Free Trial</Typography>
            <p>You can start with a free 6-month trial.</p>
          </Box>
          <Box className='employer-points-card'>
            <AssuredWorkloadIcon className='employer-points-icon' sx={{ fontSize: '60px' }} />
            <Typography variant='h5'>Secured Payment</Typography>
            <p>The offers from your account will not be deducted until they are accepted by the candidate.</p>
          </Box>
        </Box>
      </Box>
      <div
      style={{
        padding:'30px',
        backgroundColor:'#f4f4f4'
      }}
      >
        <Typography variant="h3" fontWeight='700' textAlign='center'>GoWork For Candidates</Typography>
        
        <div className='cand-points-main-div'>
          <div>
            <img src={candidate_points} className='candidate-points-picture' />
          </div>
          <div className='cand-points-div'>
            <div style={{
              fontSize:'30px',
              fontWeight:'700'
            }}>Are you a recent graduate? Let us help you.</div>
            <div className='cand-points'>
              <DocumentScannerIcon className='candidate-icons'
                sx={{
                  fontSize: '60px',
                  color: 'rgba(5,247,85,1)',
                  margin: '0px 10px'
                }}
              />
              <p >create a professional CV that would make an adequate impact on the employer's selection</p>
            </div>
            <div className='cand-points'>
              <WorkspacePremiumIcon sx={{
                fontSize: '60px',
                color: 'rgba(5,247,85,1)',
                margin: '0px 10px'
              }} />
              <p>Get a skilful certification and stand out on the job market</p>
            </div>
            <div className='cand-points'>
              <AssistantIcon sx={{
                fontSize: '60px',
                color: 'rgba(5,247,85,1)',
                margin: '0px 10px'
              }} />
              <p>Get the offers from the Top companies</p>
            </div>
          </div>
        </div>
      </div>
      <div
      style={{
        margin:'70px auto'
      }}>
        <Typography variant="h3" fontWeight='700' textAlign='center'>Contact Us</Typography>
        <div className='contact-form-div'>
          <div className='contact-info'>
            <div><Typography variant='h6' fontWeight='600' >Address</Typography>
              <p>Main Boulevard, Sector A, DHA Phase2, Islamabad, Pakistan</p></div>
            <div><Typography variant='h6' fontWeight='600' >Phone</Typography>
              <p>+92 342 2836383</p></div>
            <div><Typography variant='h6' fontWeight='600' >Email</Typography>
              <p>support@gowork.pk</p>  </div>
          </div>
          <form className='contact-form'>
                <TextField
                  id=""
                  label="Name"
                  variant='filled'
                  sx={{width:'100%'}}
                />
                <TextField
                  id=""
                  label="Email Address"
                  variant='filled'
                  sx={{width:'100%'}}
                />
              <TextField
                id=""
                label="Subject"
                variant='filled'
                sx={{width:'100%'}}
              />
              <TextField label='Message'
                multiline
                rows={4}
                sx={{width:'100%'}}
                />
                <SmallButton variant='contained'>Submit</SmallButton>
          </form>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home