import {
  LOGIN_REQUEST, REGISTER_ERROR, REGISTER_REQUEST, REGISTER_SUCCESS,
  VERIFICATION_ERROR, VERIFICATION_REQUEST, VERIFICATION_SUCCESS, LOGIN_SUCCESS,
  LOGIN_ERROR,
  OTP_REQUEST,
  OTP_SUCCESS,
  OTP_ERROR,
  SEND_EMAIL_REQUEST,
  SEND_EMAIL_SUCCESS,
  SEND_EMAIL_ERROR,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
  RESET_PASSWORD_REQUEST,
  REQUEST_TOKENS_REQUEST,
  REQUEST_TOKENS_SUCCESS,
  REQUEST_TOKENS_ERROR,

} from "./constants";
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
const authReducer = (state = initial, action) => {
  let toastId = null
  switch (action.type) {
    case REGISTER_REQUEST:
      toast.dismiss();
      toastId = toast.success('Request Sent! Please Wait...')
      return { ...state, loading: true }



    case REGISTER_SUCCESS:
      localStorage.setItem('user', action.resp.data.user)
      localStorage.setItem('accessToken', action.resp.data.accessToken)
      localStorage.setItem('refreshToken', action.resp.data.refreshToken)
      toast.dismiss();
      toastId = toast.success('User Registration Successfull!')
      window.location.replace(`${action.resp.data.user.role}/verification`)
      return {
        ...state, loading: false,
        success: "User Registration Successfull!",
        user: action.resp.data.user,
        accessToken: action.resp.data.accessToken,
        refreshToken: action.resp.data.refreshToken,
      }



    case REGISTER_ERROR:
      toast.dismiss();
      toastId = toast.error(action.err.response.data.message)
      return { ...state, error: action.err.response.data.message };


    case VERIFICATION_REQUEST:
      toast.dismiss();
      toastId = toast.success('Request Sent! Please Wait...')
      return { ...state, loading: true }



    case VERIFICATION_SUCCESS:
      toast.dismiss();
      toastId = toast.success('Verification Successfull!')
      const {role} = jwtDecode(localStorage.getItem('accessToken'))
      if(role == 'candidate'){
        window.location.replace(`/candidate/profile`)
      }
      else if(role == 'employer'){
        window.location.replace('/employer/packages/freetrial')
      }
     
      return {
        ...state, loading: false,
        success: "Verification Successfull!",
      }



    case VERIFICATION_ERROR:
      toast.dismiss();
      toastId = toast.error(action.err.response.data.message)
      return { ...state, error: action.err.response.data.message };



    case LOGIN_REQUEST:
      toast.dismiss()
      toastId = toast.loading("Please Wait...")
      return { ...state, loading: true }

    case LOGIN_SUCCESS:
      console.log(action.resp)
      const user= action.resp.data.user
      localStorage.setItem('user', JSON.stringify(action.resp.data.user))
      localStorage.setItem('accessToken', action.resp.data.accessToken)
      localStorage.setItem('refreshToken', action.resp.data.refreshToken)
      toast.dismiss();
      toastId = toast.success('Login Successfull!')

      if (action.resp.data.user.verified) {
        window.location.replace(`${action.resp.data.user.role}/dashboard`)
      }
      else window.location.replace(`${user.role}/verification`)
      state = {
        ...state, loading: false,
        success: "Login Successfull!",
        user: action.resp.data.user,
        accessToken: action.resp.data.accessToken,
        refreshToken: action.resp.data.refreshToken,
      }
      break;
    case LOGIN_ERROR:
      toast.dismiss();
      toastId = toast.error(action.err.response.data.message)
      state =  { ...state, error: action.err.response.data.message };
      break;
      
    case OTP_REQUEST:
      toast.dismiss()
      console.log('otp')
      toastId = toast.loading('Pleas Wait...')
    
    case OTP_SUCCESS:
      toast.dismiss()
      toastId = toast.success('OTP Sent successfully!')
      localStorage.removeItem('user')
      localStorage.removeItem('accessToken')
      window.replace('/login')
      return state
    case OTP_ERROR:
      toast.dismiss()
      toastId = toast.error('Error Sending OTP!')
      return state
    case SEND_EMAIL_REQUEST:
      toast.dismiss();
      toastId = toast.success("Emial Send Successfully!");
      return state;
    case SEND_EMAIL_SUCCESS:
      toast.dismiss();
      toastId=toast.success("Check your mail for OTP!");
      return state;
    case SEND_EMAIL_ERROR:
      toast.dismiss();
      toastId = toast.success(action.err.response.data.message)
      return {...state,error: action.err.response.data.message}
    
    case RESET_PASSWORD_REQUEST:
      toast.dismiss();
      toastId = toast.success("Password reset requested!");
      return state;
    case RESET_PASSWORD_SUCCESS:
      toast.dismiss();
      toastId = toast.success("Password changed successfully!");
      return state;
    case RESET_PASSWORD_ERROR:
      toast.dismiss();
      toastId = toast.success(action.err.response.data.message)
      return {...state,error: action.err.response.data.message}


    case REQUEST_TOKENS_REQUEST:
      return state
    
      case REQUEST_TOKENS_SUCCESS:
        console.log('request tokens success')
        localStorage.setItem('accessToken', action.resp.data.accessToken)
        localStorage.setItem('refreshToken', action.resp.data.refreshToken)
        return {...state, accessToken: action.resp.data.accessToken,
          refreshToken: action.resp.data.refreshToken,}
      
          case REQUEST_TOKENS_ERROR:
            console.log(action.err.response.data)
            return state;
      default:
      return state;
  }
  return state;
};

export default authReducer;
