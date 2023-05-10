import React, { useState } from 'react'
import { auth } from '../utils/firebase'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const onLogin = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            setError('Пользователь авторизован')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
            setError(errorMessage)
        });
       
    }
  return (
    <div>
      <h2>Login</h2>
      <form >
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <button onClick={e => onLogin(e)} type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  )
}

export default Login