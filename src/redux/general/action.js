import {
    CERTIFICATE_DATA_REQUEST,
     CV_BUILDER_REQUEST, VIEW_OFFER_REQUEST
} from './types'


export const getCertificationData=()=>{
    return {type: CERTIFICATE_DATA_REQUEST}
}

export const getCvBuilderData=()=>{
    return {type: CV_BUILDER_REQUEST}
}

export const getViewOfferData=()=>{
    return {type: VIEW_OFFER_REQUEST}
}