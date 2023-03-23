import React, { useState,useEffect } from 'react'
import '../../assets/styles/ProfileForm.css'
import {
    TextField,
    Typography,
} from '@mui/material'

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import ProfileTextField from '../../components/custom-mui-comp/ProfileTextField'
import {
    Formik,
    Form,
    FieldArray,
    getIn
} from 'formik'
import * as yup from 'yup'
import SmallButton from '../../components/custom-mui-comp/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { sendExperienceInfo, getExperienceInfo } from '../../redux/CandidateProfile/actions';
import dayjs from 'dayjs';
function DateTextField(props) {
    // props.InputProps.disableUnderline = true
    return (
        // <TextField variant='filled' maring='dense' fullWidth inputProps={{ disableUnderline: true }} {...props} />
        <TextField {...props} />
    );
}


const Exprience = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getExperienceInfo())
    }, []);
    const experienceData = useSelector((state)=>state.candidateProfileReducer.experience_info)
    if(experienceData){
        for(let i = 0;i<experienceData.length;i++){
            experienceData[i] = {...experienceData[i],start_date:dayjs(experienceData[i].start_date,'YYYY/MM/DD'),
                                    end_date:dayjs(experienceData[i].end_date,'YYYY/MM/DD'),
        }
        }
       }
    const validationSchema = yup.object().shape({
        experience: yup.array().of(
            yup.object().shape({
                company: yup.string(),
                jobTitle: yup.string(),
                start_date: yup.date()
                    .nullable()
                    .transform(v => (v instanceof Date && !isNaN(v) ? v : null)).typeError("Invalid Date"),
                end_date: yup.date()
                    .nullable()
                    .transform(v => (v instanceof Date && !isNaN(v) ? v : null)).typeError("Invalid Date"),
                achievements: yup.string()
            })
        )
    });

    const initialValues = {
        experience:experienceData?experienceData: [{
            id: 1,
            company: '',
            jobTitle: '',
            start_date: undefined,
            end_date: undefined,
            achievements: ''
        },
        ]
    }

    const onSubmit = (values) => {
        console.log(values)
        dispatch(sendExperienceInfo(values))
    }

    return (
        <div className='profileForm'>
            <Typography variant='h4' fontWeight={900}>Step 4/6: Experience</Typography>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                enableReinitialize
                className="personal-info-form"
                validateOnChange={true}
                validateOnBlur={true}
            // validateOnMount
            >
                {formik => {
                    return (
                        <Form>
                            <FieldArray name='experience'>
                                {fieldArrayProps => {
                                    const { push, remove, form } = fieldArrayProps
                                    const { values, handleChange, handleBlur, errors, touched, setFieldValue } = form
                                    const { experience } = values
                                    console.log(fieldArrayProps)
                                    console.log(Boolean(touched.experience) && Boolean(touched.experience[0]))
                                    return (
                                        <div>
                                            {experience.map((exp, index) => {
                                                const company = `experience[${index}.company]`
                                                const jobTitle = `experience[${index}.jobTitle]`
                                                const start_date = `experience[${index}.start_date]`
                                                const end_date = `experience[${index}.end_date]`
                                                const achievements = `experience[${index}.achievements]`


                                                const touchedCompany = getIn(touched, company)
                                                const touchedJobTitle = getIn(touched, jobTitle)
                                                const touchedStart = getIn(touched, start_date)
                                                const touchedEnd = getIn(touched, end_date)
                                                const touchedAchievements = getIn(touched, achievements)


                                                const errorCompany = getIn(errors, company)
                                                const errorJobTitle = getIn(errors, jobTitle)
                                                const errorStart = getIn(errors, start_date)
                                                const errorEnd = getIn(errors, end_date)
                                                const errorAchievements = getIn(errors, achievements)


                                                return <div key={exp.id}
                                                    style={{
                                                        margin: '80px auto'
                                                    }}
                                                >
                                                    <h4>{index + 1}.</h4>
                                                    <div className='personal-info-inputs-div'>
                                                        <div className='fifty-percent-divs'>
                                                            <ProfileTextField fullWidth variant='filled' label='Company'
                                                                name={company}
                                                                value={exp.company}
                                                                helperText={
                                                                    touchedCompany && errorCompany
                                                                        ? errorCompany
                                                                        : ""
                                                                }
                                                                error={Boolean(touchedCompany && errorCompany)}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                            />
                                                        </div>
                                                        <div className='fifty-percent-divs'>
                                                            <ProfileTextField label='Job Title'
                                                                name={jobTitle}
                                                                value={exp.jobTitle}
                                                                helperText={
                                                                    touchedJobTitle && errorJobTitle
                                                                        ? errorJobTitle
                                                                        : ""
                                                                }
                                                                error={Boolean(touchedJobTitle && errorJobTitle)}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                            />
                                                        </div>

                                                    </div>
                                                    <div className='personal-info-inputs-div'>
                                                        <div className='fifty-percent-divs'>
                                                            <LocalizationProvider dateAdapter={AdapterDayjs}
                                                                variant='filled'
                                                                sx={{ width: '100%' }}
                                                            >
                                                                <DatePicker
                                                                    onChange={(value) => {
                                                                        setFieldValue(start_date, value, true)
                                                                    }}
                                                                    slots={{
                                                                        textField: DateTextField,
                                                                    }}
                                                                    slotProps={{
                                                                        textField: {
                                                                            label: 'Date of Entry',
                                                                            fullWidth: true,
                                                                            variant: 'filled',
                                                                            margin: 'dense',
                                                                            sx: {
                                                                                margin: '20px auto'
                                                                            },
                                                                            name: start_date,
                                                                            value: exp.start_date,
                                                                            helperText:
                                                                                touchedStart && errorStart
                                                                                    ? errorStart
                                                                                    : "",
                                                                            error: Boolean(touchedStart && errorStart),
                                                                            onChange: handleChange,
                                                                            onBlur: handleBlur
                                                                        }
                                                                    }}

                                                                />
                                                            </LocalizationProvider>
                                                        </div>
                                                        <div className='fifty-percent-divs'>
                                                            <LocalizationProvider dateAdapter={AdapterDayjs}
                                                                variant='filled'
                                                                sx={{ width: '100%' }}
                                                            >
                                                                <DatePicker

                                                                    onChange={(value) => {
                                                                        setFieldValue(end_date, value, true)
                                                                    }}
                                                                    slots={{
                                                                        textField: DateTextField,
                                                                    }}
                                                                    slotProps={{
                                                                        textField: {
                                                                            label: 'Date of Graduation',
                                                                            fullWidth: true,
                                                                            variant: 'filled',
                                                                            margin: 'dense',
                                                                            sx: {
                                                                                margin: '20px auto'
                                                                            },
                                                                            name: end_date,
                                                                            value: exp.end_date,
                                                                            helperText:
                                                                                touchedEnd && errorEnd
                                                                                    ? errorEnd
                                                                                    : "",
                                                                            error: Boolean(touchedEnd && errorEnd),
                                                                            onChange: handleChange,
                                                                            onBlur: handleBlur
                                                                        }
                                                                    }}

                                                                />
                                                            </LocalizationProvider>
                                                        </div>
                                                    </div>
                                                    <div className='personal-info-inputs-div'>
                                                        <ProfileTextField fullWidth variant='filled' label='Achievements'
                                                            multiline
                                                            name={achievements}
                                                            value={exp.achievements}
                                                            helperText={
                                                                touchedAchievements && errorAchievements
                                                                    ? errorAchievements
                                                                    : ""
                                                            }
                                                            error={Boolean(touchedAchievements && errorAchievements)}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        />
                                                    </div>
                                                    <div className='profile-buttons'
                                                        style={{
                                                            float: 'right',
                                                            display: 'flex',
                                                            gap: '20px'
                                                        }}
                                                    >
                                                        <SmallButton variant='contained'
                                                            onClick={() => {
                                                                console.log('index', index)
                                                                remove(index)
                                                            }}

                                                        >Remove</SmallButton>
                                                    </div>
                                                </div>
                                            })}
                                            <SmallButton variant='contained'
                                                onClick={() => push({
                                                    id: experience.length > 0 ? experience[experience.length - 1]['id'] + 1 : 1,
                                                    company: '',
                                                    jobTitle: '',
                                                    start_date: undefined,
                                                    end_date: undefined,
                                                    achievements: ''
                                                })}
                                            >Add more</SmallButton>
                                        </div>
                                    )
                                }}
                            </FieldArray>
                            <div className='profile-buttons'
                style={{
                    float: 'right',
                    display: 'flex',
                    gap: '20px'
                }}
            >
                <SmallButton variant='contained'
                onClick = {()=>{navigate('/candidate/education-info')}}
                >Back</SmallButton>
                <SmallButton type = 'submit' variant='contained' >Save & Next</SmallButton>
            </div>
                        </Form>
                    )
                }}
            </Formik>

            
        </div >
    )
}

export default Exprience