import React from 'react';

const NavBar = ({children}) => {

  return (
    <div>

      <header>
        <ul className="nav">
          <li className="link"><strong className="logo">iRETAIN</strong>.IO</li>
          <li className="link">How It Works</li>
          <li className="link">Flashcards</li>
          <li className="link">Educators</li>
          <li className="link">more...</li>
        </ul>
        <ul className="nav">
          <li className="link">Login</li>
          <li className="link">Sign Up</li>
          <li className="link">Guest</li>
        </ul>
      </header>
      {children}
    </div>
  );
};


export default NavBar;
