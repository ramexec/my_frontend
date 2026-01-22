import React, { useEffect, useState } from 'react'
import './Welcome.css'
import {TitleBar} from '../Common/Components/TitleBar/TitleBar'
import { FaAddressBook } from 'react-icons/fa'
import { messages } from './dialogue'
import { FaPaperPlane } from 'react-icons/fa';

export const Welcome = () => {

  const fullText = "I am Currently Learning React !"

  const [text,setText] = useState("");
  const [index,setIndex] = useState(0);

  useEffect(() => {
      let timeout;
      if (index < fullText.length) {
        timeout = setTimeout(() => {
          setText(prev => prev + fullText[index]);
          setIndex(prev => prev + 1);
        }, 100); // typing speed
      } else {
        timeout = setTimeout(() => {
          setText("");
          setIndex(0);
        }, 2000); // pause before restart
      }

      return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div className='welcome-main'>
      <div className="welcome-window">
        <TitleBar title="Hellow World" Icon={FaAddressBook} />
        <div className="welcome-window-content">
          <div className="dialogue">
          {messages.map((value,index) => (
              <div key={index} className='w-chat-box'>
                <img className="dialogue-image" src={value.image} alt="avatar" />
                <div className="dialogue-owner">{value.from} :</div>
                <div className="dialogue-content">{value.text}</div>
              </div>
          ))}
          </div>
        </div>
        <div className="welcome-window-footer">
          <div className="chat-input">
            <span className="chat-placeholder">
              {text}<span className="cursor">|</span>
            </span>
          </div>
          <button className="send"><span>Send</span><FaPaperPlane/></button>
        </div>
      </div>   
    </div>
  )
}
