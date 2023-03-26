import React from 'react';
import ProfilePic from '../../assets/images/pro1.jpg';
import './message.css';


const Message = ({message, ownMsg})=>{
    return(
        <div className={ownMsg ? 'message own': 'message'}>
            <div className='messageTop'>
                <img src={ProfilePic}
                alt='err'
                className='messageImg' />
                <p className='messageText'>{message.text}</p>
            </div>
        </div>
    )
}
export default Message;