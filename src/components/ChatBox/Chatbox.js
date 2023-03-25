import React from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Consversations from '../../components/Conversations/Conversations';
import './chatbox.css';
import Message from '../../components/Message/message';
//import ProfileTextField from '../../components/ProfileTextField'
const Chat = ()=>{
    return(
        <>
        <div className='messenger'>
           <div className='chatMenu'>
            <div className='chatMenuWrapper'>
            <TextField id="standard-basic" label="Standard" variant="standard"
                  sx={{
                      m: 1, width: '40ch' ,
                  }} />
            <Consversations />
            <Consversations />
            <Consversations />
            <Consversations />
            </div>
           </div>
           <div className='chatBox'>
           <div className='chatBoxWrapper'>
                <div className='chatBoxTop'>
                    <Message />
                    <Message ownMsg={true}/>
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />

                </div>
                <div className='chatBoxBottom'>
                  <textarea className='chatMessageInput' />
                  <Button variant='contained'>Send</Button>

                </div>
            </div>
           </div>
        </div>
        </>
    )
}

export default Chat;