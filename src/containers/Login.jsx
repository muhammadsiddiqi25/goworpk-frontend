import React , {useState,useEffect}   from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Button, TextField } from '@mui/material'
import AuthInputs from '../components/AtuhInputs'
import AuthPasswordInputs from '../components/AuthPasswordInput'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup';
import SmallButton from '../components/custom-mui-comp/Button';
import { login } from '../redux/auth/action';
import { useDispatch } from 'react-redux';
const Login = () => {
  const dispatch= useDispatch()
  const loginSchema = yup.object({
    email: yup.string().email('Please enter valid email!').required('Email is required!'),
    password: yup.string().required('Password is required!').min(8, 'Password must be 8 characters long')
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
    },
    onSubmit: (values) => {
      dispatch(login(values))
      console.log(values)
    },
    validationSchema: loginSchema
  })
  const [show,setShow] = useState(false)
  return (
    <div className='auth-form-div'>
      <h1>LOGIN</h1>
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
        <div>
        <Link to='/'>Forgot Password?</Link>
        </div>
      <SmallButton type='submit' variant="contained" sx={{margin:'40px auto auto auto'}}>Login</SmallButton>
      </form>
      <p>Already have an account? <Link to = '/signup'>Signup</Link></p>
    </div>
  )
}

export default Login

