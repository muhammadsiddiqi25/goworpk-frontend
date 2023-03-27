import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Avatar } from '@mui/material';
import imga from '../../assets/images/home-background.jpg';
import './Conversations.css';

const Consversations = ({conv, currentUser})=>{
    const [user, setUser] = useState(null);

    // useEffect(()=>{
    //     const friendId = conv.members.find((m)=> m !==currentUser._id);
    //     const getUser = async ()=>{
    //         try {
    //             const res = await axios('/candidate?user_id'+ friendId);
    //             setUser(res.data);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    //     getUser()
    // }, [currentUser, conv])
    return(
        <div className="conversations">
            <Avatar alt={conv.name} src={`http://localhost:5001/profile_pics/${conv.candidate}.png`} />
            <h3>{conv.name}</h3>
            <span className="conversationName">{user.name}</span>
        </div>
    )
}

export default Consversations;