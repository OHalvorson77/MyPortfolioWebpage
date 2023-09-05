import React, { useState, useEffect } from 'react';
import '../App.css';
import Header from '../header.js';

function Home() {
  const [text, setText] = useState('');
  const [additionalText, setAdditionalText] = useState('');
  const name = 'Owen Halvorson';
  const additionalContent = 'Honors Third-year Computer Science Student at the University of Ottawa, looking for work.';


  useEffect(() => {
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      if (currentIndex <= name.length) {
        setText(name.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        // After the initial animation, start the additional text animation
        let additionalIndex = 0;
        const additionalInterval = setInterval(() => {
          if (additionalIndex <= additionalContent.length) {
            setAdditionalText(additionalContent.slice(0, additionalIndex)+'|');
            additionalIndex++;
          } else {
            
            setAdditionalText(additionalContent);
            clearInterval(additionalInterval);
            
          }
        }, 20); // Adjust the speed of animation (milliseconds)
      }
    }, 0); // Adjust the speed of animation (milliseconds)

    return () => {
      clearInterval(interval);
    };
  }, []);

 
  return (
    <div className="App">
      <Header />
      <div className="text-container">
        <div className="centered-text">
          <div className="animated-text">{text}</div>
        </div>
        <div className="additional-text">{additionalText}</div>
      </div>
    </div>
  );
}


export default Home;