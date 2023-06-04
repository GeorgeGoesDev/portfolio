import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './Chatbot.css';
import messenger from '../../assets/messenger.png';
import send from '../../assets/send.png';

type Message = {
    role: string;
    content: string;
};

const Chatbot: React.FC = () => {
    const [chatOpen, setChatOpen] = useState(false);
    const [userInput, setUserInput] = useState('');
    const [messages, setMessages] = useState<Message[]>([
        {
            role: "system",
            content: `My name is George. I am thrilled to have just completed an intensive Fullstack JavaScript bootcamp, and am now eager to start my career in software development. With a strong foundation in both front-end and back-end development, I am confident in my ability to build dynamic and responsive web applications using popular frameworks like React, as well as Node.js and other back-end technologies.
            I am passionate about software development and find myself constantly seeking new challenges and opportunities to learn and grow. I am excited about the prospect of collaborating with teams to develop cutting-edge solutions to real-world problems, and contributing to the success of organisations through my technical expertise and innovative ideas.
            Overall, I am a highly motivated and dedicated individual with a strong work ethic, and I am committed to continuously improving my skills and knowledge as a software developer. I am excited about what the future holds and am ready to take on new challenges in the field of software development.
            
            If a user asks about george answer based on that.`
        },
        {
            content: "Hello, I'm GeorgeBot! Ask me anything!",
            role: "assistant"
        }
    ]);

    const chatContainerRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    const handleOpenChat = () => {
        setChatOpen(!chatOpen);
    };

    const handleUserInput = async () => {
        try {
            const apiInput = userInput;
            setUserInput('');

            setMessages([...messages, { role: "user", content: apiInput }, { role: "assistant", content: '...' }]);
            const client = axios.create({
                headers: { Authorization: 'Bearer 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' },
            });
            const res = await client.post("https://api.openai.com/v1/chat/completions", {
                model: "gpt-3.5-turbo",
                messages: [...messages, { role: "user", content: apiInput }],
            });

            const responseData = res.data.choices[0].message.content;
            console.log(responseData);

            const newMessage: Message[] = [
                ...messages,
                { content: userInput, role: 'user' },
                { content: responseData, role: 'assistant' },
            ];

            setMessages(newMessage);

            // Scroll to the bottom of the chat container
            if (chatContainerRef.current) {
                chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleUserInput();
        }
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (chatContainerRef.current && !chatContainerRef.current.contains(event.target as Node)) {
            setChatOpen(false);
        }
    };

    useEffect(() => {
        // Scroll to the bottom of the chat container when it opens
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }

        // Add event listener to handle click outside
        document.addEventListener('mousedown', handleClickOutside);

        // Clean up the event listener
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [chatOpen, messages]);

    return (
        <div className='chatBox '>
            <img
                className='height-50px scale-on-hover chat-img bottom-right-with-gap'
                style={{ display: `${chatOpen ? 'none' : 'block'}` }}
                src={messenger}
                alt='chat icon'
                onClick={handleOpenChat}
            />
            <div className='chatFrame border-solid-black bottom-right' style={{ display: `${chatOpen ? 'flex' : 'none'}` }} ref={chatContainerRef}>
                <div className='chat-title-bar' onClick={handleOpenChat}>
                    <h3>Assistant</h3>
                </div>
                <div className='main-chat' ref={scrollRef} >
                    {messages.map((message, index) =>
                        message.role !== 'system' && (
                            <div key={index} className={message.role === 'user' ? 'user-message' : 'bot-message'}>
                                {message.role === 'user' ? <label className='label-you'>You</label> : <label className='label-bot'>GeorgeBot</label>}
                                <p>{message.content}</p>
                            </div>
                        )
                    )}
                </div>

                <div className='input-message'>
                    <input
                        type='text'
                        placeholder='Ask the GeorgeBot for help...'
                        value={userInput}
                        onChange={(event) => setUserInput(event.target.value)}
                        onKeyDown={handleKeyPress}
                        style={{ padding: '0 1rem', marginTop: '0' }}
                    />
                    <button className='no-bg-no-border' onClick={handleUserInput}>
                        <img className='height-20px' src={send} alt='send icon' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;
