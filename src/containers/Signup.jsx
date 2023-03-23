import React,{useState} from 'react'
import {Button, TextField} from '@mui/material'
import AuthInputs from '../components/AtuhInputs'
import AuthPasswordInputs from '../components/AuthPasswordInput'
import { Link } from 'react-router-dom'
import {useFormik} from 'formik'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import SmallButton from '../components/custom-mui-comp/Button';
import * as yup from 'yup';
import { useDispatch } from 'react-redux'
import { register } from '../redux/auth/action'

const Signup = () => {
  const [roleInput,setRoleInput] = useState()
  const dispatch = useDispatch()
  const [role,setRole] = useState()
  const [roleError,setRoleError] = useState()
  const signupSchema = yup.object({
    email: yup.string().email('Please enter valid email!').required('Email is required!'),
    username:yup.string().required('Username is required.'),
    password:yup.string().required('Password is required!').min(8, 'Password must be 8 characters long')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[^\w]/, 'Password requires a symbol'),
    repassword:yup.string().required('Please Re-enter your password!').oneOf([yup.ref('password'), null], "Passwords Don't match! "),
    terms:yup.boolean().oneOf([true],'You must accept terms and conditions!')
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
      password: '',
      username:'',
      repassword:'',
      terms:false
    },
    onSubmit: (values) => {
      console.log(values)
      if(!role){
        setRoleError('Please Select one.')
        return
      }
      dispatch(register({email:values.email,
        username:values.username, 
        password:values.password,
        role:role}))
    },
    validationSchema: signupSchema
  })
  const [show,setShow] = useState(false)
  const [show1,setShow1] = useState(false)
  return (
    <div className='auth-form-div'>
        <h1>SIGNUP</h1>
        <form onSubmit={handleSubmit}>
         <div className='choice-button-div'>
         <button 
         type='button'
         onClick={()=>{
          setRole('employer')
         }}
         className={role=='employer'?'choiceButton choice-button-active':'choiceButton'}>Employer</button>
          <button 
          type='button'
          onClick={()=>{
            setRole('candidate')
           }}
          className={role=='candidate'?'choiceButton choice-button-active':'choiceButton'}>Candidate</button>
         </div>
         <p className="red">{roleError}</p>
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
        </div>
        <div className='auth-inputs'>
          <label>Username:</label>
         <div className={errors.username && touched.username ? "input-error" : ""}>
         <input type='text' 
          name = 'username'
          onBlur={handleBlur}
          onChange={handleChange}
          
          />
         </div>
          {/* <p className="error">{errors.email && touched.email? errors.email:''}</p> */}
          {errors.username && touched.username && (
        <p className="red">{errors.username}</p>
      )}
        </div>
        <div className = 'auth-inputs'>
        <label>Password:</label>
        <div
        className={errors.password && touched.password ? "auth-password-input input-error" : "auth-password-input"}
        >
        <input type = {show?'text':'password'}
        name = 'password'
        onBlur={handleBlur}
        onChange={handleChange}
        
        />
        <button type = 'button' onClick={()=>{setShow(!show)}}>{show?<VisibilityIcon />    :<VisibilityOffIcon />}</button>
        </div>
        {errors.password && touched.password && (
        <p className="red">{errors.password}</p>
      )}
        </div>
        <div className = 'auth-inputs'>
        <label>Re-enter Password:</label>
        <div
        className={errors.repassword && touched.repassword ? "auth-password-input input-error" : "auth-password-input"}
        >
        <input type = {show1?'text':'password'}
        name = 'repassword'
        onBlur={handleBlur}
        onChange={handleChange}
        />
        
        <button type = 'button' onClick={()=>{
          console.log({show,show1})
          setShow1(!show1)}}>{show1?<VisibilityIcon />:<VisibilityOffIcon />}</button>
        </div>
        {errors.repassword && touched.repassword && (
        <p className="red">{errors.repassword}</p>
      )}
        </div>
        <div style={{display:'block'}}>
          <label htmlFor = 'tandc' textAlign = 'center'>By clicking signup you will agree to <Link>Terms and Conditions!</Link></label>
        </div>
        <SmallButton 
        variant = 'contained'
        className = 'auth-button'
        type = 'submit'
        sx={{margin:'40px auto auto auto'}}
        >Signup</SmallButton>
      </form>
    <p style={{marginTop:'30px'}}>Already have an account?  <Link to='/login'>Login</Link></p>
    </div>
  )
}

export default Signup

