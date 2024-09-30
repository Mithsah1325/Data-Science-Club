import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import VideoSection from './components/VideoSection/VideoSection.jsx';
import InfoSection from './components/InfoSection/InfoSection.jsx';
import Footer from './components/Footer/Footer.jsx';
import ChatbotIcon from './components/ChatBot/ChatBot.jsx';

const App = () => {
  return (
    <Router>
      <div className='bg-[#eeeeee]'>
        <Header />
        <main>
          <VideoSection />
          <InfoSection />
        </main>
        <Footer />
        <ChatbotIcon />
      </div>
    </Router>
  );
}

export default App;
