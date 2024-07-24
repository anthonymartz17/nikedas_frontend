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

  console.log(loginForm)

  return (
    <section className="auth">

      <h3 className="login-heading">Recover password</h3>

      <p>If your email exists we will send you an email to create a new password</p>
      
      <form className="login_form">
        
        <label></label>
        <input
          type="text"
          placeholder="Email*"
          value={loginForm.email}
          onChange={handleChange}
          id="email"
          required
        />      
        
        <button type="submit">Recover password</button>
      </form>

      <a href="#" className="login">Login instead</a>
      <a href="#" className="create_account">Create an account instead</a>

    </section>
  )
}
