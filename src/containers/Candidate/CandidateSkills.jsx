import React, { useState,useEffect } from 'react'
import '../../assets/styles/ProfileForm.css'
import {
    TextField,
    Typography,

} from '@mui/material'

import ProfileTextField from '../../components/custom-mui-comp/ProfileTextField'
import {
    Formik,
    Form,
    FieldArray,
    getIn
} from 'formik'
import * as yup from 'yup'
import SmallButton from '../../components/custom-mui-comp/Button';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getSkillsInfo, sendSkillsInfo } from '../../redux/CandidateProfile/actions'
function DateTextField(props) {
    // props.InputProps.disableUnderline = true
    return (
        // <TextField variant='filled' maring='dense' fullWidth inputProps={{ disableUnderline: true }} {...props} />
        <TextField {...props} />
    );
}


const CandidateSkills = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getSkillsInfo())
    }, []);
    const skillsInfo = useSelector((state)=>state.candidateProfileReducer.skills_info)
    const validationSchema = yup.object().shape({
        skills: yup.array().of(
            yup.object().shape({
                name: yup.string(),
                rating: yup.number().typeError("Only Numbers are accepted").min(0, 'Number must be between 0 and 10').max(10, 'Number must be between 0 and 10'),
            })
        )
    });

    const initialValues = {
        skills: skillsInfo?skillsInfo:[{
            id: 1,
            name: '',
            rating: ''
        },
        ]
    }

    const onSubmit = (values) => {
        console.log(values)
        dispatch(sendSkillsInfo(values))
    }

    return (
        <div className='profileForm'>
            <Typography variant='h4' fontWeight={900}>Step 5/6: Skills</Typography>
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
                            <FieldArray name='skills'>
                                {fieldArrayProps => {
                                    const { push, remove, form } = fieldArrayProps
                                    const { values, handleChange, handleBlur, errors, touched, setFieldValue } = form
                                    const { skills } = values
                                    console.log(fieldArrayProps)
                                    console.log(Boolean(touched.skills) && Boolean(touched.skills[0]))
                                    return (
                                        <div>
                                            {skills.map((skill, index) => {
                                                const name = `skills[${index}.name]`
                                                const rating = `skills[${index}.rating]`


                                                const touchedName = getIn(touched, name)
                                                const touchedRating = getIn(touched, rating)


                                                const errorName = getIn(errors, name)
                                                const errorRating = getIn(errors, rating)


                                                return <div key={skill.id}
                                                    style={{
                                                        margin: '80px auto'
                                                    }}
                                                >
                                                    <h4>{index + 1}.</h4>
                                                    <div className='personal-info-inputs-div'>
                                                        <div className='fifty-percent-divs'>
                                                            <ProfileTextField fullWidth variant='filled' label='Name'
                                                                name={name}
                                                                value={skill.name}
                                                                helperText={
                                                                    touchedName && errorName
                                                                        ? errorName
                                                                        : ""
                                                                }
                                                                error={Boolean(touchedName && errorName)}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                            />
                                                        </div>
                                                        <div className='fifty-percent-divs'>
                                                            <ProfileTextField label='Rating (out of 10)'
                                                                name={rating}
                                                                value={skill.rating}
                                                                helperText={
                                                                    touchedRating && errorRating
                                                                        ? errorRating
                                                                        : ""
                                                                }
                                                                error={Boolean(touchedRating && errorRating)}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
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
                                                            onClick={() => {
                                                                remove(index)
                                                            }}

                                                        >Remove</SmallButton>
                                                    </div>
                                                </div>
                                            })}
                                            <SmallButton variant='contained'
                                                onClick={() => push({
                                                    id: skills.length > 0 ? skills[skills.length - 1]['id'] + 1 : 1,
                                                    name: '',
                                                    rating: ''
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
                                onClick = {()=>{navigate('/candidate/experience-info')}}
                                >Back</SmallButton>
                                <SmallButton type = 'submit' variant='contained'>Save & Next</SmallButton>
                            </div>
                        </Form>
                    )
                }}
            </Formik>


        </div >
    )
}

export default CandidateSkills