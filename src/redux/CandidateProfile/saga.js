import { takeLatest, call, put } from "redux-saga/effects";
import { send_profile_picture,send_personal_info,get_personal_info,
    get_education_info,send_education_info,
    get_experience_info,send_experience_info,
    get_skills_info,send_skills_info,
    get_about_info,send_about_info
} from "../../api/api";
import {
    SEND_PROFILE_PICTURE_REQUEST,
    SEND_PROFILE_PICTURE_SUCCESS,
    SEND_PROFILE_PICTURE_ERROR,
    SEND_PERSONAL_INFO_REQUEST,
    SEND_PERSONAL_INFO_SUCCESS,
    SEND_PERSONAL_INFO_ERROR,
    GET_PERSONAL_INFO_SUCCESS,
    GET_PERSONAL_INFO_ERROR,
    GET_PERSONAL_INFO_REQUEST,
    
    SEND_EDUCATION_INFO_REQUEST,
    SEND_EDUCATION_INFO_SUCCESS,
    SEND_EDUCATION_INFO_ERROR,
    GET_EDUCATION_INFO_SUCCESS,
    GET_EDUCATION_INFO_ERROR,
    GET_EDUCATION_INFO_REQUEST,

    SEND_EXPERIENCE_INFO_REQUEST,
    SEND_EXPERIENCE_INFO_SUCCESS,
    SEND_EXPERIENCE_INFO_ERROR,
    GET_EXPERIENCE_INFO_SUCCESS,
    GET_EXPERIENCE_INFO_ERROR,
    GET_EXPERIENCE_INFO_REQUEST,


    SEND_SKILLS_INFO_REQUEST,
    SEND_SKILLS_INFO_SUCCESS,
    SEND_SKILLS_INFO_ERROR,
    GET_SKILLS_INFO_SUCCESS,
    GET_SKILLS_INFO_ERROR,
    GET_SKILLS_INFO_REQUEST,

    SEND_ABOUT_INFO_REQUEST,
    SEND_ABOUT_INFO_SUCCESS,
    SEND_ABOUT_INFO_ERROR,
    GET_ABOUT_INFO_SUCCESS,
    GET_ABOUT_INFO_ERROR,
    GET_ABOUT_INFO_REQUEST,


} from './types'

function* candidateProfileSaga(){
    yield takeLatest(SEND_PROFILE_PICTURE_REQUEST,sendProfilePicture)
    yield takeLatest(SEND_PERSONAL_INFO_REQUEST, sendPersonalInfo)
    yield takeLatest(GET_PERSONAL_INFO_REQUEST,getPersonalInfo)

    yield takeLatest(SEND_EDUCATION_INFO_REQUEST, sendEducationInfo)
    yield takeLatest(GET_EDUCATION_INFO_REQUEST,getEducationInfo)

    yield takeLatest(SEND_EXPERIENCE_INFO_REQUEST, sendExperienceInfo)
    yield takeLatest(GET_EXPERIENCE_INFO_REQUEST,getExperienceInfo)

    yield takeLatest(SEND_ABOUT_INFO_REQUEST, sendAboutInfo)
    yield takeLatest(GET_ABOUT_INFO_REQUEST,getAboutInfo)

    yield takeLatest(SEND_SKILLS_INFO_REQUEST, sendSkillsInfo)
    yield takeLatest(GET_SKILLS_INFO_REQUEST,getSkillsInfo)
    
}


function* sendProfilePicture(payload) {
    try{
        console.log(payload.query)
        const resp = yield call(()=>send_profile_picture(payload.query))
        yield put({ type: SEND_PROFILE_PICTURE_SUCCESS ,resp})
    }
    catch(err){
        console.log(err)
        yield put({ type: SEND_PROFILE_PICTURE_ERROR ,err})
    }
  }
  

function* sendPersonalInfo(payload){
    try{
        const resp = yield call(()=>send_personal_info(payload.query))
        yield put({ type: SEND_PERSONAL_INFO_SUCCESS ,resp})
    }
    catch(err){
        console.log(err)
        yield put({ type: SEND_PERSONAL_INFO_ERROR,err})
    }
}

function* getPersonalInfo(){
    try{
        const resp = yield call(()=>get_personal_info())
        yield put({ type: GET_PERSONAL_INFO_SUCCESS ,resp})
    }
    catch(err){
        console.log(err)
        yield put({ type: GET_PERSONAL_INFO_ERROR,err})
    }
}


function* sendEducationInfo(payload){
    try{
        const resp = yield call(()=>send_education_info(payload.query))
        yield put({ type: SEND_EDUCATION_INFO_SUCCESS ,resp})
    }
    catch(err){
        console.log(err)
        yield put({ type: SEND_EDUCATION_INFO_ERROR,err})
    }
}

function* getEducationInfo(){
    try{
        const resp = yield call(()=>get_education_info())
        yield put({ type: GET_EDUCATION_INFO_SUCCESS ,resp})
    }
    catch(err){
        console.log(err)
        yield put({ type: GET_EDUCATION_INFO_ERROR,err})
    }
}

function* sendExperienceInfo(payload){
    try{
        const resp = yield call(()=>send_experience_info(payload.query))
        yield put({ type: SEND_EXPERIENCE_INFO_SUCCESS ,resp})
    }
    catch(err){
        console.log(err)
        yield put({ type: SEND_EXPERIENCE_INFO_ERROR,err})
    }
}

function* getExperienceInfo(){
    try{
        const resp = yield call(()=>get_experience_info())
        yield put({ type: GET_EXPERIENCE_INFO_SUCCESS ,resp})
    }
    catch(err){
        console.log(err)
        yield put({ type: GET_EXPERIENCE_INFO_ERROR,err})
    }
}

function* sendAboutInfo(payload){
    try{
        const resp = yield call(()=>send_about_info(payload.query))
        yield put({ type: SEND_ABOUT_INFO_SUCCESS ,resp})
    }
    catch(err){
        console.log(err)
        yield put({ type: SEND_ABOUT_INFO_ERROR,err})
    }
}

function* getAboutInfo(){
    try{
        const resp = yield call(()=>get_about_info())
        yield put({ type: GET_ABOUT_INFO_SUCCESS ,resp})
    }
    catch(err){
        console.log(err)
        yield put({ type: GET_ABOUT_INFO_ERROR,err})
    }
}


function* sendSkillsInfo(payload){
    try{
        const resp = yield call(()=>send_skills_info(payload.query))
        yield put({ type: SEND_SKILLS_INFO_SUCCESS ,resp})
    }
    catch(err){
        console.log(err)
        yield put({ type: SEND_SKILLS_INFO_ERROR,err})
    }
}

function* getSkillsInfo(){
    try{
        const resp = yield call(()=>get_skills_info())
        yield put({ type: GET_SKILLS_INFO_SUCCESS ,resp})
    }
    catch(err){
        console.log(err)
        yield put({ type: GET_SKILLS_INFO_ERROR,err})
    }
}

export default candidateProfileSaga;