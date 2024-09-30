import React from 'react';

const ChatbotIcon = () => {
  const handleChatbotClick = () => {
    // Implement what happens when the icon is clicked (e.g., open a chat window)
    alert('Chatbot opened!');
  };

  return (
    <div 
      className="fixed bottom-5 right-5 cursor-pointer z-50"
      onClick={handleChatbotClick}
    >
      <img 
        src="/images/chatbot.gif" 
        alt="Chatbot" 
        className="w-16 h-16" // Adjust size as needed
      />
    </div>
  );
};

export default ChatbotIcon;
