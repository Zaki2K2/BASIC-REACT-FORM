import React, { useState } from 'react';

export default function Contact({ updateFormData }) {
  const [myContact, setMyContact] = useState('');
  const [showWarning, setShowWarning] = useState(false);

  const handleOnChange = (event) => {
    const inputValue = event.target.value;
    const filteredValue = inputValue.replace(/\D/g, '');
    setMyContact(filteredValue);
    setShowWarning(inputValue.length > 0 && filteredValue.length !== 10);
    updateFormData('contact', filteredValue);
  };

  return (
    <div>
      <strong>ENTER YOUR Ph# : </strong>
      <input
        type="tel"
        placeholder="Enter Your Contact Here: "
        value={myContact}
        onChange={handleOnChange}
      />
      {showWarning && (
        <p style={{ color: 'red' }}>Please enter a valid 10-digit Contact Number.</p>
      )}
    </div>
  );
}
