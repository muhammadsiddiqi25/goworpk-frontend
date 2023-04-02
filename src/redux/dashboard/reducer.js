import { CANDIDATE_DATA_REQUEST, CANDIDATE_DATA_SUCCESS, CANDIDATE_DATA_ERROR,
     ADMIN_DASHBOARD_DATA_SUCCESS, ADMIN_DASHBOARD_DATA_ERROR, ADMIN_DASHBOARD_DATA_REQUEST } from "./types";
import toast from "react-hot-toast";
const intitial_state = {
    data: '',
}

export const dashboardReducer = (state = intitial_state, action) => {
    let toastId = null
    switch (action.type) {

        case CANDIDATE_DATA_SUCCESS:
            console.log(action.resp.data)
            state = { ...state, data: action.resp.data }
            break;

        case CANDIDATE_DATA_ERROR:
            toastId = toast.error("Error Loading Dashboard Data!")
            break;

        case ADMIN_DASHBOARD_DATA_SUCCESS:
            console.log(action.resp.data)
            state = { ...state, data: action.resp.data }
            break;

        case ADMIN_DASHBOARD_DATA_ERROR:
            toastId = toast.error("Error Loading Dashboard Data!")
            break;

        case ADMIN_DASHBOARD_DATA_REQUEST:
        case CANDIDATE_DATA_REQUEST:
        default:
            break;
    }
    return state;
}