import React, { useState } from 'react'
import '../../assets/styles/ProfileForm.css'
import {
    TextField,
    Typography,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio
} from '@mui/material'

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import ProfileTextField from '../../components/custom-mui-comp/ProfileTextField'
import {
    Formik,
    Form,
    Field,
    ErrorMessage,
    FieldArray,
    FastField,
    getIn
} from 'formik'
import * as yup from 'yup'
import SmallButton from '../../components/custom-mui-comp/Button';
function DateTextField(props) {
    // props.InputProps.disableUnderline = true
    return (
        // <TextField variant='filled' maring='dense' fullWidth inputProps={{ disableUnderline: true }} {...props} />
        <TextField {...props} />
    );
}


const CandidateCertifications = () => {

    const validationSchema = yup.object().shape({
        certifications: yup.array().of(
            yup.object().shape({
                title: yup.string(),
                org: yup.string(),
                year: yup.string(),
                link: yup.string(),
                duration:yup.number().typeError('Please Enter a number'),
                description: yup.string(),
            })
        )
    });

    const initialValues = {
        certifications: [{
            id: 1,
            title: '',
            org: '',
            year: '',
            link: '',
            duration:'',
            description: '',
        },
        ]
    }

    const onSubmit = (values) => {
        console.log(values)
    }

    return (
        <div className='profileForm'>
            <Typography variant='h4' fontWeight={900}>Step 3/6: Certifications</Typography>
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

                            <FieldArray name='certifications'>
                                {fieldArrayProps => {
                                    const { push, remove, form } = fieldArrayProps
                                    const { values, handleChange, handleBlur, errors, touched, setFieldValue } = form
                                    const { certifications } = values
                                    console.log(certifications)
                                    return (
                                        <div>
                                            {certifications.map((cert, index) => {
                                                const title = `certifications[${index}.title]`
                                                const org = `certifications[${index}.org]`
                                                const year = `certifications[${index}.year]`
                                                const link = `certifications[${index}.link]`
                                                const duration = `certifications[${index}.duration]`
                                                const description = `certifications[${index}.description]`


                                                const touchedTitle = getIn(touched, title)
                                                const touchedOrg = getIn(touched, org)
                                                const touchedYear = getIn(touched, year)
                                                const touchedLink = getIn(touched, link)
                                                const touchedDuration = getIn(touched, duration)
                                                const touchedDescription = getIn(touched, description)


                                                const errorTitle = getIn(errors, title)
                                                const errorOrg = getIn(errors, org)
                                                const errorYear = getIn(errors, year)
                                                const errorLink = getIn(errors, link)
                                                const errorDuration = getIn(errors, duration)
                                                const errorDescription = getIn(errors, description)


                                                return <div key={cert.id}
                                                    style={{
                                                        margin: '80px auto'
                                                    }}
                                                >
                                                    <h4>{index + 1}.</h4>
                                                    <div className='personal-info-inputs-div'>
                                                        <div className='fifty-percent-divs'>
                                                            <ProfileTextField fullWidth variant='filled' label='Name'
                                                                placeholder='Certification Name'
                                                                name={title}
                                                                value={cert.title}
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
                                                        <div className='fifty-percent-divs'>
                                                            <ProfileTextField label='Organization'
                                                                name={org}
                                                                value={cert.org}
                                                                helperText={
                                                                    touchedOrg && errorOrg
                                                                        ? errorOrg
                                                                        : ""
                                                                }
                                                                error={Boolean(touchedOrg && errorOrg)}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                            />
                                                        </div>

                                                    </div>
                                                    <div className='personal-info-inputs-div'>
                                                        <div className='fifty-percent-divs'>
                                                            <ProfileTextField label='Year'
                                                                name={year}
                                                                value={cert.year}
                                                                helperText={
                                                                    touchedYear && errorYear
                                                                        ? errorYear
                                                                        : ""
                                                                }
                                                                error={Boolean(touchedYear && errorYear)}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                            />
                                                        </div>
                                                        <div className='fifty-percent-divs'>
                                                            <ProfileTextField label='Link'
                                                                name={link}
                                                                value={cert.link}
                                                                helperText={
                                                                    touchedLink && errorLink
                                                                        ? errorLink
                                                                        : ""
                                                                }
                                                                error={Boolean(touchedLink && errorLink)}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className='personal-info-inputs-div'>
                                                        <div className='fifty-percent-divs'>
                                                            <ProfileTextField label='Duration'
                                                                name={duration}
                                                                value={cert.duration}
                                                                helperText={
                                                                    touchedDuration && errorDuration
                                                                        ? errorDuration
                                                                        : ""
                                                                }
                                                                error={Boolean(touchedDuration && errorDuration)}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className='personal-info-inputs-div'>
                                                        <ProfileTextField label='Description (100 Characters)'
                                                            multiline
                                                            inputProps={{ maxLength: 100 }}
                                                            maxRows={4}
                                                            name={year}
                                                            value={cert.year}
                                                            helperText={
                                                                touchedYear && errorYear
                                                                    ? errorYear
                                                                    : ""
                                                            }
                                                            error={Boolean(touchedYear && errorYear)}
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
                                                    id: certifications.length>0?certifications[certifications.length - 1]['id'] + 1:1,
                                                    title: '',
                                                    org: '',
                                                    year: '',
                                                    link: '',
                                                    description: '',
                                                })}
                                            >Add more</SmallButton>
                                        </div>
                                    )
                                }}
                            </FieldArray>

                        </Form>
                    )
                }}
            </Formik>

            <div className='profile-buttons'
                style={{
                    float: 'right',
                    display: 'flex',
                    gap: '20px'
                }}
            >
                <SmallButton variant='contained'>Back</SmallButton>
                <SmallButton variant='contained'>Save & Next</SmallButton>
            </div>
        </div >
    )
}

export default CandidateCertifications