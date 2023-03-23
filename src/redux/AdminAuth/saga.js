import {takeLatest, call, put} from 'redux-saga/effects'
import { ADMIN_LOGIN_REQUEST, ADMIN_LOGIN_ERROR, ADMIN_LOGIN_SUCCESS } from './type'
import { adminloginRequest } from '../../api/api'


function* adminAuthSaga(){
    yield takeLatest(ADMIN_LOGIN_REQUEST, adminlogin)
}

function* adminlogin(payload) {
    try {
      const resp = yield call(() => adminloginRequest(payload.query))
      console.log(resp)
      yield put({ type: ADMIN_LOGIN_SUCCESS ,resp})
  
    }
    catch (err) {
      console.log(err)
      yield put({ type: ADMIN_LOGIN_ERROR, err })
    }
  }



  export default adminAuthSaga;