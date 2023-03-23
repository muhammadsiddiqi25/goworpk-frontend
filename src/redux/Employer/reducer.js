import toast from "react-hot-toast";
import jwtDecode from 'jwt-decode'
import { SAVE_PROFILE_DATA_ERROR, SAVE_PROFILE_DATA_REQUESET, SAVE_PROFILE_DATA_SUCCESS,
    GET_PROFILE_DATA_ERROR, GET_PROFILE_DATA_REQUESET, GET_PROFILE_DATA_SUCCESS,
} from "./types";

const initial_state = {
    profile_info :''
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
            return {...state, profile_info:action.resp.data}
        
        case SAVE_PROFILE_DATA_ERROR:
            toastId = toast.error('Saving Failed...')
            return state
        

            
    
            case GET_PROFILE_DATA_SUCCESS:
                return {...state, profile_info:action.resp.data}
            
            case GET_PROFILE_DATA_ERROR:
            case GET_PROFILE_DATA_REQUESET:
                return state

        default:
            return state
    }}