import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import { generalReducer } from "./general/reducer";
import { pricingReducer } from "./pricing/reducer";
import { candidateProfileReducer } from "./CandidateProfile/reducer";
import { employerReducer } from "./Employer/reducer";
import authAdminReducer from "./AdminAuth/reducer";
import { dashboardReducer } from "./dashboard/reducer";
export default combineReducers({ authReducer,
        generalReducer,
        pricingReducer,
        authAdminReducer,
        candidateProfileReducer,
        employerReducer,
        dashboardReducer,
     });
