import { takeLatest, call,put } from "redux-saga/effects";
import { send_candidate_certification_data, send_candidate_cv_builder_data, send_candidate_view_offer_data } from "../../api/api";
import { CERTIFICATE_DATA_FAILED, CERTIFICATE_DATA_REQUEST, CERTIFICATE_DATA_SUCCESS, CV_BUILDER_FAILED, CV_BUILDER_REQUEST, CV_BUILDER_SUCCESS, VIEW_OFFER_FAILED, VIEW_OFFER_REQUEST, VIEW_OFFER_SUCCESS } from "./types";

function* generalSaga(){
    yield takeLatest(CERTIFICATE_DATA_REQUEST, get_candidate_certification_data);
    yield takeLatest(CV_BUILDER_REQUEST, get_candidate_cv_builder_data); 
    yield takeLatest(VIEW_OFFER_REQUEST, get_candidate_view_offer_data)
}

function* get_candidate_certification_data() {
    try {
        const res = yield call(()=> send_candidate_certification_data);
        console.log("Response from Candidate Certifications", res);
        yield put ({type: CERTIFICATE_DATA_SUCCESS, res});
    }
    catch(err){
        console.log("Error from Certification Data side", err);
        yield put({type: CERTIFICATE_DATA_FAILED, err})
    }
}


function* get_candidate_cv_builder_data(){
    try{
        const res = yield call(()=> send_candidate_cv_builder_data);
        console.log("Response from Builder Saga", res);
        yield put({type: CV_BUILDER_SUCCESS, res});
    }catch(err){
        console.log("Error in Builder Saga", err);
        yield put({type: CV_BUILDER_FAILED, err});
    }
}

function* get_candidate_view_offer_data(){
    try{
        const res = yield call(()=> send_candidate_view_offer_data);
        console("Response from View Offer Saga data", res);
        yield put({type: VIEW_OFFER_SUCCESS, res})
    }catch(err){
        console.log("Error in View Offer: ", err);
        yield put({type: VIEW_OFFER_FAILED, err})
    }
}

export default generalSaga;