import { HOST_API } from "./constans"
import axios from 'axios'
import toast from "react-hot-toast";
let config = {
    headers: {
        'Content-Type': 'application/json',
    }
}

export const registerRequest = (data) => {
    const body = JSON.stringify(data)
    return axios.post(`${HOST_API}/auth/register`, body, config)
}

export const verifyRequest = (data) => {
    console.log(data)
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }
    const body = JSON.stringify(data)
    return axios.post(`${HOST_API}/auth/verify`, body, config)
}


export const loginRequest = (data) => {
    const body = JSON.stringify(data)
    return axios.post(`${HOST_API}/auth/login`, body, config)
}

export const adminloginRequest = (data) => {
    const body = JSON.stringify(data)
    return axios.post(`${HOST_API}/auth/admin-login`, body, config)
}

export const resend_email_request = () => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }
    return axios.get(`${HOST_API}/auth/resend-verification-email`, config)
}


export const get_pricing_details = () => {
    let config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }

    return axios.get(`${HOST_API}/get-pricing`, config)
}

export const set_pricing = (data) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }
    const body = JSON.stringify(data)
    try {
        const resp = axios.post(`${HOST_API}/set-pricing`, body, config)
        if (resp.status === 204) {
            toast.dismiss();
            const toastId = toast.success('Pricing Updated!')
        }
    }
    catch (e) {
        toast.dismiss();
        const toastId = toast.error('Prcing Update failed!')
    }
}

export const send_email = (data) => {
    let config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const body = JSON.stringify(data)
    return axios.post(`${HOST_API}/reset-password-get-email`, body, config)
}

export const sendPassword = (data) => {
    let config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const body = JSON.stringify(data)
    return axios.post(`${HOST_API}/reset-password-get-email`, body, config)
}

export const get_Dashboard_Data = () => {
    let config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        }
    }
    let res = axios.get(`${HOST_API}/candidate/dashboard_data`, config)
    return res
}

export const get_new_tokens = (data) => {
    let config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const body = JSON.stringify(data)
    let res = axios.post(`${HOST_API}/auth/access-token`, body, config)
    return res
}

export const send_profile_picture = (data) => {
    let config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        }
    }
    const body = JSON.stringify(data)
    let res = axios.post(`${HOST_API}/profile-image`,body, config)
    return res
}


export const send_personal_info =(data)=>{
    let config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        }
    }
    const body = JSON.stringify(data)
    let res = axios.post(`${HOST_API}/candidate/send-personal-info`,body, config)
    return res
}

export const get_personal_info = ()=>{
    let config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        }
    }
    let res = axios.get(`${HOST_API}/candidate/get-personal-info`, config)
    return res
}

export const send_education_info =(data)=>{
    let config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        }
    }
    const body = JSON.stringify(data)
    let res = axios.post(`${HOST_API}/candidate/send-education-info`,body, config)
    return res
}

export const get_education_info = ()=>{
    let config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        }
    }
    let res = axios.get(`${HOST_API}/candidate/get-education-info`, config)
    return res
}

export const send_experience_info =(data)=>{
    let config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        }
    }
    const body = JSON.stringify(data)
    let res = axios.post(`${HOST_API}/candidate/send-experience-info`,body, config)
    return res
}

export const get_experience_info = ()=>{
    let config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        }
    }
    let res = axios.get(`${HOST_API}/candidate/get-experience-info`, config)
    return res
}


export const send_skills_info =(data)=>{
    let config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        }
    }
    const body = JSON.stringify(data)
    let res = axios.post(`${HOST_API}/candidate/send-skills-info`,body, config)
    return res
}

export const get_skills_info = ()=>{
    let config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        }
    }
    let res = axios.get(`${HOST_API}/candidate/get-skills-info`, config)
    return res
}


export const send_about_info =(data)=>{
    let config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        }
    }
    const body = JSON.stringify(data)
    let res = axios.post(`${HOST_API}/candidate/send-about-info`,body, config)
    return res
}

export const get_about_info = ()=>{
    let config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        }
    }
    let res = axios.get(`${HOST_API}/candidate/get-about-info`, config)
    return res
}

export const get_employer_profile = ()=>{
    let config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        }
    }
    let res = axios.get(`${HOST_API}/emp/get-employer-profile`, config)
    return res
}

export const send_employer_profile =(data)=>{
    let config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        }
    }
    const body = JSON.stringify(data)
    let res = axios.post(`${HOST_API}/emp/send-employer-profile`,body, config)
    return res
}

export const send_candidate_certification_data= ()=>{
    let config={
        headers:{
            'Content-Type': 'application/json',
        }
    }
    let res=axios.get(`${HOST_API}/get-candidate-certification-data`, config)
    return res;
}

export const send_candidate_cv_builder_data=()=>{
    let config={
        headers:{
            'Content-Type': 'application/json'
        }
    }
    let res = axios.get(`${HOST_API}/get-candidate-cv-data`, config)
    return res;
}

export const send_candidate_view_offer_data= ()=>{
    let config = {
        headers:{
            'Content-type': 'application/json'
            
        }
    }
    let res =axios.get(`${HOST_API}/get-candidate-view-offer-data`, config);
    return res;
}

export const logout= ()=>{
    let config = {
        headers:{
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        }
    }
    const body = JSON.stringify({refreshToken:localStorage.getItem('refreshToken')})
    let res =axios.post(`${HOST_API}/logout`,body, config);
    return res;
}


export const get_candidates_request= ()=>{
    let config = {
        headers:{
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        }
    }
    let res =axios.get(`${HOST_API}/emp/get-candidates`, config);
    return res;
}


export const get_candidates_details= async (user_id)=>{
    let config = {
        headers:{
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        }
    }
    const body = JSON.stringify({user_id:user_id})
    try{
        let res =await axios.post(`${HOST_API}/emp/get-candidates-details`,body, config);
        return res;
    }
    catch(e){
        return e
    }
}

