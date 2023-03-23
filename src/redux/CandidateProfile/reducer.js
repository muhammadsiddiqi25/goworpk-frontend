
import toast from "react-hot-toast";
import {
    SEND_PROFILE_PICTURE_REQUEST,
    SEND_PROFILE_PICTURE_SUCCESS,
    SEND_PROFILE_PICTURE_ERROR,

    SEND_PERSONAL_INFO_REQUEST,
    SEND_PERSONAL_INFO_SUCCESS,
    SEND_PERSONAL_INFO_ERROR,
    GET_PERSONAL_INFO_ERROR,
    GET_PERSONAL_INFO_REQUEST,
    GET_PERSONAL_INFO_SUCCESS,

    SEND_EDUCATION_INFO_REQUEST,
    SEND_EDUCATION_INFO_SUCCESS,
    SEND_EDUCATION_INFO_ERROR,
    GET_EDUCATION_INFO_SUCCESS,
    GET_EDUCATION_INFO_ERROR,
    GET_EDUCATION_INFO_REQUEST,

    SEND_EXPERIENCE_INFO_REQUEST,
    SEND_EXPERIENCE_INFO_SUCCESS,
    SEND_EXPERIENCE_INFO_ERROR,
    GET_EXPERIENCE_INFO_SUCCESS,
    GET_EXPERIENCE_INFO_ERROR,
    GET_EXPERIENCE_INFO_REQUEST,

    SEND_SKILLS_INFO_REQUEST,
    SEND_SKILLS_INFO_SUCCESS,
    SEND_SKILLS_INFO_ERROR,
    GET_SKILLS_INFO_SUCCESS,
    GET_SKILLS_INFO_ERROR,
    GET_SKILLS_INFO_REQUEST,

    SEND_ABOUT_INFO_REQUEST,
    SEND_ABOUT_INFO_SUCCESS,
    SEND_ABOUT_INFO_ERROR,
    GET_ABOUT_INFO_SUCCESS,
    GET_ABOUT_INFO_ERROR,
    GET_ABOUT_INFO_REQUEST,
} from './types'



const intitial_state = {
    personal_info: null,
    education_info: null,
    experience_info: null,
    about_info: null,
    skills_info: null,
}

export const candidateProfileReducer = (state = intitial_state, action) => {
    let toastId = null
    switch (action.type) {
        case SEND_PERSONAL_INFO_REQUEST:
        case SEND_EDUCATION_INFO_REQUEST:
        case SEND_EXPERIENCE_INFO_REQUEST:
        case SEND_PROFILE_PICTURE_REQUEST:
        case SEND_ABOUT_INFO_REQUEST:
        case SEND_SKILLS_INFO_REQUEST:
            toast.dismiss()
            toastId = toast.success('Saving...')
            return state

        case SEND_PROFILE_PICTURE_SUCCESS:
            toast.dismiss()
            toastId = toast.success('Profile Picture Saved')
            window.location.replace('/candidate/personal-info')
            return state

        case SEND_PERSONAL_INFO_SUCCESS:
            toast.dismiss()
            toastId = toast.success('Information Saved')
            window.location.replace('/candidate/education-info')
            return { ...state, personal_info: action.resp.data }

        case SEND_EDUCATION_INFO_SUCCESS:
            toast.dismiss()
            toastId = toast.success('Information Saved')
            window.location.replace('/candidate/experience-info')
            return { ...state, education_info: action.resp.data }

        case SEND_EXPERIENCE_INFO_SUCCESS:
            toast.dismiss()
            toastId = toast.success('Information Saved')
            window.location.replace('/candidate/skills-info')
            return { ...state, experience_info: action.resp.data }

        case SEND_ABOUT_INFO_SUCCESS:
            toast.dismiss()
            toastId = toast.success('Information Saved')
            window.location.replace('/candidate/dashboard')
            return { ...state, about_info: action.resp.data }



        case SEND_SKILLS_INFO_SUCCESS:
            toast.dismiss()
            toastId = toast.success('Information Saved')
            window.location.replace('/candidate/about')
            return { ...state, skills_info: action.resp.data }




        case SEND_EDUCATION_INFO_ERROR:
        case SEND_PERSONAL_INFO_ERROR:
        case SEND_EXPERIENCE_INFO_ERROR:
        case SEND_PROFILE_PICTURE_ERROR:
        case SEND_SKILLS_INFO_ERROR:
        case SEND_ABOUT_INFO_ERROR:
            toast.dismiss()
            toastId = toast.error('Failed to save info.')


        case GET_PERSONAL_INFO_SUCCESS:
            return { ...state, personal_info: action.resp.data }

        case GET_EDUCATION_INFO_SUCCESS:
            return { ...state, education_info: action.resp.data }

        case GET_EXPERIENCE_INFO_SUCCESS:
            return { ...state, experience_info: action.resp.data }

        case GET_SKILLS_INFO_SUCCESS:
            return { ...state, skills_info: action.resp.data }

        case GET_ABOUT_INFO_SUCCESS:
            return { ...state, about_info: action.resp.data }

        case GET_EXPERIENCE_INFO_ERROR:
        case GET_PERSONAL_INFO_ERROR:
        case GET_EDUCATION_INFO_ERROR:
        case GET_PERSONAL_INFO_REQUEST:
        case GET_EDUCATION_INFO_REQUEST:
        case GET_EXPERIENCE_INFO_REQUEST:
        case GET_SKILLS_INFO_REQUEST:
        case GET_ABOUT_INFO_ERROR:
        case GET_ABOUT_INFO_REQUEST:
        case GET_SKILLS_INFO_ERROR:
        default:
            return state;
    }
}