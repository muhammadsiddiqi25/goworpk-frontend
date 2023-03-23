import { ADMIN_LOGIN_REQUEST } from "./type";


export const adminLoginRequest = (query)=>{
    return {type:ADMIN_LOGIN_REQUEST, query}
}