import React, { useState } from 'react';

 function Login({ onLogin }) {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate login request
    if (username === 'admin' && password === 'admin123') {
      onLogin();
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    
<form onSubmit={handleSubmit}>
  <div class="mb-3">
    <label for="exampleInputUsername1" class="form-label">UserName</label>
    <input type="text" class="form-control" id="exampleInputUsername1" aria-describedby="userNameHelp" value={username} onChange={(e) => setUsername(e.target.value)}/>
    <div id="userNamelHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)}/>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  );
}

export default Login;