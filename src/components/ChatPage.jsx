import React from 'react'
import Chat from './Chat'
import '../styles/Chats.css'

const ChatPage = () => {
    return (
        <div className='chatPage'>
            <Chat 
                name='Bill'
                message='Hello! how are you doing?'
                timestamp = '10 secs ago'
                profilePic = 'https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture-1024x1024.jpg'
            />
            <Chat 
                name='Harry'
                message='Hey! how are you?'
                timestamp = '30 secs ago'
                profilePic = 'https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture-1024x1024.jpg'
            />
            <Chat 
                name='Gen'
                message='Can we meet today?'
                timestamp = '40 secs ago'
                profilePic = 'https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture-1024x1024.jpg'
            />
            <Chat 
                name='Gita'
                message="Hey! what's up"
                timestamp = '50 secs ago'
                profilePic = 'https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture-1024x1024.jpg'
            />
        </div>
    )
}

export default ChatPage
