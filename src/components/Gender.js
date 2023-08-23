import React, { useState } from 'react';

export default function Gender({ updateFormData }) {
  const [gender, setGender] = useState('');

  const handleGenderChange = (event) => {
    const selectedGender = event.target.value;
    setGender(selectedGender);
    updateFormData('gender', selectedGender);
  };

  return (
    <div>
      <strong>SELECT YOUR GENDER: </strong>
      <select name="gender" id="gender" value={gender} onChange={handleGenderChange} required>
        <option value="">Select</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
    </div>
  );
}
