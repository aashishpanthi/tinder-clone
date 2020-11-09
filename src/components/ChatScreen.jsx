import React,{ useState, useEffect } from 'react'
import { Avatar } from '@material-ui/core'
import { useLocation } from 'react-router-dom'

const ChatScreen = () => {
    const [messages, setMessages ] = useState([])
    const [input, setInput ] = useState('')
    const [Person, setPerson ] = useState('')
    let location = useLocation();

    useEffect(()=>{
        setMessages([
            {
                name:'name',
                message:"Hey! what's up",
                image:'https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture-1024x1024.jpg',
            }
        ])
        setPerson(location.pathname.split('chat/')[1])
    },[])

    const submit = e =>{
        e.preventDefault()
        setMessages([...messages,{message:input}])
        setInput('')
    }

    return (
        <div className='chatScreen'>
            <p>YOU MATCHED WITH {Person} ON {new Date().toDateString()}</p>
            {messages.map(message =>(
                <div className="chatScreen__message">
                    {message.name && (
                    <Avatar 
                        className='chatScreen__avatar'
                        alt={message.name}
                        src={message.image}
                    />)}
                    <p className={`chatScreen__txt ${!message.name && 'chatScreen__txtUser'}`}>{message.message}</p>
                </div>
            ))}
            <form className="chatScreen__input" onSubmit={submit}>
                <input 
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder='Type a message'
                />
                <button type='submit'>SEND</button>
            </form>
        </div>
    )
}

export default ChatScreen
