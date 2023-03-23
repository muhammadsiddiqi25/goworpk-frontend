import { all } from "redux-saga/effects";
import authSaga from "./auth/saga";
import pricingSaga from "./pricing/saga";
import adminAuthSaga from "./AdminAuth/saga";
import candidateProfileSaga from "./CandidateProfile/saga";
import employerSaga from "./Employer/saga";
import dashboardDataSaga from "./dashboard/saga";
import generalSaga from "./general/saga";
export default function* rootSaga() {
  yield all([
    authSaga(),
    pricingSaga(),
    adminAuthSaga(),
    candidateProfileSaga(),
    employerSaga(),
    dashboardDataSaga(),
    generalSaga(),
  ]);
}
