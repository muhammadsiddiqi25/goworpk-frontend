import {PRICING_REQUEST, PRICING_SUCCESS,PRICING_ERROR, FREE_REJECTED} from './types'

const intitial_state = {
    pricing:'',
    error:'',
    rejected:''
}

export const pricingReducer = (state = intitial_state, action)=>{
    switch(action.type){
        case PRICING_REQUEST:
            return state;
        case PRICING_SUCCESS:
            return {...state, pricing:action.resp.data}
        
        case PRICING_ERROR:
            return {...state, error:action.err.response.data.message}

        case FREE_REJECTED:
            return {...state, rejected:true}
        default:
            return state;
    }
}

