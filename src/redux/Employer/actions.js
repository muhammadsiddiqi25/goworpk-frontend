import { GET_PROFILE_DATA_REQUESET, SAVE_PROFILE_DATA_REQUESET } from "./types"


export const save_employer_profile = (query)=>{
    return {type:SAVE_PROFILE_DATA_REQUESET,query}
}


export const get_employer_profile = ()=>{
    return {type:GET_PROFILE_DATA_REQUESET}
}