import styles from './Signup.module.css'

import React,{useState} from 'react'
import { useSignup } from './../../hooks/useSignup';

const Signup = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const {signup, isPending, error} = useSignup();
  const registerHandler = async (e) => {
    e.preventDefault();
    signup(username, password)
  }
  return (
    <form onSubmit={registerHandler} className={styles['signup-form']}>
     <h2>Sign up</h2>
      <label>
      <p>Username</p>
      <input type="username" onChange={(e) => setUsername(e.target.value)}/>
      </label>
      <label>
        <p>Password:</p>
        <input type="password" onChange={(e) => setPassword(e.target.value)}/>
      </label>
       <label>
        <p>Display Name:</p>
        <input type="text" onChange={(e) => setDisplayName(e.target.value)}/>
      </label>
      {!isPending && <button className="btn">Sign up</button>}
      {isPending && <button className="btn" disabled> Loading </button>}
      {error && <p>{error}</p>}
    </form>
  )
}

export default Signup