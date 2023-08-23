import React, { useState, useEffect } from 'react';
import './App.css';
import Name from './components/Name';
import Contact from './components/Contact';
import Address from './components/Address';
import Gender from './components/Gender';
import LikeMovies from './components/LikeMovies';

function App() {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    address: '',
    gender: '',
    likeMovies: '',
  });

  // State to store submitted data
  const [submittedData, setSubmittedData] = useState([]);

  // State to track if the form has been submitted
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Load submitted data from local storage on component mount
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('submittedData')) || [];
    setSubmittedData(storedData);
  }, []);

  // Update form data when input fields change
  const updateFormData = (field, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    // Clear the form data
      setFormData({
        name: '',
        contact: '',
        address: '',
        gender: '',
        likeMovies: '',
      });
    event.preventDefault();
    setIsSubmitted(true);
    const newSubmittedData = [...submittedData, formData];
    setSubmittedData(newSubmittedData);


    // Update local storage with new submitted data
    localStorage.setItem('submittedData', JSON.stringify(newSubmittedData));
  };

  // Handle deletion of submitted data
  const handleDelete = (index) => {
    const updatedSubmittedData = submittedData.filter((_, i) => i !== index);
    setSubmittedData(updatedSubmittedData);
    localStorage.setItem('submittedData', JSON.stringify(updatedSubmittedData));
  };

  return (
    <div className="App">

      

      {/* Form for user input */}
      <form onSubmit={handleSubmit}>
        {/* Components for different form fields */}
        <Name updateFormData={updateFormData} />
        <Contact updateFormData={updateFormData} />
        <Address updateFormData={updateFormData} />
        <Gender updateFormData={updateFormData} />
        <LikeMovies updateFormData={updateFormData} />
        <div className="myDiv">
          <div>
            {/* Submit button */}
            <button type="submit" id="Submit" formAction="post"  >
              Submit
            </button>
          </div>
        </div>
      </form>

      {/* Display submitted data if form has been submitted */}
      {isSubmitted && (
        <div className="table-container">
          <h2>Submitted Data</h2>
          {/* Table to display submitted data */}
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Contact</th>
                <th>Address</th>
                <th>Gender</th>
                <th>Like Movies</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {submittedData.map((data, index) => (
                <tr key={index}>
                  <td>{data.name}</td>
                  <td>{data.contact}</td>
                  <td>{data.address}</td>
                  <td>{data.gender}</td>
                  <td>{data.likeMovies}</td>
                  <td>
                    {/* Delete button for each submitted data row */}
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </td>
                  
                </tr>
              ))}
              
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;
