import { GET_CANDIDATES_REQUESET, GET_PROFILE_DATA_REQUESET, REMOVE_CANDIDATES, SAVE_PROFILE_DATA_REQUESET, SELECT_CANDIDATES, SEND_OFFER_REQUESET } from "./types"


export const save_employer_profile = (query)=>{
    return {type:SAVE_PROFILE_DATA_REQUESET,query}
}


export const get_employer_profile = ()=>{
    return {type:GET_PROFILE_DATA_REQUESET}
}


export const get_candidates = ()=>{
    return {type:GET_CANDIDATES_REQUESET}
}


export const select_candidate = (user_id)=>{
    return {type:SELECT_CANDIDATES,user_id}
}

export const remove_candidate = (user_id) => {
    return {type:REMOVE_CANDIDATES,user_id}
}   

export const send_offer_request = (query)=>{
    return {type:SEND_OFFER_REQUESET,query}
}