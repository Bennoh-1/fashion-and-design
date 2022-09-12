import React from 'react';
import { useState } from 'react';
//import { Link } from 'react-router-dom';
import './Form.css';
const AddSeller = () => {
  
  const [name, setName] = useState('');
  const [speciality, setSpeciality] = useState('');
  

  
  function handleSubmit(e) {
    e.preventDefault();
    fetch('http://localhost:9292/sellers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        speciality: speciality,

      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setName('');
        setSpeciality('');
        
      })
      .catch((err) => err.message);

    document.querySelector('form').reset();
  }
  return (
    <div class='container'>
      <form onSubmit={handleSubmit}>
        <h2 class='title'>Add a seller below</h2>
        <div class='user-details'>
          <div class='input-box'>
            <span class='details'>Name</span>
            <input
              type='text'
              placeholder='Enter Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div class='input-box'>
            <span class='details'>Speciality</span>
            <input
              type='text'
              placeholder='enter speciality'
              value={speciality}
              onChange={(e) => setSpeciality(e.target.value)}
              required
            />
          </div>
          
          <button className='button'>Add Seller</button>
        </div>
      </form>
    </div>
  );
};
export default AddSeller;