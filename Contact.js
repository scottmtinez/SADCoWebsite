import React, { useState } from 'react';
import './ContactUs.css';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });

  const [notification, setNotification] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      setNotification(result.message);

      setTimeout(() => {
        setNotification('');
      }, 3000);
    } catch (error) {
      setNotification('Failed to send the message. Please try again later.');

      setTimeout(() => {
        setNotification('');
      }, 3000);
    }
  };

  return (
    <div className='contactUs-container'>
      <h1 className='contactUs-title'>CONTACT US</h1>
      {notification && <div className='notification-popup'>{notification}</div>}
      <form className='contactUs-form' onSubmit={handleSubmit}>
        <div className='contactUs-form-group'>
          <input 
            type='text' 
            className='name' 
            id='name' 
            placeholder='Name' 
            name='name' 
            value={formData.name} 
            onChange={handleChange}
            required />
        </div>
        <div className='contactUs-form-group'>
          <input 
            type='text' 
            className='company' 
            id='company' 
            placeholder='Company [Optional]' 
            name='company' 
            value={formData.company} 
            onChange={handleChange} />
        </div>
        <div className='contactUs-form-group'>
          <input 
            type='email' 
            className='email' 
            id='email' 
            placeholder='Email' 
            name='email' 
            value={formData.email} 
            onChange={handleChange}
            required />
        </div>
        <div className='contactUs-form-group'>
          <textarea 
            className='message' 
            id='message' 
            placeholder='Message' 
            name='message' 
            value={formData.message} 
            onChange={handleChange}
            required />
        </div>
        <input type='submit' className='submit-message' value='Send Message' />
      </form>
    </div>
  );
}

export default ContactUs;
