import React,{useState,useEffect} from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import background from '../assets/images/back.jpg'
import Navbar from '../containers/Navbar';


function GeneralRoutes() {
    let  userid = localStorage.getItem("token") == null ? false : true;
    const token = localStorage.getItem('accessToken')
    return (
        <div id='page' >
           {!token? <Navbar />:null}
            <div className='content'>
            <Outlet  />
            </div>
        </div>

    )

}
export default GeneralRoutes;