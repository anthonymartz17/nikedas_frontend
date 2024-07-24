import './Auth.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function LoginForm() {
  const [ loginForm, setLoginForm ] = useState({
    email: "",
    password: ""
  })
  
  function handleChange(e) {
    const value = e.target.value;
    setLoginForm({...loginForm, [e.target.id]:e.target.value});
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(loginForm)
  }

  return (
    <section className="auth">

      <h3 className="auth-heading">Welcome back!</h3>
      
      <form className="auth_form" onSubmit={handleSubmit}>
        
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
        
        <a href="#" className="forgot_password">Forgot Password?</a>
        
        <button type="submit">Sign in</button>
      </form>

      <a href="#" className="create_account">Create an account</a>

    </section>
  )
}
