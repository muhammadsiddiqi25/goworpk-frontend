import { takeLatest, call, put } from "redux-saga/effects";
import { SAVE_PROFILE_DATA_REQUESET,GET_PROFILE_DATA_REQUESET, SAVE_PROFILE_DATA_ERROR,GET_PROFILE_DATA_ERROR, SAVE_PROFILE_DATA_SUCCESS, GET_PROFILE_DATA_SUCCESS } from "./types";
import { send_employer_profile,get_employer_profile } from "../../api/api";
function* employerSaga() {
  yield takeLatest(SAVE_PROFILE_DATA_REQUESET, saveProfileData)
  yield takeLatest(GET_PROFILE_DATA_REQUESET, getProfileData);

}

function* saveProfileData(payload){
    try{
        const resp = yield call(()=>send_employer_profile(payload.query))
        yield put({type:SAVE_PROFILE_DATA_SUCCESS,resp})
    }
    catch(err){
        console.log(err)
        yield put({type:SAVE_PROFILE_DATA_ERROR,err})
    }
}


function* getProfileData(){
    try{
        const resp = yield call(()=>get_employer_profile())
        yield put({type:GET_PROFILE_DATA_SUCCESS,resp})
    }
    catch(err){
        console.log(err)
        yield put({type:GET_PROFILE_DATA_ERROR,err})
    }
}

export default employerSaga;
