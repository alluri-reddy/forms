import React, { useState } from 'react';
import dele from '../images/delete.png';



function Home({ formData, searchedData, onDelete}) {
  const [showEmptyMessage] = useState(true);
  


  const handleDelete = (id) => {
    onDelete(id);
  };

  const userSearched = () => {
    if (searchedData) {
      const filteredItems = formData.filter((item) => {
        return item.name.toLowerCase().includes(searchedData.toLowerCase()) ||
          item.age.toString().toLowerCase().includes(searchedData.toLowerCase()) ||
          item.email.toLowerCase().includes(searchedData.toLowerCase()) ||
          item.address.toLowerCase().includes(searchedData.toLowerCase());
      });
      return filteredItems.length > 0 ? filteredItems : formData;
    }
    return formData;
  };

  const cards = userSearched().map(item => (
    <div className='card'>
      <h3>{item.name}</h3>
      <p>Age: {item.age}</p>
      <p>Email: {item.email}</p>
      <p>Address: {item.address}</p>
      
      
      <img src={dele} width="40" height="40" alt="img" onClick={() => handleDelete(item.id)} />
    </div>
  ));

  return (
    <div className="container">
      <div className="home-container">
        {showEmptyMessage && formData.length === 0 && (
          <div className="empty-message">
            <h1>Your details are empty. Please go to the form page and give details.</h1>
          </div>
        )}
        <div className="cards-container">
          {cards}
        </div>
      </div>
    </div>
  );
}

export default Home;
