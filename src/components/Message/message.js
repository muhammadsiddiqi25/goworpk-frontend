import React from 'react';
// import mPic from '../../assets/images/profile.jpeg'; This was removed bcz it was not present
import './message.css';

const Message = ({ownMsg})=>{
    return(
        <div className={ownMsg ? 'message own': 'message'}>
            <div className='messageTop'>
                {/* <img src={mPic}   This was removed bcz it was not present
                alt='err'
                className='messageImg' /> */}
                <p className='messageText'>The component from Material UI is exactly the same as the.vrrv</p>
            </div>
            <div className='messageBottom'>1 hour ago</div>
        </div>
    )
}
export default Message;