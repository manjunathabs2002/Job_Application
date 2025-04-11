import React, { useState, useRef } from 'react';
import axios from 'axios';

const ApplicationForm = () => {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    address: '',
    aadhaar: '',
    pan: '',
    resume: null,
  });

  const handleChange = (e) => {
    if (e.target.name === 'resume') {
      setFormData({ ...formData, resume: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    for (let key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const res = await axios.post(
        'http://localhost:5000/api/users/apply',
        data,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
          withCredentials: true,
        }
      );

      alert(res.data.message);
      formRef.current.reset();
      setFormData({
        name: '',
        email: '',
        phone: '',
        dob: '',
        address: '',
        aadhaar: '',
        pan: '',
        resume: null,
      });
    } catch (err) {
      console.error(err);
      alert('Something went wrong!');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      ref={formRef}
      encType="multipart/form-data"
      style={{ padding: '20px' }}
    >
      <h2>Job Application Form</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
        required
      />
      <br />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        required
      />
      <br />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        onChange={handleChange}
        required
      />
      <br />
      <input type="date" name="dob" onChange={handleChange} required />
      <br />
      <input
        type="text"
        name="address"
        placeholder="Address"
        onChange={handleChange}
        required
      />
      <br />
      <input
        type="text"
        name="aadhaarNumber"
        placeholder="Aadhaar"
        onChange={handleChange}
        required
      />
      <br />
      <input
        type="text"
        name="panNumber"
        placeholder="PAN"
        onChange={handleChange}
        required
      />
      <br />
      <input
        type="file"
        name="resume"
        accept=".pdf,.doc,.docx"
        onChange={handleChange}
        required
      />
      <br />
      <br />
      <button type="submit">Submit Application</button>
    </form>
  );
};

export default ApplicationForm;
