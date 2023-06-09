import logo from './logo.svg';
import {useEffect} from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react';
import theme from './theme';

import './App.css';
import jwtDecode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { getTokens } from './redux/auth/action';



import Login from './containers/Login';
import Home from './containers/Home';
import GeneralRoutes from './PrivateRoutes/GeneralRoutes';
import Signup from './containers/Signup';
import Verification from './containers/Verification';
import Navbar2 from './containers/Navbar2';
// import Dashboard from './containers/Candidate/Dashboard';
import PrivateRoutes, { CandidateRoutes, EmployerRoutes,AdminRoutes } from './PrivateRoutes/RestrictedRoutes';
import Packages from './containers/Employer/Packages';
import FreeTrial from './containers/Employer/FreeTrial';
import Certificates from './containers/Candidate/Certificates';
import Offers from './containers/Candidate/Offers';
import ComingSoon from './components/ComingSoon';
import ResetPassword from './containers/Candidate/resetPassword';
import Verify from './containers/Verify';
import About from './containers/About';
import CandidateProfilePicture from './containers/Candidate/CandidateProfilePicture';
import PersonalInfo from './containers/Candidate/PersonalInfo';
import Cv_Builder from './containers/Candidate/Cv_Builder';
import EducationInfo from './containers/Candidate/EducationInfo';
import CandidateCertifications from './containers/Candidate/CandidateCertifications';
import Experience from './containers/Candidate/Experience';
import CandidateSkills from './containers/Candidate/CandidateSkills';
import CandidateAbout from './containers/Candidate/CandidateAbout';
import CadidateDashboard from './containers/Candidate/CadidateDashboard';
import Chat from './components/ChatBox/Chatbox';
import NothingShow from './components/NothingShow';
import EmployerProfile from './containers/Employer/EmployerProfile';
import Logout from './containers/Logout';
import CandidateSearch from './containers/Employer/CandidateSearch';
import ViewCandidates from './containers/Employer/ViewCandidates';
import SendOffer from './containers/Employer/SendOffer';
import AdminLogin from './containers/Admin/AdminLogin';
import SendOfferForm from './containers/Employer/SendOfferForm';
import AdminDashboard from './containers/Admin/AdminDashboard';




function App() {
  const dispatch = useDispatch()
  function diff_minutes(dt2, dt1) 
 {

  var diff =(dt2 - dt1) / 1000;
  diff /= 60;
  return Math.round(diff);
  
 }
  useEffect(() => {
   const accessToken = localStorage.getItem('accessToken')
   const refreshToken = localStorage.getItem('refreshToken')
   if(accessToken){
      const access_expiry= jwtDecode(accessToken).exp
      const refresh_expiry = jwtDecode(refreshToken).exp
      const current_time = Date.parse(new Date())
      const access_remaining_time = diff_minutes(access_expiry,current_time/1000)  
      const refresh_remaining_time = diff_minutes(refresh_expiry,current_time/1000) 
      if(current_time/1000-refresh_expiry < -600){
        if(current_time/1000-access_expiry > -50){
          dispatch(getTokens({refreshToken:localStorage.getItem('refreshToken')}))
        }
      }
   }
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          {localStorage.getItem('accessToken') ? <Navbar2 /> : null}
          <Routes>
          <Route exact path='/logout' element={<Logout />} />
            <Route path='/' element={<GeneralRoutes />} >
              <Route exact path='/' element={<Home />} />
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/signup' element={<Signup />} />
              <Route exact path='/about' element={<About />} />
              <Route exact path='/chat' element={<Chat />} />
              <Route exact path = '/admin/login' element = {<AdminLogin />} />
            </Route>
            <Route path='/' element={<PrivateRoutes />} >
              <Route path='/' element={<CandidateRoutes />}>
                <Route exact path='/candidate/verification' element={<Verification />} />
                <Route exact path='/candidate/reset-password' element={<ResetPassword />} />
                <Route exact path='/candidate/dashboard' element={<CadidateDashboard />} />
                <Route exact path='/candidate/certifications' element={<NothingShow />} />
                <Route exact path='/candidate/offers' element={<NothingShow />} />
                <Route exact path='/candidate/offers/:id' element={<NothingShow />} />
                {/* <Route exact path='/candidate/messages' element={<NothingShow />} /> */}
                <Route exact path='/candidate/profile' element={<CandidateProfilePicture />} />
                <Route exact path='/candidate/personal-info' element={<PersonalInfo />} />
                <Route exact path='/candidate/education-info' element={<EducationInfo />} />
                <Route exact path='/candidate/certifications-info' element={<CandidateCertifications />} />
                <Route exact path='/candidate/experience-info' element={<Experience />} />
                <Route exact path='/candidate/skills-info' element={<CandidateSkills />} />
                <Route exact path='/candidate/about' element={<CandidateAbout />} />
                <Route exact path='/candidate/cv-builder' element={<Cv_Builder />} />
                <Route exact path='/candidate/messages' element={<Chat />} />
              </Route>
              <Route path='/' element={<EmployerRoutes />}>
                <Route path='/employer/verification' element={<Verification />} />
                {/* <Route path='/employer/dashboard' element={<Dashboard />} /> */}
                <Route path='/employer/packages' element={<Packages />} />
                <Route path='/employer/packages/freetrial' element={<FreeTrial />} />
                <Route exact path = '/employer/profile' element = {<EmployerProfile />} />
                <Route exact path = '/employer/candidates' element = {<CandidateSearch />} />
                <Route exact path = '/employer/candidates/view/:user_id' element = {<ViewCandidates />} />
                <Route exact path = '/employer/candidates/sendoffer' element = {<SendOffer />} />
                <Route exact path = '/employer/candidates/sendoffer/send-offer-form' element = {<SendOfferForm />} />
                <Route exact path='/employer/messages' element={<Chat />} />
              </Route>
              <Route path='/' element={<AdminRoutes />}>
              <Route path='/admin/dashboard' element={<AdminDashboard />} />
              </Route>
              <Route exact path='/verification/:id/:key' element={<Verify />} />
            </Route>
            <Route path='*' element={<ComingSoon />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
