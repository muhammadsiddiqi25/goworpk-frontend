import * as types from './types'
import toast from "react-hot-toast";
const intitial_state = {
    theme: 'dark',
    loading: true,
    data: '',
    error: ''
}


export const generalReducer = (state = intitial_state, action) => {
    let toastId = null
    switch (action.type) {
        case types.LOADING_TRUE:
            return { ...state, loading: true }
        case types.LOADING_FALSE:
            return { ...state, loading: false }

        case types.CERTIFICATE_DATA_REQUEST:
            return state;
        case types.CERTIFICATE_DATA_SUCCESS:
            return { ...state, data: action.res.data }

        case types.CERTIFICATE_DATA_FAILED:
            return { ...state, error: action.err.response.data.message }
        case types.CV_BUILDER_REQUEST:
            return state;
        case types.CV_BUILDER_SUCCESS:
            return { ...state, data: action.res.data }
        case types.CV_BUILDER_FAILED:
            return { ...state, error: action.err.response.data.message }
        case types.VIEW_OFFER_REQUEST:
            return state;
        case types.VIEW_OFFER_SUCCESS:
            return { ...state, data: action.res.data }
        case types.VIEW_OFFER_FAILED:
            return { ...state, error: action.err.response.data.message }
        
        case types.LOGOUT_FAILED:
            toastId = toast.error('Logout Failed!')
            return state;
        case types.LOGOUT_REQUEST:
            return {...state}
        
        case types.LOGOUT_SUCCESS:
            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
            localStorage.removeItem('user')
            toastId = toast.success('Logout Successful!')
            window.location.replace('/login')
            return {...state}
        default:
            return state;
    }
}
