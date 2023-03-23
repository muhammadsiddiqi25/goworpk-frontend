import { takeLatest, call, put } from "redux-saga/effects";
import { PRICING_REQUEST, PRICING_SUCCESS } from "./types";
import { get_pricing_details } from "../../api/api";


function* pricingSaga(){
    yield takeLatest(PRICING_REQUEST, get_pricing)
}


function* get_pricing() {
    try {
      const resp = yield call(() => get_pricing_details())
      console.log(resp)
      yield put({ type: PRICING_SUCCESS ,resp})
  
    }
    catch (err) {
      console.log(err)
      yield put({ type: PRICING_SUCCESS, err })
    }
  }
  

export default pricingSaga