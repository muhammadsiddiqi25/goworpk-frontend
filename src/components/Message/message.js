import React from 'react';
import './message.css';


const Message = ({message, ownMsg})=>{
    const user = JSON.parse(localStorage.getItem('user'))
    return(
        <div className={ownMsg ? 'message own': 'message'}>
            <div className='messageTop'>
                 <img src={`http://localhost:5001/profile_pics/${user.user_id}`}   
                alt='err'
                className='messageImg' />
                <p className='messageText'>{message.text}</p>
            </div>
        </div>
    )
}
export default Message;