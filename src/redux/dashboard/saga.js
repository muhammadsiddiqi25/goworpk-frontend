import { takeLatest, call, put } from "redux-saga/effects";
import { CANDIDATE_DATA_REQUEST, CANDIDATE_DATA_SUCCESS,CANDIDATE_DATA_ERROR  } from "./types";
import { get_Dashboard_Data } from "../../api/api";


function* dashboardDataSaga(){
    yield takeLatest(CANDIDATE_DATA_REQUEST, get_dashboardData)
}


function* get_dashboardData() {
    try {
      const resp = yield call(() => get_Dashboard_Data())
      console.log(resp)
      yield put({ type: CANDIDATE_DATA_SUCCESS ,resp})
  
    }
    catch (err) {
      console.log(err)
      yield put({ type: CANDIDATE_DATA_ERROR, err })
    }
  }
  

export default dashboardDataSaga;