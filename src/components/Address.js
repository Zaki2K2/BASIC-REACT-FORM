import React, { useState } from 'react';

export default function Address({ updateFormData }) {
  const [myAddress, setMyAddress] = useState('');

  const handleOnChange = (event) => {
    const inputValue = event.target.value;
    setMyAddress(inputValue);
    updateFormData('address', inputValue); // Update the address in the parent component's state
  };

  return (
    <div>
      <strong>ENTER YOUR ADDRESS: </strong>
      <input
        type="text"
        placeholder="House # 123, Street # ab12, Area"
        value={myAddress}
        onChange={handleOnChange}
        
      />
    </div>
  );
}
