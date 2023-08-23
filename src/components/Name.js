import React, { useState } from 'react';

export default function Name({ updateFormData }) {
  const [myName, setMyName] = useState('');
  const [showWarning, setShowWarning] = useState(false);

  const handleOnChange = (event) => {
    const inputValue = event.target.value;
    const filteredValue = inputValue.replace(/[^A-Za-z\s]/g, '');
    setMyName(filteredValue);
    setShowWarning(/\d/.test(inputValue));
    updateFormData('name', filteredValue);
  };

  return (
    <div>
      <strong>ENTER YOUR NAME : </strong>
      <input
        type="text"
        placeholder="Enter Your Name Here: "
        value={myName}
        onChange={handleOnChange}
      />
      {showWarning && (
        <p style={{ color: 'red' }}>Please enter a valid name (no numbers allowed).</p>
      )}
    </div>
  );
}
