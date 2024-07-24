import './Auth.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ForgotForm() {
  const [ forgotForm, setForgotForm ] = useState({
    email: "",
    password: "",
    confirm_password: ""
  })
  
  function handleChange(e) {
    const value = e.target.value;
    setForgotForm({...forgotForm, [e.target.id]:e.target.value});
  }

  function handleSubmit (e) {
    e.preventDefault();
    console.log(forgotForm);
  }

  return (
    <section className="auth">

      <h3 className="login-heading">Recover password</h3>

      <p>If your email exists we will send you an email to create a new password</p>
      
      <form className="login_form" onSubmit={handleSubmit}>
        
        <label></label>
        <input
          type="text"
          placeholder="Email*"
          value={forgotForm.email}
          onChange={handleChange}
          id="email"
          required
        />      
        
        <button type="submit">Recover password</button>
      </form>

      <Link to="/auth" className="login">Login instead</Link>
      <Link to="/auth/signup" className="create_account">Create an account instead
      </Link>
      

    </section>
  )
}
