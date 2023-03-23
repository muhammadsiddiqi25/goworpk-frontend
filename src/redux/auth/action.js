import { REGISTER_REQUEST, VERIFICATION_REQUEST,LOGIN_REQUEST, OTP_REQUEST, SEND_EMAIL_REQUEST, SEND_PASSWORD_SUCCESS, RESET_PASSWORD_REQUEST, RESENEND_VERIFICATION_EMAIL_REQUEST, REQUEST_TOKENS_REQUEST } from "./constants";

export const register = (query) => {
  console.log("action");
  return { type: REGISTER_REQUEST, query };
};


export const verify = (query) => {
  console.log(query)
  return {type:VERIFICATION_REQUEST,query}
}

export const login  = (query) =>{
  return {type:LOGIN_REQUEST, query}
}

export const resend_verification_email  = () =>{
  console.log('action called')
  return {type:RESENEND_VERIFICATION_EMAIL_REQUEST }
}

export const sendEmail = (query)=>{
  return {type: SEND_EMAIL_REQUEST, query}
}

export const sendPassword = (query)=>{
  return {type: RESET_PASSWORD_REQUEST, query}
}

export const getTokens = (query)=>{
  return {type:REQUEST_TOKENS_REQUEST,query}
}