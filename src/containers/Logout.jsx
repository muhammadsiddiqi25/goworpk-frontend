import React,{useEffect} from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/general/action';
const Logout = () => {
    const dispatch= useDispatch()
    const navigate = useNavigate()
    useEffect(()=>{
        if(localStorage.getItem('accessToken') && localStorage.getItem('refreshToken')){
            dispatch(logout())
        }
        else{
            navigate('/login')
        }
    },[])

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '200px auto'
            }}
        >
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection:'column'
            }}>
            <CircularProgress />
            <p
                style={{
                    margin: 'auto',
                    fontSize: '1.5rem'
                }}
            >Logging Out</p>
            </div>
        </div>
    )
}

export default Logout