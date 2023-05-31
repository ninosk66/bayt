import React from 'react';

const LoginPage = () => {
  const handleLogin = () => {
    // Add logic to handle login
  };

  const handleCancel = () => {
    // Add logic to handle cancel
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />
      </div>
      <div className="button-group">
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default LoginPage;
