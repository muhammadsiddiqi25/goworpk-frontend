import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Consversations from '../../components/Conversations/Conversations';
import './chatbox.css';
// import './chat.css';
import Message from '../../components/Message/message';
import axios from 'axios';
import { useRef } from 'react';
import { io } from 'socket.io-client';
//import ProfileTextField from '../../components/ProfileTextField'
import ProfileTextField from '../custom-mui-comp/ProfileTextField';
import {Avatar} from '@mui/material';
const Chat = ()=>{
    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState(null);
    const [newMessage, setNewMessage] =useState("");
    const [arrivalMessage, setArrivalMessage] =useState(null);
    const socket = useRef();
    const scrollRef = useRef();
    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user)
    // useEffect(() => {
    //     socket.current = io("ws://localhost:8900");
    //     socket.current.on("getMessage", (data) => {
    //       setArrivalMessage({
    //         sender: data.senderId,
    //         text: data.text,
    //       });
    //     });
    //   }, []);
    
      useEffect(() => {
        arrivalMessage &&
          currentChat?.members.includes(arrivalMessage.sender) &&
          setMessages((prev) => [...prev, arrivalMessage]);
      }, [arrivalMessage, currentChat]);
    
    //   useEffect(() => {
    //     socket.current.emit("addUser", user.user_id);
    //   }, [user]);
    
    useEffect(()=>{
        const getConversation = async ()=>{
            try {
                let config = {
                    headers:{
                        'Content-type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                    }
                }
                const res = await axios.get(`http://localhost:5001/conversation/get-conversations`,config);
                console.log(res);
                setConversations(res.data);
            } catch (error) {
                console.log(error) ;
            }
        }
        getConversation();
        
    }, [user.user_id]);

    console.log('conv',typeof(conversations))
    useEffect(()=>{
        const getMessages = async ()=>{
            try {
                const res = await axios.get('/messages/'+currentChat.user_id);
                setMessages(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        getMessages();
    }, [currentChat]);

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const message = {
            sender: user.user_id,
            text: newMessage,
            conversationId: currentChat.user_id
        }

        const receiverId = currentChat.members.find(
            (member) => member !== user.user_id
          );
      
          socket.current.emit("sendMessage", {
            senderId: user.user_id,
            receiverId,
            text: newMessage,
          });
      

        try {
            const res = await axios.post('/messages', message);
            setMessages([...messages, res.data]);
            setNewMessage("");
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
      }, [messages]);

    
    if(!conversations || conversations === []){
        return <p>loading</p>
    }
    else{
        return(
            <>
            <div className='messenger'>
               <div className='chatMenu'>
                <div className='chatMenuWrapper'>
                <TextField id="standard-basic" label="Search" variant="standard"
                      sx={{
                          m: 1, width: '40ch' ,
                      }} />

                {
                conversations.map((conv,index) =>{
                    return <div
                    className='chatbox-sidenames'
                    key = {index}
                    onClick={()=> setCurrentChat(conv)}>
                        {/* <Consversations conversation={conv} currentUser={user} />  */}
                         <Avatar  src={`http://localhost:5001/profile_pics/${conv.candidate}.png`} />
                         <h3>{conv.name.toLowerCase()}</h3>
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
                        {
                            messages.map(msg =>{
                                <div ref={scrollRef}>
                                <Message message={msg} ownmsg = {msg.sender === user.user_id}/>
                                </div>
                            })
                        }
                        
                        <Message ownMsg={true}/>
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
    
                    </div>
                    <div className='chatBoxBottom'>
                      <textarea className='chatMessageInput'
                      placeholder='write something.....!'
                      onChange={e => setNewMessage(e.target.value)}
                      value={newMessage} />
                      <Button variant='contained' onClick={handleSubmit}>Send</Button>
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
}

export default Chat;