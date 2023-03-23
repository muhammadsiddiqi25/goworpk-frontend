import React  from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup';
import SmallButton from '../../components/custom-mui-comp/Button';
import { sendEmail } from '../../redux/auth/action';
import { useDispatch, useSelector } from 'react-redux';

const Email = () => {
  const dispatch= useDispatch()
  const {error} = useSelector((state)=>state.authReducer)
  const emailSchema = yup.object({
    email: yup.string().email('Please enter valid email!').required('Email is required!'),
  })
  const {values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,} = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: (values) => {
      dispatch(sendEmail(values))
    },
    validationSchema: emailSchema
  })
  return (
    <div className='auth-form-div'>
      <h1>Reset Password</h1>
      <p style={{textAlign: "center" , fontSize:'20px'}  }>Enter your emial, an OTP will be sent on this email for verification</p>
      <form onSubmit={handleSubmit}
        onBlur={handleBlur}>
        <div className='auth-inputs'>
          <label>Email:</label>
         <div className={errors.email && touched.email ? "input-error" : ""}>
         <input type='text' 
          name = 'email'
          onBlur={handleBlur}
          onChange={handleChange}
          
          />
         </div>
          {/* <p className="error">{errors.email && touched.email? errors.email:''}</p> */}
          {errors.email && touched.email && (
        <p className="red">{errors.email}</p>
      )}
      {error&& (
        <p className="red">{error}</p>
      )}
        </div>
        
        <div>
        </div>
      <SmallButton type='submit' variant="contained" disabled = {isSubmitting} sx={{margin:'40px auto auto auto'}}>Submit</SmallButton>
      </form>
      <p style={{textAlign: "center"}}>Already have an account? <Link to = '/login'>login</Link></p>
    </div>
  )
}

export default Email;

