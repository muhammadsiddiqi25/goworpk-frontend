import { Avatar } from '@mui/material';
import React from 'react';
import './message.css';


const Message = ({message, ownMsg,conv})=>{
    const user = JSON.parse(localStorage.getItem('user'))
    return(
        <div className={ownMsg ? 'message own': 'message'}>
            <div className='messageTop'>
                 {/* {
                    ownMsg && user.role == 'employer' ? <Avatar src = {`http://locahost:5001/profile_pic/${conv.}`} />:
                    <Avatar src = {`http://locahost:5001/profile_pic/${conv.user_id}`} />
                 } */}
                <p className='messageText'>{message.text}</p>
            </div>
        </div>
    )
}
export default Message;