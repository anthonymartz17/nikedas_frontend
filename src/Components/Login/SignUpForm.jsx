import './Auth.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  const [ SignUpForm, setSignUpForm ] = useState({
    email: "",
    password: "",
    confirm_password: ""
  })
  
  function handleChange(e) {
    const value = e.target.value
    setSignUpForm({...loginForm, [e.target.id]:e.target.value})
  }

  return (
    <section className="auth">

      <h3 className="auth-heading">Welcome back!</h3>
      
      <form className="auth_form">
        
        <label></label>
        <input
          type="text"
          placeholder="Email*"
          value={loginForm.email}
          onChange={handleChange}
          id="email"
          required
        />
        
        <label></label>
        <input
          type="password"
          placeholder="Password*"
          value={loginForm.password}
          onChange={handleChange}
          id="password"
          required
        />

        <label></label>
        <input
          type="password"
          placeholder="Password*"
          value={loginForm.confirm_password}
          onChange={handleChange}
          id="confirm_password"
          required
        />
        
        <a href="#" className="forgot_password">Forgot Password?</a>
        
        <button type="submit">Sign up</button>
      </form>

      <a href="#" className="login">Login instead</a>

    </section>
  )
}
