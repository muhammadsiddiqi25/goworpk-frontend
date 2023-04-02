import React from 'react'
import ProfileTextField from '../../components/custom-mui-comp/ProfileTextField'
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText
} from '@mui/material'
import { useFormik } from 'formik'
import * as yup from 'yup'
import SmallButton from '../../components/custom-mui-comp/Button'
import { useDispatch } from 'react-redux'
import { send_offer_request } from '../../redux/Employer/actions'
const SendOfferForm = () => {
  const dispatch = useDispatch()
  const valSchema = yup.object({
    position: yup.string().required('This field is required'),
    min_salary: yup.number('Only Numbers are valid').required('This field is required'),
    max_salary: yup.number('Only Numbers are valid').required('This field is required'),
    job_type: yup.string().required('This field is required'),
    job_description: yup.string().required('This field is required'),
  })

  const { values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit, setFieldValue } = useFormik({
      initialValues:{
        position: '',
        min_salary: '',
        max_salary: '',
        job_type: 'Full Time',
        job_description: '',
      },

      onSubmit:(values)=>{
        values.candidates = JSON.parse(localStorage.getItem('selected_candidates'))
        console.log(values)
        dispatch(send_offer_request(values))
      },

      validationSchema:valSchema
    })


  return (
    <div className='profileForm'>
      <h1
        style={{ textAlign: 'center' }}
      >Offer Details</h1>
      <form onSubmit={handleSubmit}>
        <ProfileTextField label='Position'
          name='position'
          value={values.position}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.position ? errors.position : ""}
          error={touched.position && Boolean(errors.position)}
        />
        <div className='personal-info-inputs-div'>
          <div className='fifty-percent-divs'>
            <ProfileTextField label='Min Salary' 
            name='min_salary'
            value={values.min_salary}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.min_salary ? errors.min_salary : ""}
            error={touched.min_salary && Boolean(errors.min_salary)}
            />
          </div>
          <div className='fifty-percent-divs'>
            <ProfileTextField label='Max Salary' 
            name='max_salary'
            value={values.max_salary}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.max_salary ? errors.max_salary : ""}
            error={touched.max_salary && Boolean(errors.max_salary)}
            
            />
          </div>
        </div>
        <div className='personal-info-inputs-div'>
          <div className='fifty-percent-divs'>
            <FormControl sx={{ display: 'flex' }} margin='dense'>
              <FormLabel>Job Type </FormLabel>
              <RadioGroup
                row
                name="job_type"
                            onChange = {handleChange}
                            value = {values.job_type}
                            onBlur={handleBlur}
                            error={touched.job_type && Boolean(errors.job_type)?errors.job_type:''}
              >
                <FormControlLabel value="Full Time" control={<Radio />} label="Full Time" />
                <FormControlLabel value="Part Time" control={<Radio />} label="Part Time" />
              </RadioGroup>
              <FormHelperText error >{touched.job_type ? errors.job_type : ""}</FormHelperText>
            </FormControl>
          </div>
        </div>
        <ProfileTextField multiline label='Job Description' 
        name='job_description'
            value={values.max_job_descriptionsalary}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.job_description ? errors.job_description : ""}
            error={touched.job_description && Boolean(errors.job_description)}
        />
        <SmallButton type='submit' variant='contained'>Submit</SmallButton>
      </form>
    </div>
  )
}

export default SendOfferForm