// components/TV.js
import React from 'react';
import Screen from './Chatscreen';
import Sidebar from './Sidebar';
import InputMessage from './InputBox';
import { ChatProvider } from "./ChatContext";

const TV = () => {
    return (
        <div className="w-[1200px] h-[700px] bg-black  border-gray-800 relative shadow-2xl flex">
            <ChatProvider>
            <Sidebar />
                <div className="flex flex-col h-full flex-grow"> 
                    <Screen className="flex-grow overflow-auto" />
                    <InputMessage className="w-full"/>
                </div>
            </ChatProvider>
        </div>
    );
}

export default TV;
