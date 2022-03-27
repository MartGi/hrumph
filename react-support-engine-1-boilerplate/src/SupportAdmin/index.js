import React from 'react';

import { ChatEngine } from 'react-chat-engine';

import './ffs.css';


const SupportAdmin = () => {
  return (
    <ChatEngine
        projectID={process.env.REACT_APP_CE_PROJECT_ID}
        userName='admin'
        userSecret='admin'
        height='calc(100vh - 20px)'
    />
  );
}



export default SupportAdmin;
