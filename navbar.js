import React, { useState } from 'react';
import './navbar.css';

const Navbar2 = (props) => {
  const [activeItem, setActiveItem] = useState("");

  const handleItemClick = (itemName) => {
    setActiveItem(itemName); 
  };

  let disableText = "Disable"; 

  if (props.pageType === "actors") {
    disableText = "Movies";  
  } else if (props.pageType === "singers") {
    disableText = "Songs";   
  } else if (props.pageType === "athletes") {
    disableText = "Matches"; 
  }

  return (
    <nav className="navbar2 navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <a className="navbar-logo">
          <img src='\images\logo.png' alt="Logo" style={{ width: '170px', height: '100px' }} /> 
        </a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li 
              className={`nav-item ${activeItem === "overview" ? "active" : ""}`}
              onClick={() => handleItemClick("overview")}
            >
              <a className="nav-link" href="#overview">Overview</a>
            </li>
            <li 
              className={`nav-item ${activeItem === "bio" ? "active" : ""}`}
              onClick={() => handleItemClick("bio")}
            >
              <a className="nav-link" href="#bio">Bio</a>
            </li>
            <li 
              className={`nav-item ${activeItem === "news" ? "active" : ""}`}
              onClick={() => handleItemClick("news")}
            >
              <a className="nav-link" href="#news">News</a>
            </li>
            <li 
              className={`nav-item ${activeItem === "disable" ? "active" : ""}`}
              onClick={() => handleItemClick("disable")}
            >
              <a className="nav-link" href="#">{disableText}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
