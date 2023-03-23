import { SEND_PERSONAL_INFO_REQUEST, SEND_PROFILE_PICTURE_REQUEST,GET_PERSONAL_INFO_REQUEST,
    GET_EDUCATION_INFO_REQUEST,SEND_EDUCATION_INFO_REQUEST,
    GET_EXPERIENCE_INFO_REQUEST,SEND_EXPERIENCE_INFO_REQUEST,
    GET_SKILLS_INFO_REQUEST,SEND_SKILLS_INFO_REQUEST,
    GET_ABOUT_INFO_REQUEST,SEND_ABOUT_INFO_REQUEST
} from "./types"


export const sendProfilePicture=(query)=>{
    console.log(query)
    return {type:SEND_PROFILE_PICTURE_REQUEST,query}
}

export const sendPersonalInfo = (query)=>{
    return {type:SEND_PERSONAL_INFO_REQUEST,query}
}

export const getPersonalInfo = ()=>{
    return {type:GET_PERSONAL_INFO_REQUEST}
}

export const sendEducationInfo = (query)=>{
    return {type:SEND_EDUCATION_INFO_REQUEST,query}
}

export const getEducationInfo = ()=>{
    return {type:GET_EDUCATION_INFO_REQUEST}
}

export const sendExperienceInfo = (query)=>{
    return {type:SEND_EXPERIENCE_INFO_REQUEST,query}
}

export const getExperienceInfo = ()=>{
    return {type:GET_EXPERIENCE_INFO_REQUEST}
}

export const sendSkillsInfo = (query)=>{
    return {type:SEND_SKILLS_INFO_REQUEST,query}
}

export const getSkillsInfo = ()=>{
    return {type:GET_SKILLS_INFO_REQUEST}
}

export const sendAboutInfo = (query)=>{
    return {type:SEND_ABOUT_INFO_REQUEST,query}
}

export const getAboutInfo = ()=>{
    return {type:GET_ABOUT_INFO_REQUEST}
}