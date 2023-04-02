import { ADMIN_DASHBOARD_DATA_REQUEST, CANDIDATE_DATA_REQUEST } from "./types";


export const getCandidateDashboardData = ()=>{
    return {type:CANDIDATE_DATA_REQUEST}
}

export const getAdminDashboardData = ()=>{
    return {type:ADMIN_DASHBOARD_DATA_REQUEST}
}