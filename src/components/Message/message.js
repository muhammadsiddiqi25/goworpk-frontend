import React from 'react';
import mPic from '../../assets/images/profile.jpeg';
import './message.css';

const Message = ({ownMsg})=>{
    return(
        <div className={ownMsg ? 'message own': 'message'}>
            <div className='messageTop'>
                <img src={mPic}
                alt='err'
                className='messageImg' />
                <p className='messageText'>The component from Material UI is exactly the same as the.vrrv</p>
            </div>
            <div className='messageBottom'>1 hour ago</div>
        </div>
    )
}
export default Message;