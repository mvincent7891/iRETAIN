import React from 'react';

const SessionForm = () => {
  $(".pageWrapper").css("background-image", "");
  return (
    <div>
      <form className="auth-form">
        <input type="text" placeholder="Username"/>
        <input type="password" placeholder="Password"/>
        <button>Login</button>
      </form>
    </div>
  );

};

export default SessionForm;
