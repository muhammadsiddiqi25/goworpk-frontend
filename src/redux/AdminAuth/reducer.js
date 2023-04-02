import {
    ADMIN_LOGIN_REQUEST,  ADMIN_LOGIN_SUCCESS,
    ADMIN_LOGIN_ERROR,

  
  } from "./type";
  import { loading_false, loading_true } from "../general/action";
  import toast from "react-hot-toast";
  import jwtDecode from 'jwt-decode'
  const initial = {
    accessToken: localStorage.getItem('accessToken') ? localStorage.getItem('accessToken') : null,
    refreshToken: localStorage.getItem('refreshToken') ? localStorage.getItem('refreshToken') : null,
    isAuthenticated: false,
    loading: false,
    user: localStorage.getItem('user') ? localStorage.getItem('user') : null,
    error: null,
    success: null
  };
  const authAdminReducer = (state = initial, action) => {
    let toastId = null
    switch (action.type) {
    //   case REGISTER_REQUEST:
    //     toast.dismiss();
    //     toastId = toast.success('Request Sent! Please Wait...')
    //     return { ...state, loading: true }
  
  
  
    //   case REGISTER_SUCCESS:
    //     localStorage.setItem('user', action.resp.data.user)
    //     localStorage.setItem('accessToken', action.resp.data.token)
    //     toast.dismiss();
    //     toastId = toast.success('User Registration Successfull!')
    //     window.location.replace(`/verification`)
    //     return {
    //       ...state, loading: false,
    //       success: "User Registration Successfull!",
    //       user: action.resp.data.user,
    //       token: action.resp.data.token
    //     }
  
  
  
    //   case REGISTER_ERROR:
    //     toast.dismiss();
    //     toastId = toast.error(action.err.response.data.message)
    //     return { ...state, error: action.err.response.data.message };
  
  
    //   case VERIFICATION_REQUEST:
    //     toast.dismiss();
    //     toastId = toast.success('Request Sent! Please Wait...')
    //     return { ...state, loading: true }
  
  
  
    //   case VERIFICATION_SUCCESS:
    //     toast.dismiss();
    //     toastId = toast.success('Verification Successfull!')
    //     const {userRole} = jwtDecode(localStorage.getItem('accessToken'))
    //     if(userRole == 'candidate'){
    //       window.location.replace(`/profile/candidate`)
    //     }
    //     else if(userRole == 'employer'){
    //       window.location.replace('/package/freetrial/employer')
    //     }
       
    //     return {
    //       ...state, loading: false,
    //       success: "Verification Successfull!",
    //     }
  
  
  
    //   case VERIFICATION_ERROR:
    //     toast.dismiss();
    //     toastId = toast.error(action.err.response.data.message)
    //     return { ...state, error: action.err.response.data.message };
  
  
  
      case ADMIN_LOGIN_REQUEST:
        toast.dismiss()
        toastId = toast.loading("Please Wait...")
        break;
  
      case ADMIN_LOGIN_SUCCESS:
        console.log('data',action.resp.data)
        localStorage.setItem('user', action.resp.data.user)
        localStorage.setItem('accessToken', action.resp.data.accessToken)
        localStorage.setItem('refreshToken', action.resp.data.refreshToken)
        toast.dismiss();
        toastId = toast.success('Login Successfull!')
          window.location.replace(`/admin/dashboard`)
        state =  {
          ...state, loading: false,
          success: "Admin Login Successfull!",
          user: action.resp.data.user,
          accessToken: action.resp.data.accessToken,
          refreshToken:action.resp.data.refreshToken
        }
        break;
  
      case ADMIN_LOGIN_ERROR:
        toast.dismiss();
        toastId = toast.error(action.err.response.data.message)
        state =  { ...state, error: action.err.response.data.message };
        break;
  
      
    //   case OTP_REQUEST:
    //     toast.dismiss()
    //     console.log('otp')
    //     toastId = toast.loading('Pleas Wait...')
      
    //   case OTP_SUCCESS:
    //     toast.dismiss()
    //     toastId = toast.success('OTP Sent successfully!')
    //     return state
    //   case OTP_ERROR:
    //     toast.dismiss()
    //     toastId = toast.error('Error Sending OTP!')
    //     return state
      
        default:
        break;
    }
    return state
  };
  
  export default authAdminReducer;
  