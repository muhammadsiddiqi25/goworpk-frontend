import React, { useEffect } from 'react'
import '../../assets/styles/ProfileForm.css'
import {
    Typography,
} from '@mui/material'
import ProfileTextField from '../../components/custom-mui-comp/ProfileTextField'
import { useFormik } from 'formik'
import * as yup from 'yup'
import SmallButton from '../../components/custom-mui-comp/Button';
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { getAboutInfo, sendAboutInfo } from '../../redux/CandidateProfile/actions'


const CandidateAbout = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAboutInfo())
    }, []);
    const aboutData = useSelector((state)=>state.candidateProfileReducer.about_info)
    const validationSchema = yup.object({
        title: yup.string().required('This Field is required.'),
        about: yup.string().required('This Field is required.'),
        reference1: yup.string().required('This Field is required.'),
        reference2: yup.string().required('This Field is required.'),
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
                title:aboutData?aboutData.title:'',
                about: aboutData?aboutData.about:'',
                reference1: aboutData?aboutData.reference1:'',
                reference2: aboutData?aboutData.reference2:'',
            },

            onSubmit: (values) => {
                console.log(values)
                dispatch(sendAboutInfo(values))
            },

            validationSchema: validationSchema
        })

    return (
        <div className='profileForm'>
            <Typography variant='h4' fontWeight={900}>Step 6/6: General Information</Typography>
            <form onSubmit={handleSubmit} className="personal-info-form">
                <div className='personal-info-inputs-div'>
                    <ProfileTextField fullWidth variant='filled' label='What should we call you?'
                        placeholder='e.g Software Engineer'
                        name='title'
                        value={values.title}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={touched.title ? errors.title : ""}
                        error={touched.title && Boolean(errors.title)}
                    />
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
                <div className='personal-info-inputs-div'>
                    <ProfileTextField fullWidth variant='filled' label='Reference 1'
                        name='reference1'
                        placehoder='Share Name, designation, company and contact of someone who can verify your information'
                        value={values.reference1}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={touched.reference1 ? errors.reference1 : ""}
                        error={touched.reference1 && Boolean(errors.reference1)}
                    />
                </div>
                <div >
                    <div className='personal-info-inputs-div'>
                        <ProfileTextField fullWidth variant='filled' label='Reference 2'
                            name='reference2'
                            placehoder='Share Name, designation, company and contact of someone who can verify your information'
                            value={values.reference2}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={touched.reference2 ? errors.reference1 : ""}
                            error={touched.reference2 && Boolean(errors.reference2)}
                        />
                    </div>
                </div>
                <div className='profile-buttons'
                    style={{
                        float: 'right',
                        display: 'flex',
                        gap: '20px'
                    }}
                >
                    <SmallButton variant='contained'
                    onClick={()=>{
                        navigate('/candidate/skills-info')
                    }}
                    >Back</SmallButton>
                    <SmallButton type='submit' variant='contained'>Save & Next</SmallButton>
                </div>
            </form>
        </div>
    )
}

export default CandidateAbout