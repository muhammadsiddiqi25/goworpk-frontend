import * as types from './types'

const intitial_state = {
    theme: 'dark',
    loading: true,
    data: '',
    error: ''
}


export const generalReducer = (state = intitial_state, action) => {
    switch (action.type) {
        case types.CHANGE_THEME:
            if (state.theme === 'dark') {
                return { ...state, theme: 'light' }
            }
            else return { ...state, theme: 'dark' }
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
        default:
            return state;
    }
}
