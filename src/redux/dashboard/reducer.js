import { CANDIDATE_DATA_REQUEST, CANDIDATE_DATA_SUCCESS,CANDIDATE_DATA_ERROR } from "./types";
import toast from "react-hot-toast";
const intitial_state = {
    data:'',
}

export const dashboardReducer = (state = intitial_state, action)=>{
    let toastId = null
    switch(action.type){

        case CANDIDATE_DATA_SUCCESS:
            console.log(action.resp.data)
            return {...state, data:action.resp.data}

        case CANDIDATE_DATA_ERROR:
            toastId  = toast.error("Error Loadign Dashboard Data!")
        
        case CANDIDATE_DATA_REQUEST:
        default:
            return state;
    }
}