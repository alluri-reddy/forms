import './index.css';

import React, { useState } from 'react';
import {  Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import FormAction from './components/FormAction';
import Footer from './components/Footer';

function App() {
  const [formData, setFormData] = useState([]); 
  const [searchedData, setSearchedData] = useState("");

  const handleDelete = (id) => {
    setFormData(formData.filter((item) => item.id !== id));
    console.log(formData);
  };

  const handleFormDataSubmit = (newFormData) => {
    setFormData([...formData, newFormData]); 
  };

  const handleSearch = (searchText) => {
    setSearchedData(searchText);
  };


  


  return (
    
      <div>
        <Navbar onSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<Home formData={formData} onDelete={handleDelete}  searchedData={searchedData} />} />
          <Route path="/form" element={<FormAction onSubmit={handleFormDataSubmit} />} />
        </Routes>
        <Footer />
      </div>
    
  );
}

export default App;
