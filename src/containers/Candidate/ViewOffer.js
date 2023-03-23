import React, { useEffect } from 'react';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import '../../assets/styles/ViewOffer.css';
import ProfileImg from '../../assets/images/profile.jpeg';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { viewOfferReducer } from '../../redux/general/reducer';
import { getViewOfferData } from '../../redux/general/action';
import SmallButton from '../../components/custom-mui-comp/Button';



const ViewOfferProfile = ()=>{
     return(
         
          <div className='viewOffer-main' >   
          <div className='viewOffer-main-box1'>
            <img
                  src={ProfileImg}
                  className='profileImg'
                  alt='Certificate Image'
            /> 
        </div>

          <div className='viewOffer-box2'>
               <div className='viewOffer-box2-item1'>
               <h3>Senior Web Developer </h3>
               </div>

               <div className='viewOffer-box2-icons loc1'>
                    <MonetizationOnIcon /><h4> PKR 45,000- PKR-50,000</h4>
                    <AccessTimeFilledIcon className='same-style' /><h4>9:00AM - 10:00AM</h4>
                    <BusinessCenterRoundedIcon className='same-style' /><h4>Full Time</h4>
                    <BusinessCenterRoundedIcon className='same-style' /><h4>Hybrid</h4>
               </div>
               <div className='viewOffer-box2-icons loc2' >
                    <PersonPinCircleIcon /><h4>Full Address with country name and zip code</h4>

               </div>
               <div className='viewOffer-box2-icons loc3'>
                    <BusinessCenterRoundedIcon /><h4>PKR 5,000</h4>
                    <BusinessCenterRoundedIcon className='same-style'/><h4>PKR 6,000</h4>
                    <BusinessCenterRoundedIcon className='same-style'/><h4>Yes</h4>
               </div>

          </div>
            
            </div>
          
     )
}

const ViewOfferCardGeneral=()=>{
     return (
          <div className='viewOffer-main-1'>
               <div className='viewOffer-main-1-JD'><h4>Job Description:</h4></div>
               <div className='viewOffer-main-1-JE'>
               <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
               </div>
               
          </div>
     )
}
const ViewOfferJR=()=>{
     return (
          <div className='viewOffer-main-1'>
               <div className='viewOffer-main-1-JD'><h4>Job Requirements:</h4></div>
               <div className='viewOffer-main-1-JE'>
               <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
               </div>
               
          </div>
     )
}
const ViewOfferR=()=>{
     return (
          <div className='viewOffer-main-1'>
               <div className='viewOffer-main-1-JD'><h4>Responsibilities:</h4></div>
               <div className='viewOffer-main-1-JE'>
               <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
               </div>
               
          </div>
     )
}

const ViewOfferAbout=()=>{
     return (
          <div className='viewOffer-main-1'>
               <div className='viewOffer-main-1-JD'><h4>About ABC INC:</h4></div>
               <div className='viewOffer-main-1-JE'>
               <Button variant="outlined" color="success">
               Website <NorthEastIcon/>
               </Button>
               <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
               </div>
               
          </div>
     )
}

/**Main Callin View Offer Section */
const ViewOffer = ()=>{
     const dispatch = useDispatch();
     useEffect(()=>{
          //dispatch(getViewOfferData());
     })
     //const {viewOfferData} = useSelector(store => store.viewOfferReducer())
    return (
     <>
     <div>
          <div><ViewOfferProfile/></div>
          <div><ViewOfferCardGeneral/></div>
          <div><ViewOfferJR/></div>
          <div><ViewOfferR/></div>
          <div><ViewOfferAbout/></div>
          <div className='viewOffer-main-buttons'>
               <SmallButton
             variant = 'outlined'
             style={{
               color: 'black',
                width:'145px',
                height: '32px',
                marginTop: '22.5px'
                     }}
             >Accept Offer</SmallButton>
             <SmallButton
             variant = 'contained'
             style={{
                
                width:'145px',
                height: '32px',
                marginTop: '22.5px'
                     }}
             >Reject Offer</SmallButton></div>
          
     </div>
          
          
    
        </>
    )
}

export default ViewOffer;