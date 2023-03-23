import React, { useState,useEffect } from 'react'
import '../../assets/styles/ProfileForm.css'
import {
    TextField,
    Typography,
    FilledInput,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    FormHelperText
} from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import ProfileTextField from '../../components/custom-mui-comp/ProfileTextField'
import { useFormik } from 'formik'
import * as yup from 'yup'
import SmallButton from '../../components/custom-mui-comp/Button';
import { sendPersonalInfo,getPersonalInfo } from '../../redux/CandidateProfile/actions';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
function DateTextField(props) {

    return (
        // <TextField variant='filled' maring='dense' fullWidth inputProps={{ disableUnderline: true }} {...props} />
        <TextField {...props} />
    );
}


const PersonalInfo = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect( ()=>{
        dispatch(getPersonalInfo())
    },[])
    const userData = useSelector((state)=>state.candidateProfileReducer.personal_info)

    const validationSchema = yup.object({
        f_name: yup.string().required('This Field is required.'),
        l_name: yup.string().required('This Field is required.'),
        cnic: yup.string().required('This Field is required.'),
        dob: yup.date()
            .required('This Field is required.')
            .nullable()
            .transform(v => (v instanceof Date && !isNaN(v) ? v : null)).typeError("Invalid Date"),
        mobile_number: yup.string().required('This is required field.'),
        martial_status:yup.string().required('This is required field'),
        gender:yup.string().required('This is required field'),
        address_line1: yup.string().required('This Field is required.'),
        address_line2: yup.string(),
        city: yup.string().required('This Field is required.'),
        zip_code: yup.number().typeError('Invalid Zip code.').required('This Field is required.'),
        state: yup.string().required('This Field is required.'),
        country: yup.string().required('This Field is required.'),
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
                f_name: userData?userData.f_name:'',
                l_name: userData?userData.l_name:'',
                cnic: userData?userData.cnic:'',
                dob: userData?dayjs(userData.dob,'YYYY/MM/DD'):undefined,
                // dob:undefined,
                mobile_number: userData?userData.mobile_number:'',
                gender:userData?userData.gender:'male',
                martial_status:userData?userData.martial_status:'single',
                address_line1:userData?userData.address.address_line1:'',
                address_line2:userData?userData.address.address_line2:'',
                city:userData?userData.address.city:'',
                zip_code:userData?userData.address.zip_code:'',
                state:userData?userData.address.state:'',
                country:userData?userData.address.country:''
            },

            onSubmit: (values) => {
                const data = {
                    f_name:values.f_name,
                    l_name:values.l_name,
                    cnic: values.cnic,
                    dob:values.dob,
                    mobile_number:values.mobile_number,
                    gender:values.gender,
                    martial_status:values.martial_status,
                    address:{
                        address_line1:values.address_line1,
                        address_line2:values.address_line2,
                        city:values.city,
                        zip_code:values.zip_code,
                        state:values.state,
                        country:values.country
                    }
                }
                dispatch(sendPersonalInfo(data))
            },

            validationSchema: validationSchema
        })
        // if (!userData){
        //     return 
        // }
        console.log(userData)
    return (
        <div className='profileForm'>
            <Typography variant='h4' fontWeight={900}>Step 2/6: Personal Information</Typography>
            <form onSubmit={handleSubmit} className="personal-info-form">
                <div className='personal-info-inputs-div'>
                    <div className='fifty-percent-divs'>
                        <ProfileTextField fullWidth variant='filled' label='First Name'
                            name='f_name'
                            value={values.f_name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={touched.f_name ? errors.f_name : ""}
                            error={touched.f_name && Boolean(errors.f_name)}
                        />
                    </div>
                    <div className='fifty-percent-divs'>
                        <ProfileTextField variant='filled' label='Last Name'
                            name='l_name'
                            value={values.l_name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={touched.l_name ? errors.l_name : ""}
                            error={touched.l_name && Boolean(errors.l_name)} />
                    </div>
                </div>
                <div className='personal-info-inputs-div'>
                    <div className='fifty-percent-divs'>
                        <ProfileTextField fullWidth variant='filled' label='CNIC'
                            name='cnic'
                            value={values.cnic}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={touched.cnic ? errors.cnic : ""}
                            error={touched.cnic && Boolean(errors.cnic)}
                        />
                    </div>
                    <div className='fifty-percent-divs'>
                        <LocalizationProvider dateAdapter={AdapterDayjs}
                            variant='filled'
                            sx={{ width: '100%' }}
                        >
                            <DatePicker
                            
                                // value = {values.dob}
                                onChange={(value) => {
                                    setFieldValue('dob', value, true)
                                    console.log(new Date(value))
                                }}
                                slots={{
                                    textField: DateTextField,
                                }}
                                slotProps={{
                                    textField: {
                                        label: 'Date of Birth',
                                        name: 'dob',
                                        fullWidth: true,
                                        variant: 'filled',
                                        margin: 'dense',
                                        error: Boolean(touched.dob && errors.dob),
                                        helperText: touched.dob && errors.dob,
                                        value: values.dob,
                                        onBlur:handleBlur,
                                        onChange: handleChange,
                                        sx:{
                                            margin:'20px auto'
                                        },
                                    }
                                }}
                            onBlur={handleBlur}
                            helperText={touched.dob ? errors.dob : ""}
                            error={touched.dob && Boolean(errors.dob)}
                            />
                        </LocalizationProvider>
                    </div>
                </div>
                <div className='personal-info-inputs-div'>
                    <div className='fifty-percent-divs'>
                        <ProfileTextField fullWidth variant='filled' label='Mobile Number'
                            name='mobile_number'
                            value={values.mobile_number}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={touched.mobile_number ? errors.mobile_number : ""}
                            error={touched.mobile_number && Boolean(errors.mobile_number)}
                        />
                    </div>
                    <div className='fifty-percent-divs'>
                        <FormControl sx={{ display: 'flex' }} margin ='dense'>
                            <FormLabel>Gender</FormLabel>
                            <RadioGroup
                            row
                            name="gender"
                            onChange = {handleChange}
                            value = {values.gender}
                            onBlur={handleBlur}
                            error={touched.gender && Boolean(errors.gender)?errors.gender:''}
                            >
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                            <FormHelperText error>{touched.gender ? errors.gender : ""}</FormHelperText>
                        </FormControl>
                    </div>
                </div>
                <div >
                <div className='personal-info-inputs-div'>
                    <div className='fifty-percent-divs'>
                    <FormControl sx={{ display: 'flex' }} margin ='dense'>
                            <FormLabel>Martial Status</FormLabel>
                            <RadioGroup
                            row
                            name="martial_status"
                            value = {values.martial_status}
                            onChange = {handleChange}
                            onBlur={handleBlur}
                            error={touched.martial_status && Boolean(errors.martial_status)?errors.martial_status:""}
                            >
                                <FormControlLabel value="single" control={<Radio />} label="Single" />
                                <FormControlLabel value="married" control={<Radio />} label="Married" />
                                <FormControlLabel value="divorced" control={<Radio />} label="Divorced" />
                            </RadioGroup>
                            <FormHelperText error >{touched.martial_status ? errors.martial_status : ""}</FormHelperText>
                        </FormControl>
                    </div>
                </div>
                {/* <Typography margin='dense' variant = 'h6' fontWeight={500} fontSize='16px' sx={{display:'inline-block'}} >Address</Typography> */}
                <ProfileTextField label= 'Address Line 1:' 
                name='address_line1'
                value={values.address_line1}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.address_line1 ? errors.address_line1 : ""}
                error={touched.address_line1 && Boolean(errors.address_line1)}
                />
                <ProfileTextField label= 'Address Line 2:(optional)' 
                name='address_line2'
                value={values.address_line2}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.address_line2 ? errors.address_line2 : ""}
                error={touched.address_line2 && Boolean(errors.address_line2)}
                />
                </div>
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
                <div className='profile-buttons'
                style={{
                    float:'right',
                    display:'flex',
                    gap:'20px'
                }}
                >
                    <SmallButton variant  = 'contained' onClick = {()=>{navigate('/candidate/profile')}}>Back</SmallButton>
                    <SmallButton type = 'submit' variant  = 'contained'>Save & Next</SmallButton>
                </div>
            </form>
        </div>
    )
}

export default PersonalInfo