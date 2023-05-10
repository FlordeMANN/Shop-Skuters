import React, { useState } from 'react';
import { auth } from '../../utils/firebase';


const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email, password);
    setError('Пользователь зарегистрирован')
    .catch((error) => {
      setError(error.message);
    });
    
  };

  return (
    <div>
      <h2>Register</h2>
      <form >
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button onClick={e => handleRegister(e)} type="submit">Register</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Register;
