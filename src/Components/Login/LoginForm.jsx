import "./Auth.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

export default function LoginForm() {
	const navigate = useNavigate();
	const { login } = useAuth();
	const [loginForm, setLoginForm] = useState({
		email: "",
		password: "",
	});

	function handleChange(e) {
		const value = e.target.value;
		setLoginForm({ ...loginForm, [e.target.id]: e.target.value });
	}

	async function handleSubmit(e) {
		e.preventDefault();
		// setIsLoading(true);

		try {
			const response = await login(loginForm.email, loginForm.password);
			// setLoggedinUserData(email);
			setLoginForm({});
			navigate("/account");
		} catch (error) {
			console.log(error);
			// setAlertProps({ msg: error.message, isSuccess: false });
			// toggleAlert();
		} finally {
			// setIsLoading(false);
		}
	}

	return (
		<section className="auth global_card">
			<h3 className="poppins-semibold">Welcome back!</h3>

			<form className="auth_form" onSubmit={handleSubmit}>
				<label></label>
				<input
					type="text"
					placeholder="Email*"
					value={loginForm.email}
					onChange={handleChange}
					id="email"
					required
					className="global_input_field"
				/>

				<label></label>
				<input
					type="password"
					placeholder="Password*"
					value={loginForm.password}
					onChange={handleChange}
					id="password"
					required
					className="global_input_field"
				/>

				<Link to="/auth/forgot" className="forgot_password">
					Forgot Password?
				</Link>

				<button className="btn btn_bg_dark" type="submit">
					Sign in
				</button>
			</form>

			<Link to="signup" className="create_account text-orange-500 underline">
				Create an account
			</Link>
		</section>
	);
}
