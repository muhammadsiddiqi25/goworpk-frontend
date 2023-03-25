import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Consversations from '../../components/Conversations/Conversations';
import './chatbox.css';
import Message from '../../components/Message/message';
import axios from 'axios';
//import ProfileTextField from '../../components/ProfileTextField'
const Chat = ()=>{
    const [conversations, setConvesations] = useState([]);
    /*useEffect(()=>{
        const getConversation = async ()=>{
            try {
                //const res = await axios.get('/conversations'+user._id);
                console.log(res);
                setConvesations(res.data);
            } catch (error) {
                console.log(error) ;
            }
        }
        getConversation();
    }, //[user._id]);
    */

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