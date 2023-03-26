import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import imga from '../../assets/images/home-background.jpg';
import './Conversations.css';

const Consversations = ({conversation, currentUser})=>{
    const [user, setUser] = useState(null);

    useEffect(()=>{
        const friendId = conversation.members.find((m)=> m !==currentUser._id);
        const getUser = async ()=>{
            try {
                const res = await axios('/candidate?user_id'+ friendId);
                setUser(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        getUser()
    }, [currentUser, conversation])
    return(
        <div className="conversations">
            <img src={user.profilePic}
            alt='person'
            className="conversationImg" />
            <span className="conversationName">{user.name}</span>
        </div>
    )
}

export default Consversations;