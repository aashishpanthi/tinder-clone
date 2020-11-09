import React from 'react'
import { Avatar } from "@material-ui/core";
import { Link } from 'react-router-dom'

const Chat = ({ name, message, timestamp, profilePic }) => {
    return (
        <Link to={`/chat/${name}`}>
            <div className='chat'>
                <Avatar
                    className='chat__image'
                    src={profilePic}
                    alt={name}
                />

                <div className="chat__details">
                    <h2>{name}</h2>
                    <p className='chat__message'>{message}</p>
                </div>

                <p className='chat__time'>{timestamp}</p>
            </div>
        </Link>
    )
}

export default Chat
