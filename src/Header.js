import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isArabic, setIsArabic] = useState(false);

  const toggleLanguage = () => {
    setIsArabic(!isArabic);
    // Add logic to switch the language of the entire page to Arabic
    // You can use a language library or handle it based on your specific implementation
  };

  return (
    
      <header>
        <div className='logo'>BAYT</div>
        <nav>
          {/* Navigation menu */}
          <ul>
            <li>
              <Link to='/' className="link">Home</Link>
            </li>
            <li>
              <Link to='/about' className="link">About</Link>
            </li>
          </ul>
        </nav>
        <button className='language-button' onClick={toggleLanguage}>
          {isArabic ? "English" : "العربية"}
        </button>
        <Link to='/login' className='login-button'>
          Log In
        </Link>
      </header>
    
  );
};

export default Header;
