import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Consversations from '../../components/Conversations/Conversations';
import './chatbox.css';
import Message from '../../components/Message/message';
import axios from 'axios';
//import ProfileTextField from '../../components/ProfileTextField'
const Chat = ()=>{
    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState(null);


    /*useEffect(()=>{
        const getConversation = async ()=>{
            try {
                //const res = await axios.get('/conversations'+user._id);
                console.log(res);
                setConversations(res.data);
            } catch (error) {
                console.log(error) ;
            }
        }
        getConversation();
    }, //[user._id]);
    */

    useEffect(()=>{
        const getMessages = async ()=>{
            try {
                const res = await axios.get('/messages/'+currentChat._id);
                setMessages(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        getMessages();
    }, [currentChat]);
    console.log(messages);
    const user = 'kashif';
    return(
        <>
        <div className='messenger'>
           <div className='chatMenu'>
            <div className='chatMenuWrapper'>
            <TextField id="standard-basic" label="Standard" variant="standard"
                  sx={{
                      m: 1, width: '40ch' ,
                  }} />

            {
            conversations.map(conv =>{
                <div onClick={()=> setCurrentChat(conv)}>
                    <Consversations conversation={conv} currentUser={user} />
                </div>
            })
            }
            </div>
           </div>
           <div className='chatBox'>
           <div className='chatBoxWrapper'>
            { currentChat ? (
                <>
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
                </>) : (
                 <div className='noConverText'>
                    <h1>Select a Message.</h1>
                    <p>Choose from your existing conversations, start a new one, or just keep swimming.</p>
                </div>
                )
                }
            </div>
           </div>
        </div>
        </>
    )
}

export default Chat;