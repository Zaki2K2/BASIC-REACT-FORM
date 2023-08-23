import React, { useState } from 'react';

export default function LikeMovies({ updateFormData }) {
  const [value, setValue] = useState('');

  const handleOnChange = (event) => {
    const selectedValue = event.target.value;
    setValue(selectedValue);
    updateFormData('likeMovies', selectedValue);
  };

  return (
    <div>
      <strong>Like Movies : </strong>
      <input type="radio" value="Yes" name="likeDislike" onChange={handleOnChange} /> Yes
      <input type="radio" value="No" name="likeDislike" onChange={handleOnChange} /> No
    </div>
  );
}
