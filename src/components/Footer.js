import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer>
      <div className="flex-container">
          <div className="contact-container">
            <a href="mailto:alluri7700@gmail.com" className="contact-link">
            <img width="40" height="40" src="https://img.icons8.com/bubbles/50/new-post.png" alt="new-post"/>
              <h2>Email</h2>
            </a>
            <a href="https://www.google.com/maps/search/jn+colony+markapur+location+as+a+link/@15.745682,79.2677969,16z/data=!3m1!4b1?entry=ttu" className="contact-link">
              <img width="40" height="40" src="https://img.icons8.com/bubbles/50/marker.png" alt="marker"/>
              <h2>JN.colony, Markapur, 523316, Prakasam district, Andhra Pradesh, India</h2>
            </a>
            <a href="tel:9949****78" className="contact-link">
              <img width="40" height="40" src="https://img.icons8.com/bubbles/50/phone--v1.png" alt="phone--v1"/>
              <h2>Phone</h2>
            </a>
          </div>

          <div className="quote-container">
            <div className="quote-text">
              <p>
                Hi, I am Alluri, a student and a web developer.
              </p>
            </div>
          </div>
          <div className="description">
            <p>
              What sets me apart as a full-stack web developer is my passion for continuous learning and embracing new technologies. This drive fuels my ability to deliver innovative solutions, making me a standout in the field. Trust me to bring expertise and forward-thinking to your web development projects.
            </p>
          </div>
          
      </div>
  
    </footer>
    </div>
  )
}

export default Footer