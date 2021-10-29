import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Chat.css';
import db from './firebase';

function Chat() {
    const [input, setInput] = useState('');
    const [seed, setSeed] = useState('');
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState('');

    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId).onSnapshot((snapshot) => 
                setRoomName(snapshot.data().name)
            );
        }
    }, [roomId]);

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [roomId]);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log('You type >>> ', input);
        setInput('');
    };

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                
                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
                    <p>Last seen at ...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                <div className={`chat__message ${true && "chat__receiver"}`}>
                    <span className="chat__name">Ilham</span>
                    Hey guys
                    <span className="chat__timestamps">3:52pm</span>
                </div>
            </div>

            <div className="chat__footer">
                <InsertEmoticon/>
                <form>
                    <input 
                        value={input} 
                        onChange={(e) => setInput(e.target.value)}
                        type="text" 
                        placeholder="Type a message"
                    />
                    <button 
                        type="submit" 
                        onClick={sendMessage}
                    >
                        Send a message
                    </button>
                </form>
                <Mic/>
            </div>
        </div>
    )
}

export default Chat
