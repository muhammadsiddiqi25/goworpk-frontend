import React, { useState, useEffect } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Button, ButtonGroup, TextField } from '@mui/material'
import AuthInputs from '../../components/AtuhInputs'
import AuthPasswordInputs from '../../components/AuthPasswordInput'
import { Link } from 'react-router-dom'
import { useFormik, Form } from 'formik'
import * as yup from 'yup';
import SmallButton from '../../components/custom-mui-comp/Button';
import { sendPassword } from '../../redux/auth/action';
import { useDispatch } from 'react-redux';
// import { yupResolver } from '@hookform/resolvers/yup';

const ResetPassword = () => {
  const dispatch = useDispatch()
  const formSchema = yup.object({
    password: yup.string().required('Password is required!').min(8, 'Password must be 8 characters long')
      .matches(/[0-9]/, 'Password requires a number')
      .matches(/[a-z]/, 'Password requires a lowercase letter')
      .matches(/[A-Z]/, 'Password requires an uppercase letter')
      .matches(/[^\w]/, 'Password requires a symbol'),
    confirmPassword: yup.string().required('Please Re-enter your password!').oneOf([yup.ref('password'), null], "Passwords Don't match! "),
  })
  const { values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit, } = useFormik({
      initialValues: {
        password: '',
        confirmPassword: '',
      },
      onSubmit: (values) => {
        dispatch(sendPassword(values))
        console.log(values)
      },
      validationSchema: formSchema
    })
  const [show, setShow] = useState(false)
  const [val, setVal] = useState("")
  return (
    <div className='auth-form-div'>
      <h1>RESET PASSWORD</h1>
      <form onSubmit={handleSubmit}
        onBlur={handleBlur}>

        <div className='auth-inputs'>
          <label>Password:</label>
          <div
            className={errors.password && touched.password ? "auth-password-input input-error" : "auth-password-input"}
          >
            <input type={show ? 'text' : 'password'}
              name='password'
              onBlur={handleBlur}
              onChange={handleChange}

            />
            <button type='button' onClick={() => { setShow(!show) }}>{show ? <VisibilityIcon /> : <VisibilityOffIcon />}</button>
          </div>
          {errors.password && touched.password && (
            <p className="red">{errors.password}</p>
          )}
        </div>

        <div className='auth-inputs'>
          <label>Re-enter Password:</label>
          <div
            className={errors.confirmPassword && touched.confirmPassword ? "auth-password-input input-error" : "auth-password-input"}
          >
            <input type={show ? 'text' : 'password'}
              name='confirmPassword'
              onBlur={handleBlur}
              onChange={handleChange}

            />
            <button type='button' onClick={() => { setShow(!show) }}>{show ? <VisibilityIcon /> : <VisibilityOffIcon />}</button>
          </div>
          {errors.confirmPassword && touched.confirmPassword && (
            <p className="red">{errors.confirmPassword}</p>
          )}
        </div>
        <ButtonGroup>
          <SmallButton type='submit' variant="contained" disabled={isSubmitting} sx={{ margin: '40px auto auto auto' }}>Send</SmallButton>
          <SmallButton type='submit' variant="contained" disabled={isSubmitting} sx={{ margin: '40px auto auto auto' }}>Submit</SmallButton>
        </ButtonGroup>
      </form>
    </div>
  )
}

export default ResetPassword;

