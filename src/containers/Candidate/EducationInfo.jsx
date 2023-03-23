import React, { useState,useEffect } from 'react'
import '../../assets/styles/ProfileForm.css'
import {
    TextField,
    Typography,
} from '@mui/material'
import dayjs from 'dayjs';
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
import { useNavigate } from 'react-router-dom';
import { sendEducationInfo ,getEducationInfo} from '../../redux/CandidateProfile/actions';





function DateTextField(props) {
    // props.InputProps.disableUnderline = true
    return (
        // <TextField variant='filled' maring='dense' fullWidth inputProps={{ disableUnderline: true }} {...props} />
        <TextField {...props} />
    );
}


const EducationInfo = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getEducationInfo())
    }, []);
    const educationData = useSelector((state)=>state.candidateProfileReducer.education_info)
    console.log(educationData)
   if(educationData){
    console.log(educationData[1].percentage.toString())
    for(let i = 0;i<educationData.length;i++){
        educationData[i] = {...educationData[i],start_date:dayjs(educationData[i].start_date,'YYYY/MM/DD'),
                                end_date:dayjs(educationData[i].end_date,'YYYY/MM/DD'),
                                percentage:parseFloat(educationData[i].percentage)
    }
    }
   }
    const validationSchema = yup.object().shape({
        education: yup.array().of(
            yup.object().shape({
                level: yup.string().required("This Field is required"),
                percentage: yup.number().typeError("Only Numbers are accepted").required("This Field is required"),
                title: yup.string().required("This Field is required"),
                institute: yup.string().required("This Field is required"),
                start_date: yup.date()
                    .required('This Field is required.')
                    .nullable()
                    .transform(v => (v instanceof Date && !isNaN(v) ? v : null)).typeError("Invalid Date"),
                end_date: yup.date()
                    .required('This Field is required.')
                    .nullable()
                    .transform(v => (v instanceof Date && !isNaN(v) ? v : null)).typeError("Invalid Date"),
            })
        )
    });

    const initialValues = {
        education: educationData?educationData:  [{
            id: 1,
            level: 'Matriculation/O-level',
            institute: '',
            title: '',
            percentage: '',
            start_date: undefined,
            end_date: undefined
        },
        {
            id: 2,
            level: 'Intermediate/A-Level/DAE',
            insitute: '',
            title: '',
            percentage: '',
            start_date: undefined,
            end_date: undefined
        }
        ]
    }

    const onSubmit = (values) => {
        console.log(values)
        dispatch(sendEducationInfo(values))
    }

    return (
        <div className='profileForm'>
            <Typography variant='h4' fontWeight={900}>Step 3/6: Education Information</Typography>
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

                            <FieldArray name='education'>
                                {fieldArrayProps => {
                                    const { push, remove, form } = fieldArrayProps
                                    const { values, handleChange, handleBlur, errors, touched, setFieldValue } = form
                                    const { education } = values
                                    console.log(fieldArrayProps)
                                    console.log(Boolean(touched.education) && Boolean(touched.education[0]))
                                    return (
                                        <div>
                                            {education.map((edu, index) => {
                                                const level = `education[${index}.level]`
                                                const percentage = `education[${index}.percentage]`
                                                const institute = `education[${index}.institute]`
                                                const title = `education[${index}.title]`
                                                const start_date = `education[${index}.start_date]`
                                                const end_date = `education[${index}.end_date]`


                                                const touchedLevel = getIn(touched, level)
                                                const touchedPercentage = getIn(touched, percentage)
                                                const touchedInstitute = getIn(touched, institute)
                                                const touchedTitle = getIn(touched, title)
                                                const touchedStart = getIn(touched, start_date)
                                                const touchedEnd = getIn(touched, end_date)


                                                const errorLevel = getIn(errors, level)
                                                const errorPercentage = getIn(errors, percentage)
                                                const errorInstitute = getIn(errors, institute)
                                                const errorTitle = getIn(errors, title)
                                                const errorStart = getIn(errors, start_date)
                                                const errorEnd = getIn(errors, end_date)
                                                return <div key={edu.id}
                                                    style={{
                                                        margin: '80px auto'
                                                    }}
                                                >
                                                    <h4>{index + 1}.</h4>
                                                    <div className='personal-info-inputs-div'>
                                                        <div className='fifty-percent-divs'>
                                                            <ProfileTextField fullWidth variant='filled' label='Level'
                                                                name={level}
                                                                value={edu.level}
                                                                helperText={
                                                                    touchedLevel && errorLevel
                                                                        ? errorLevel
                                                                        : ""
                                                                }
                                                                error={Boolean(touchedLevel && errorLevel)}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                            />
                                                        </div>
                                                        <div className='fifty-percent-divs'>
                                                            <ProfileTextField label='Percentage/CGPA'
                                                                name={percentage}
                                                                value={edu.percentage}
                                                                helperText={
                                                                    touchedPercentage && errorPercentage
                                                                        ? errorPercentage
                                                                        : ""
                                                                }
                                                                error={Boolean(touchedPercentage && errorPercentage)}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                            />
                                                        </div>

                                                    </div>
                                                    <div className='personal-info-inputs-div'
                                                        style={{
                                                            padding: '0px 10px'
                                                        }}
                                                    >
                                                        <ProfileTextField
                                                            label='Institute'
                                                            name={institute}
                                                            value={edu.institute}
                                                            helperText={
                                                                touchedInstitute && errorInstitute
                                                                    ? errorInstitute
                                                                    : ""
                                                            }
                                                            error={Boolean(touchedInstitute && errorInstitute)}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}

                                                        />
                                                    </div>
                                                    <div className='personal-info-inputs-div'
                                                        style={{
                                                            padding: '0px 10px'
                                                        }}
                                                    >
                                                        <ProfileTextField
                                                            label='Title'
                                                            name={title}
                                                            value={edu.title}
                                                            helperText={
                                                                touchedTitle && errorTitle
                                                                    ? errorTitle
                                                                    : ""
                                                            }
                                                            error={Boolean(touchedTitle && errorTitle)}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        />
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
                                                                            value: edu.start_date,
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
                                                                            name: end_date,
                                                                            value: edu.end_date,
                                                                            helperText:
                                                                                touchedEnd && errorEnd
                                                                                    ? errorEnd
                                                                                    : "",
                                                                            error: Boolean(touchedEnd && errorEnd),
                                                                            onChange: handleChange,
                                                                            onBlur: handleBlur,
                                                                            sx: {
                                                                                margin: '20px auto'
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
                                                            disabled={index < 2 ? true : false}
                                                        >Remove</SmallButton>
                                                    </div>
                                                </div>
                                            })}
                                            <SmallButton variant='contained'
                                                onClick={() => push({
                                                    id: education[education.length - 1]['id'] + 1,
                                                    level: '',
                                                    institute: '',
                                                    title: '',
                                                    percentage: '',
                                                    start_date: undefined,
                                                    end_date: undefined
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
                <SmallButton variant='contained' onClick = {()=>navigate('/candidate/personal-info')}>Back</SmallButton>
                <SmallButton type = 'submit' variant='contained' >Save & Next</SmallButton>
            </div>
                        </Form>
                    )
                }}
                
            </Formik>
            
        </div >
    )
}

export default EducationInfo