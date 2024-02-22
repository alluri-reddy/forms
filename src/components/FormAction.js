// FormAction.js
import {React, useState } from 'react';
import { useNavigate} from 'react-router-dom';

function FormAction({ onSubmit }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    address: '',
    email: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    age: '',
    address: '',
    email: '',
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  if (validateForm()) {
    const id = Date.now(); 
    const formDataWithId = { ...formData, id }; 
    onSubmit(formDataWithId); 
    setFormData({
      name: '',
      age: '',
      address: '',
      email: '',
    });
    navigate("/");
  }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: '',
      age: '',
      address: '',
      email: '',
    };

    if (!formData.name || formData.name.length < 3) {
      newErrors.name = 'Name must be at least 3 characters long';
      valid = false;
    }

   
    if (!formData.age || parseInt(formData.age) <= 0) {
      newErrors.age = 'Age must be a positive number';
      valid = false;
    }

   
    if (!formData.address || formData.address.length < 5) {
      newErrors.address = 'Address must be at least 5 characters long';
      valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailPattern.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>FormAction Component</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
            {errors.name && <div className="error">{errors.name}</div>}
          </label>
          <label>
            Age:
            <input type="number" name="age" value={formData.age} onChange={handleChange} />
            {errors.age && <div className="error">{errors.age}</div>}
          </label>
          <label>
            Address:
            <input type="text" name="address" value={formData.address} onChange={handleChange} />
            {errors.address && <div className="error">{errors.address}</div>}
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <div className="error">{errors.email}</div>}
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default FormAction;
