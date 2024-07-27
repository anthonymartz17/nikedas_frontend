import './Auth.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  const [ signUpForm, setSignUpForm ] = useState({
    email: "",
    password: "",
    confirm_password: ""
  })
  
  function handleChange(e) {
    const value = e.target.value
    setSignUpForm({...signUpForm, [e.target.id]:e.target.value})
  }

  function handleSubmit (e) {
    e.preventDefault();

  }

  return (
    <section className="auth card">

      <h3 className="auth-heading">Create an account!</h3>
      
      <form className="auth_form" onSubmit={handleSubmit}>
        
        <label></label>
        <input
          className='global_input_field'
          type="text"
          placeholder="Email*"
          value={signUpForm.email}
          onChange={handleChange}
          id="email"
          required
        />
        
        <label></label>
        <input
          type="password"
          placeholder="Password*"
          value={signUpForm.password}
          onChange={handleChange}
          id="password"
          required
        />

        <label></label>
        <input
          type="password"
          placeholder="Password*"
          value={signUpForm.confirm_password}
          onChange={handleChange}
          id="confirm_password"
          required
        />
        
        <Link to="/auth/forgot" className="forgot_password">Forgot Password?</Link>
        
        <button type="submit">Sign up</button>
      </form>

      <Link to="/auth" className="login">Login instead</Link>

    </section>
  )
}
