import './Login.css'
import { Link } from 'react'

export default function Login() {
  return (
    <section className="login">
      <h3 className="login-heading">Welcome back!</h3>
      <form className="login_form">
        <label></label>
        <input
          type="text"
          placeholder="Email*"
          required
        />
        <label></label>
        <input
          type="password"
          placeholder="Password*"
          required
        />
        <a href="#" className="forgot_password">Forgot Password?</a>
        <button type="submit">Sign in</button>
      </form>
      <a href="#" className="create_account">Create an account</a>
    </section>
  )
}
