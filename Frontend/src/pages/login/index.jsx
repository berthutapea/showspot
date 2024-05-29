import React from 'react';

const Login = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <form className='text-accent'>
        <div>
          <label>Username:</label>
          <input type="text" name="username" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
