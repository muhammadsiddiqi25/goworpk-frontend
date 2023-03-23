import Stepper from './Stepper'
import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import toast from "react-hot-toast";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from '@mui/material'
import '../../assets/styles/ProfileForm.css'
import SmallButton from '../../components/custom-mui-comp/Button';
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { sendProfilePicture } from '../../redux/CandidateProfile/actions';
import jwtDecode from 'jwt-decode';

const Profile = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [profileImage, setProfileImage] = useState("https://i.imgur.com/5fh5cPN.jpg")
  const [open, setOpen] = useState(false)
  const hiddenFileInput = React.useRef(null);
  const [cropData, setCropData] = useState("");
  const [cropper, setCropper] = useState(null);
  const {aud} = jwtDecode(localStorage.getItem('accessToken'))
  console.log(`http://localhost:5001/profile_pics/${aud}.png`)
  const getCropData = () => {
    if (typeof cropper !== "undefined") {
      setCropData(cropper.getCroppedCanvas().toDataURL());
    }
  };
  const reset = () => {
    setProfileImage(null);
  };
  return (

    <div className='profileForm'>
      <Typography variant='h4' fontWeight={900}>Step 1/6: Profile Picture</Typography>
      <div className='profile-image'>
        <img src={cropData ? cropData : (`http://44.201.53.100//profile_pics/${aud}.png`)}
          onClick={() => { hiddenFileInput.current.click(); }}
        /> 
        <input type="file"
          accept="image/*"
          name="image-upload"
          id="input"
          onChange={(e) => {
            // console.log('before',profileImage)
            // setProfileImage(e.target.files[0]);
            // console.log('after',profileImage)
            let files;
            if (e.dataTransfer) {
              files = e.dataTransfer.files;
            } else if (e.target) {
              files = e.target.files;
            }
            const reader = new FileReader();
            reader.onload = () => {
              setProfileImage(reader.result);
            };
            reader.readAsDataURL(files[0]);
            setOpen(true)
          }}
          ref={hiddenFileInput}
          style={{ display: 'none' }}
        />
        {/* <img src={preview} alt="Preview" /> */}
      </div>
      <Dialog aria-labelledby='dialog-title' aria-describedby='dialog-description'
        open={open}
        onClose={() => {
          setOpen(false)
        }}
      >
        <DialogTitle id='dialog-title'>Edit Profile Picture</DialogTitle>
        <DialogContent id='dialog-description'>
          <Cropper
            className="cropper"
            zoomTo={0.5}
            initialAspectRatio={1}
            aspectRatio={1}
            src={profileImage}
            viewMode={1}
            minCropBoxHeight={10}
            minCropBoxWidth={10}
            background={false}
            responsive={true}
            autoCropArea={1}
            checkOrientation={false}
            onInitialized={(instance) => {
              setCropper(instance);
            }}
            guides={true}
          />
        </DialogContent>
        <DialogActions>
          <SmallButton variant='outlined' onClick={() => { 
            reset() 
            setOpen(false)
            }}>Cancel</SmallButton>
          <SmallButton variant='contained' autoFocus onClick={() => { 
            getCropData() 
            setOpen(false)
            }} >Submit</SmallButton>
        </DialogActions>
      </Dialog>
      <SmallButton variant = 'contained' sx={{
        float:'right'
      }}
      onClick = {()=>{
        console.log(cropData)
        dispatch(sendProfilePicture({image:cropData}))
      }}
      >Save & Next</SmallButton>
    </div>
  )
}

export default Profile