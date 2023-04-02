import React from 'react'
import SmallButton from '../../components/custom-mui-comp/Button'
import ProfileTextField from '../../components/custom-mui-comp/ProfileTextField'
import { useFormik } from 'formik'
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { adminLoginRequest } from '../../redux/AdminAuth/action';
const AdminLogin = () => {
    const dispatch = useDispatch()
    const valSchema = yup.object({
        email:yup.string().email('Please Enter a valid email.').required("This field is required"),
        password:yup.string().required("This Field is required")
    })

    const {touched,values,handleSubmit,handleBlur,errors,handleChange} =useFormik({
        initialValues:{
            email:'',
            password:''
        },
        onSubmit:(values)=>{
            console.log(values)
            dispatch(adminLoginRequest(values))
        },
        validationSchema:valSchema
    })

    return (
        <div className='auth-form-div'>
            <h1>ADMIN LOGIN</h1>
           <form onSubmit={handleSubmit}>
           <div className='auth-inputs'>
                <ProfileTextField 
                label = 'email:'
                name = 'email'
                onBlur = {handleBlur}
                onChange = {handleChange}
                value = {values.email}
                error = {errors.email && touched.email}
                helperText = {errors.email && touched.email?errors.email:''}
                />
            </div>
            <div className='auth-inputs'>
                <ProfileTextField 
                label = 'Password'
                type = 'password'
                name = 'password'
                onBlur = {handleBlur}
                onChange = {handleChange}
                value = {values.password}
                error = {errors.password && touched.password}
                helperText = {errors.password && touched.password?errors.password:''}
                />
            </div>
            <SmallButton type = 'submit' variant = 'contained'>Login</SmallButton>
           </form>
        </div>
    )
}

export default AdminLogin