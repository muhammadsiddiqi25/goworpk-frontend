import React from "react";
import imga from '../../assets/images/home-background.jpg';
import './Conversations.css';

const Consversations = ()=>{
    return(
        <div className="conversations">
            <img src={imga}
            alt='person'
            className="conversationImg" />
            <span className="conversationName">Kashif Saeed</span>
        </div>
    )
}

export default Consversations;