// Loader.js
import React, { useState, useEffect } from 'react';
import './Loader.css';

const Loader = () => {
  const [step, setStep] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((step) => (step === 5 ? 1 : step + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
     
    <div className='loader-container'>
      <div className={`loader step-${step}`}>
        <div className='block E'>E</div>
        <div className='block M'>M</div>
        <div className='block B'>B</div>
        <div className='block U'>U</div>
        <div className='block D'>D</div>
      </div>
    </div>
    
  );
};

export default Loader;
