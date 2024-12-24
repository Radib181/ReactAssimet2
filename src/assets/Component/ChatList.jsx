import React, { useState } from 'react';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send'; // Importing the Send icon
import { BiLogOut } from 'react-icons/bi'; // Importing the logout icon
import { MdClose, MdRestore } from 'react-icons/md'; // New icons for close and restore
import Profile from "../Photos/Profile.png";
import Logo from "../Photos/Logo.png";

function ChatList() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello! How are you?', sender: 'sender', time: '10:00 AM' },
    { id: 2, text: 'I am doing great, thank you! How about you?', sender: 'you', time: '10:02 AM' },
    { id: 3, text: 'Today is an exciting day!', sender: 'sender', time: '10:05 AM' },
    { id: 4, text: 'I’m also feeling good. New projects coming up!', sender: 'you', time: '10:08 AM' },
    { id: 5, text: 'Wow! That sounds exciting!', sender: 'sender', time: '10:15 AM' },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isChatVisible, setIsChatVisible] = useState(true); // State to control chat visibility
  const [selectedImage, setSelectedImage] = useState(null); // State to store selected image

  const getAIResponse = (userMessage) => {
    const lowerCaseMessage = userMessage.toLowerCase();
    if (lowerCaseMessage.includes('project')) {
      return 'Oh, what kind of projects are you working on?';
    } else if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
      return 'Hello! How can I assist you today?';
    } else if (lowerCaseMessage.includes('exciting')) {
      return 'That sounds amazing! Tell me more about it.';
    } else if (lowerCaseMessage.includes('how are you')) {
      return 'I’m doing well, thank you! How about you?';
    } else {
      const responses = [
        'I’m here to help you with anything!',
        'Feel free to ask me anything.',
        'I can help with coding, projects, and more.',
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== '' || selectedImage) {
      const userMsg = {
        id: messages.length + 1,
        text: newMessage,
        sender: 'you',
        time: new Date().toLocaleTimeString().slice(0, 5), // Current time
        image: selectedImage ? URL.createObjectURL(selectedImage) : null, // Add image if available
      };

      // Update the state with the new user message
      setMessages([...messages, userMsg]);

      // Clear input field and reset image
      setNewMessage('');
      setSelectedImage(null);

      // Simulate AI response after a short delay
      setTimeout(() => {
        const aiMsg = {
          id: messages.length + 2,
          text: getAIResponse(newMessage),
          sender: 'sender',
          time: new Date().toLocaleTimeString().slice(0, 5), // Current time
        };
        setMessages((prevMessages) => [...prevMessages, aiMsg]);
      }, 1000); // AI response delay (1 second)
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedImage(file); // Set selected image file
    } else {
      alert('Please select a valid image file.');
    }
  };

  const toggleChatVisibility = () => {
    setIsChatVisible((prevVisibility) => !prevVisibility); // Toggle the visibility state
  };

  return (
    <section className="h-screen bg-gradient-to-b w-full md:w-[450px] from-blue-600 to-blue-400 flex flex-col relative">
      {/* Cross button outside the chat area */}
      {!isChatVisible ? (
        <button
          className="absolute top-4 left-4 z-20 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-400 transition duration-300"
          onClick={toggleChatVisibility} // Show chat when clicked
        >
          <MdRestore size={30} /> {/* Restore icon to reopen chat */}
        </button>
      ) : (
        <button
          className="absolute top-4 left-4 z-20 bg-red-500 text-white p-2 rounded-full hover:bg-red-400 transition duration-300"
          onClick={toggleChatVisibility} // Hide chat when clicked
        >
          <MdClose size={30} /> {/* Close icon to hide chat */}
        </button>
      )}

      {/* Chat Section */}
      {isChatVisible && (
        <div className="flex flex-col w-full h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-blue-600 text-white shadow-md sticky top-0 z-10">
            <h1 className="text-lg font-semibold">Chat</h1>
            <button className="flex items-center px-3 py-1 bg-blue-500 rounded-full hover:bg-blue-400 transition duration-300">
              <BiLogOut size={20} />
              <span className="hidden sm:inline ml-2">Logout</span>
            </button>
          </div>

          {/* Chat List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 mb-16 bg-gradient-to-b from-white to-gray-100">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start space-x-2 ${message.sender === 'you' ? 'justify-end' : ''}`}
              >
                {message.sender === 'sender' && (
                  <img
                    src={Logo}
                    alt="Sender Avatar"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                )}
                <div>
                  <div
                    className={`${
                      message.sender === 'you' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
                    } p-4 rounded-xl shadow-lg max-w-xs sm:max-w-sm`}
                  >
                    <p>{message.text}</p>
                    {message.image && (
                      <img
                        src={message.image}
                        alt="Sent Image"
                        className="mt-2 rounded-xl max-w-xs sm:max-w-sm"
                      />
                    )}
                  </div>
                  <span className="text-xs text-gray-500 mt-1 inline-block">{message.time}</span>
                </div>
                {message.sender === 'you' && (
                  <img
                    src={Profile}
                    alt="Your Avatar"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className=" bottom-0 left-0 w-[450px] p-4 bg-white border-t border-gray-200 shadow-md z-10">
            <div className="flex items-center space-x-3">
              <input
                type="text"
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-1 px-4 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />

              {/* Send Button */}
              <button
                className="flex items-center justify-center px-4 py-3 bg-yellow-400 text-white rounded-full hover:bg-yellow-500 transition-all"
                onClick={handleSendMessage}
              >
                <SendIcon sx={{ fontSize: 24 }} /> {/* Send Icon */}
              </button>

              {/* Image Upload Button */}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                id="imageUpload"
              />
              <label htmlFor="imageUpload">
                <AttachFileIcon
                  sx={{
                    fontSize: 24,
                    cursor: 'pointer',
                    color: selectedImage ? '#34D399' : '#000',
                  }}
                />
              </label>
            </div>
          </div>
        </div>
      )}

      {/* If the chat is hidden, it shows a blank space */}
      {!isChatVisible && (
        <div className="flex-1 bg-white"></div> // Blank page when the chat is hidden
      )}
    </section>
  );
}

export default ChatList;
