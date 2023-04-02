import React, { useEffect, useState } from 'react';
import { Button, InputLabel, FilledInput, InputAdornment,IconButton } from '@mui/material';
import Consversations from '../../components/Conversations/Conversations';
import './chatbox.css';
// import './chat.css';
import Message from '../../components/Message/message';
import axios from 'axios';
import { useRef } from 'react';
import { io } from 'socket.io-client';
import { Avatar } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Send from '@mui/icons-material/Send';
const Chat = () => {
    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState(null);
    const [newMessage, setNewMessage] = useState("");
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const socket = useRef();
    const scrollRef = useRef();
    const user = JSON.parse(localStorage.getItem('user'))
    useEffect(() => {
        socket.current = io("ws://localhost:8900");
        socket.current.on("getMessage", (data) => {
          setArrivalMessage({
            sender: data.senderId,
            text: data.text,
          });
        });
      }, []);

      useEffect(() => {
    //    currentChat !== [] && arrivalMessage &&
    //         (user.role == 'candidate' && currentChat.employer === arrivalMessage.sender) ||(user.role == 'employer' && currentChat.candidate === arrivalMessage.sender) &&
            // setMessages((prev) => [...prev, arrivalMessage]);
            messages && setMessages([...messages,arrivalMessage])
    }, [arrivalMessage, currentChat]);

    useEffect(() => {
        socket.current.emit("addUser", user.user_id);
    }, [user]);





    useEffect(() => {
        const getConversation = async () => {
            try {
                let config = {
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                    }
                }
                const res = await axios.get(`http://localhost:5001/conversation/get-conversations`, config);
                setConversations(res.data);
            } catch (error) {
            }
        }
        getConversation();

    }, [user.user_id]);

    const getMessages = async (id) => {
        try {
            let config = {
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                }
            }
            const body = JSON.stringify({ conversation_id: id })
            const res = await axios.post(`http://localhost:5001/conversation/get-messages`, body, config);
            setMessages(res.data)
        } catch (error) {
            console.log(error);
        }
    }
    const handleSubmit = async () => {

        socket.current.emit("sendMessage", {
            senderId: user.user_id,
            receiverId:user.role == 'employer'?currentChat.candidate:currentChat.employer,
            text: newMessage,
        });


        try {
            let config = {
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                }
            }
            const message = {
                receiverId :user.role  == 'employer'?currentChat.candidate:currentChat.employer,
                text: newMessage,
                conversation_id: currentChat.conversation_id
            }
            const res = await axios.post('http://localhost:5001/conversation/send-messages', message,config);
            // setMessages([...messages],res.data.message)
            console.log('got this message',res.data.message)
            console.log('message array',messages)
            setNewMessage("");
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);


    if (!conversations || conversations === []) {
        return <p>loading</p>
    }
    else {
        return (
            <>
                <div className='messenger'>
                    <div className='chatMenu'>
                        <div className='chatMenuWrapper'>
                            <TextField id="standard-basic" label="Search" variant="standard"
                                sx={{
                                    m: 1, width: '40ch',
                                }} />

                            {
                                conversations.map((conv, index) => {
                                    return <div
                                        className='chatbox-sidenames'
                                        key={index}
                                        onClick={() => {
                                            setCurrentChat(conv)
                                            getMessages(conv.conversation_id)
                                        }}>
                                        <Avatar src={`http://localhost:5001/profile_pics/${user.role =='employer'?conv.candidate:conv.employer}.png`} />
                                        <h3>{conv.name.toLowerCase()}</h3>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    <div className='chatBox'>
                        {currentChat ? <div className='chatheader'>
                            <Avatar src={`http://localhost:5001/profile_pics/${user.role == 'candidate' ? currentChat.employer : currentChat.candidate}.png`} />
                            <h1>{currentChat.name}</h1>
                        </div>
                            : null}
                        {messages && messages !== [] ? (
                            <div className='chatBoxTop'>
                                <div >
                                    {
                                        messages.map((msg, index) => {
                                            return <div
                                            ref={scrollRef}
                                            >
                                                <Message message={msg} ownMsg={msg.sender === user.user_id} conv={currentChat} />
                                            </div>
                                        })
                                    }
                                </div>
                                <div className='chatMessageInput'>
                                        <FilledInput
                                            multiline
                                            fullWidth
                                            hiddenLabel
                                            disableUnderline
                                            value  = {newMessage}
                                            onChange ={(e)=>{setNewMessage(e.target.value)}}
                                            fontSize = '18px'
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        onClick={() => { 
                                                            const msg = {
                                                                conversations:currentChat.conversation_id,
                                                                sender:user.user_id,
                                                                text:newMessage
                                                            }
                                                            setMessages([...messages,msg])
                                                            handleSubmit() 
                                                        
                                                        }}
                                                        edge="end"
                                                        sx={{
                                                            verticalAlign:'end',
                                                            ":hover":{
                                                                color:'#05DD41'
                                                            }
                                                        }}
                                                        
                                                    >
                                                        <Send 
                                                        sx={{
                                                            fontSize:'25px'
                                                        }}
                                                        />
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                </div>
                            </div>
                        ) : (
                            <div className='noConverText'>
                                <h1 style={{textAlign:'center'}}>Select a Message.</h1>
                                <p style={{textAlign:'center'}}>Choose from your existing conversations, start a new one, or just keep swimming.</p>
                            </div>
                        )
                        }

                    </div>
                </div>
            </>
        )
    }
}

export default Chat;