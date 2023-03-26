import toast from "react-hot-toast";
import jwtDecode from 'jwt-decode'
import {
    SAVE_PROFILE_DATA_ERROR, SAVE_PROFILE_DATA_REQUESET, SAVE_PROFILE_DATA_SUCCESS,
    GET_PROFILE_DATA_ERROR, GET_PROFILE_DATA_REQUESET, GET_PROFILE_DATA_SUCCESS, GET_CANDIDATES_REQUESET, GET_CANDIDATES_SUCCESS, GET_CANDIDATES_ERROR, SELECT_CANDIDATES, REMOVE_CANDIDATES,
} from "./types";

const initial_state = {
    profile_info: '',
    candidate_error:false,
    candidates:[],
    selected_candidates:localStorage.getItem('selected_candidates')?JSON.parse(localStorage.getItem('selected_candidates')):[]
}

export const employerReducer = (state = initial_state, action) => {
    let toastId = null
    switch (action.type) {
        case SAVE_PROFILE_DATA_REQUESET:
            toastId = toast.success('Saving..')
            return state

        case SAVE_PROFILE_DATA_SUCCESS:
            toastId = toast.success('Profile Saved!')
            window.location.replace('/employer/dashboard')
            return { ...state, profile_info: action.resp.data }

        case SAVE_PROFILE_DATA_ERROR:
            toastId = toast.error('Saving Failed...')
            return state

        case GET_PROFILE_DATA_SUCCESS:
            return { ...state, profile_info: action.resp.data }


        case GET_CANDIDATES_SUCCESS:
            return {...state, candidates:action.resp.data}

        case GET_CANDIDATES_ERROR:
            return {...state, candidate_error:true}


        case SELECT_CANDIDATES:
            const s_cand = localStorage.getItem('selected_candidates')?JSON.parse(localStorage.getItem('selected_candidates')):[]
            if(s_cand.includes(action.user_id)){
                return {...state}
            }
            else{
                s_cand.push(action.user_id)
            localStorage.setItem('selected_candidates',JSON.stringify(s_cand))
            return {...state,selected_candidates:s_cand}
            }

        case REMOVE_CANDIDATES:
            const slected = JSON.parse(localStorage.getItem('selected_candidates'))
            let new_array = slected.filter((item)=>{
                return item!=action.user_id
            })
            localStorage.setItem('selected_candidates',JSON.stringify(new_array))
            return {...state, selected_candidates:new_array}

        case GET_PROFILE_DATA_ERROR:
        case GET_PROFILE_DATA_REQUESET:
        case GET_CANDIDATES_REQUESET:
        default:
            return state
    }
}