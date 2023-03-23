
import React, { useState,useEffect } from 'react'
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
import { useFormik } from 'formik';
import * as yup from 'yup'
import ProfileTextField from '../../components/custom-mui-comp/ProfileTextField';
import { get_employer_profile, save_employer_profile } from '../../redux/Employer/actions';
import { useSelector } from 'react-redux';


const EmployerProfile = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect( ()=>{
        dispatch(get_employer_profile())
    },[])
    const userData = useSelector((state)=>state.employerReducer.profile_info)



    const [profileImage, setProfileImage] = useState("https://i.imgur.com/5fh5cPN.jpg")
    const [open, setOpen] = useState(false)
    const hiddenFileInput = React.useRef(null);
    const [cropData, setCropData] = useState("");
    const [cropper, setCropper] = useState(null);
    const { aud } = jwtDecode(localStorage.getItem('accessToken'))
    const getCropData = () => {
        if (typeof cropper !== "undefined") {
            setCropData(cropper.getCroppedCanvas().toDataURL());
        }
    };
    const reset = () => {
        setProfileImage(null);
    };
    const [picError,setPicError] = useState(false)
    const validationSchema = yup.object({
        company_name: yup.string().required('This Field is required.'),
        address_line1: yup.string().required('This Field is required.'),
        address_line2: yup.string(),
        city: yup.string().required('This Field is required.'),
        zip_code: yup.number().typeError('Invalid Zip code.').required('This Field is required.'),
        state: yup.string().required('This Field is required.'),
        country: yup.string().required('This Field is required.'),
        website: yup.string().required('This Field is required.'),
        about: yup.string().required('This Field is required.'),
    })
    const { values,
        errors,
        touched,
        isSubmitting,
        handleBlur,
        handleChange,
        handleSubmit, setFieldValue } = useFormik({
            enableReinitialize: true,
            initialValues: {
                company_name: userData ? userData.company_name : '',
                website: userData ? userData.website : '',
                address_line1: userData ? userData.address.address_line1 : '',
                address_line2: userData ? userData.address.address_line2 : '',
                city: userData ? userData.address.city : '',
                zip_code: userData ? userData.address.zip_code : '',
                state: userData ? userData.address.state : '',
                country: userData ? userData.address.country : '',
                about: userData ? userData.about : '',
            },

            onSubmit: (values) => {
                    const data = {
                        profile_data: {
                            company_name: values.company_name,
                            website: values.website,
                            about: values.about,
                            address: {
                                address_line1: values.address_line1,
                                address_line2: values.address_line2,
                                city: values.city,
                                zip_code: values.zip_code,
                                state: values.state,
                                country: values.country
                            },
                        },
                        profile_pic:cropData
                    }
                    console.log(data)
                    dispatch(save_employer_profile(data))
            },

            validationSchema: validationSchema
        })



    return (

        <div className='profileForm'>
            <Typography variant='h4' fontWeight={900}>Profile Picture</Typography>
            <div className='profile-image'>
                <img src={cropData ? cropData : (`http://44.201.53.100//profile_pics/${aud}.png`)}
                    onClick={() => { hiddenFileInput.current.click(); }}
                />
                <input type="file"
                    accept="image/*"
                    name="image-upload"
                    id="input"
                    onChange={(e) => {
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
                {!cropData && picError?<p style={{color:'red'}} >Please Upload your logo!</p>:null}
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
            <Typography variant='h4' fontWeight={900}>Company Information</Typography>
            <form onSubmit={handleSubmit} className="personal-info-form">
                <ProfileTextField label='Company Name'
                    name='company_name'
                    value={values.company_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.company_name ? errors.company_name : ""}
                    error={touched.company_name && Boolean(errors.company_name)}
                />
                <ProfileTextField label='Website'
                    name='website'
                    value={values.website}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.website ? errors.website : ""}
                    error={touched.website && Boolean(errors.website)}
                />
                <ProfileTextField label='Address Line 1:'
                    name='address_line1'
                    value={values.address_line1}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.address_line1 ? errors.address_line1 : ""}
                    error={touched.address_line1 && Boolean(errors.address_line1)}
                />
                <ProfileTextField label='Address Line 2:(optional)'
                    name='address_line2'
                    value={values.address_line2}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.address_line2 ? errors.address_line2 : ""}
                    error={touched.address_line2 && Boolean(errors.address_line2)}
                />
                <div className='personal-info-inputs-div'>
                    <div className='fifty-percent-divs'>
                        <ProfileTextField fullWidth variant='filled' label='City'
                            name='city'
                            value={values.city}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={touched.city ? errors.city : ""}
                            error={touched.city && Boolean(errors.city)}
                        />
                    </div>
                    <div className='fifty-percent-divs'>
                        <ProfileTextField variant='filled' label='Zip Code'
                            name='zip_code'
                            value={values.zip_code}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={touched.zip_code ? errors.zip_code : ""}
                            error={touched.zip_code && Boolean(errors.zip_code)} />
                    </div>
                </div>
                <div className='personal-info-inputs-div'>
                    <div className='fifty-percent-divs'>
                        <ProfileTextField fullWidth variant='filled' label='State/Province'
                            name='state'
                            value={values.state}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={touched.state ? errors.state : ""}
                            error={touched.state && Boolean(errors.state)}
                        />
                    </div>
                    <div className='fifty-percent-divs'>
                        <ProfileTextField variant='filled' label='Country'
                            name='country'
                            value={values.country}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={touched.country ? errors.country : ""}
                            error={touched.country && Boolean(errors.country)} />
                    </div>
                </div>
                <div className='personal-info-inputs-div'>
                    <ProfileTextField fullWidth variant='filled' label='About Yourself'
                        name='about'
                        multiline
                        placehodler='Dont share your contact information, otherwise profile will be blocked.'
                        value={values.about}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={touched.about ? errors.about : ""}
                        error={touched.about && Boolean(errors.about)}
                    />
                </div>
                <SmallButton sx={{ float: 'right' }} variant='contained' type='submit'>Save</SmallButton>
            </form>
        </div>
    )
}

export default EmployerProfile