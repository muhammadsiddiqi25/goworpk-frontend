import { takeLatest, call, put } from "redux-saga/effects";
import {
  REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_ERROR,
  VERIFICATION_REQUEST, VERIFICATION_SUCCESS, VERIFICATION_ERROR, LOGIN_REQUEST,
  LOGIN_ERROR, LOGIN_SUCCESS,OTP_ERROR, OTP_SUCCESS, OTP_REQUEST, SEND_EMAIL_REQUEST,
  SEND_EMAIL_SUCCESS, SEND_EMAIL_ERROR, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_ERROR,RESET_PASSWORD_REQUEST, RESENEND_VERIFICATION_EMAIL_REQUEST, RESENEND_VERIFICATION_EMAIL_SUCCESS, RESENEND_VERIFICATION_EMAIL_ERROR, REQUEST_TOKENS_REQUEST, REQUEST_TOKENS_SUCCESS, REQUEST_TOKENS_ERROR
}
  from "./constants";
import { registerRequest, verifyRequest, loginRequest , resend_email_request, send_email,get_new_tokens} from '../../api/api'
function* authSaga() {
  yield takeLatest(RESENEND_VERIFICATION_EMAIL_REQUEST, resend_verification_email)
  yield takeLatest(REGISTER_REQUEST, register);
  yield takeLatest(VERIFICATION_REQUEST, verify);
  yield takeLatest(LOGIN_REQUEST, login);
  yield takeLatest(SEND_EMAIL_REQUEST, sendEmail);
  yield takeLatest(RESET_PASSWORD_REQUEST, sendPassword)
  yield takeLatest(REQUEST_TOKENS_REQUEST, getNewTokens)
}

function* register(payload) {
  try {
    const resp = yield call(() => registerRequest(payload.query))
    yield put({ type: REGISTER_SUCCESS, resp })
  }
  catch (err) {
    console.log(err)
    yield put({ type: REGISTER_ERROR, err })
  }
}


function* verify(payload) {
  try {
    console.log('saga',payload)
    const resp = yield call(() => verifyRequest(payload.query))
    yield put({ type: VERIFICATION_SUCCESS ,resp})

  }
  catch (err) {
    console.log(err)
    yield put({ type: VERIFICATION_ERROR, err })
  }
}


function* login(payload) {
  try {
    const resp = yield call(() => loginRequest(payload.query))
    console.log(resp)
    yield put({ type: LOGIN_SUCCESS ,resp})

  }
  catch (err) {
    console.log(err)
    yield put({ type: LOGIN_ERROR, err })
  }
}

function* resend_verification_email() {
  try {
    const resp = yield call(() => resend_email_request())
    console.log(resp)
    yield put({ type: RESENEND_VERIFICATION_EMAIL_SUCCESS ,resp})

  }
  catch (err) {
    console.log(err)
    yield put({ type: RESENEND_VERIFICATION_EMAIL_ERROR, err })
  }
}

function* sendEmail(payload){
  try {
    const resp = yield call(()=> send_email(payload.query))
    yield put({type:SEND_EMAIL_SUCCESS,resp})
  }
  catch(err){
    yield put({type:SEND_EMAIL_ERROR,err})
  }
}

function* sendPassword(payload){
  try{
    const resp = yield call(()=> sendPassword(payload.query));
    yield put({type: RESET_PASSWORD_SUCCESS, resp});
  }catch(error){
    yield put({type: RESET_PASSWORD_ERROR, error});
  }
}

function* getNewTokens(payload){
  try{
    const resp = yield call(()=>get_new_tokens(payload.query))
    yield put({type:REQUEST_TOKENS_SUCCESS,resp})
  }
  catch(err){
    yield put({type:REQUEST_TOKENS_ERROR,err})
  }
}


export default authSaga;
