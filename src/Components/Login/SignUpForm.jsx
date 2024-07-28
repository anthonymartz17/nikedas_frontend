import "./Auth.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

export default function SignUp() {
	const { signUp } = useAuth();
	const [signUpForm, setSignUpForm] = useState({
		email: "",
		password: "",
		confirm_password: "",
	});

	function handleChange(e) {
		const value = e.target.value;
		setSignUpForm({ ...signUpForm, [e.target.id]: e.target.value });
	}

	async function handleSubmit(e) {
		e.preventDefault();
		// if (newUser.password !== newUser.confirmPassword) {
		// 	setArePasswordsDiff(true);
		// 	return;
		// }
		try {
			setIsLoading(true);
			const response = await signUp(signUpForm.email, newUser.password);
			createUser({ email: signUpForm.email, isActive: false });
			setLoggedinUserData(signUpForm.email);

			// setArePasswordsDiff(false);
			setNewUser({});
			navigate("/account");
		} catch (error) {
			// setAlertProps({ msg: error.message, isSuccess: false });
			// toggleAlert();
		} finally {
			console.log("did it work");
			// setIsLoading(false);
		}
	}
	return (
		<section className="auth global_card">
			<h3 className="poppins-semibold">Create an account!</h3>

			<form className="auth_form" onSubmit={handleSubmit}>
				<label></label>
				<input
					className="global_input_field"
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
					className="global_input_field"
				/>

				<label></label>
				<input
					type="password"
					placeholder="Confirm Password*"
					value={signUpForm.confirm_password}
					onChange={handleChange}
					id="confirm_password"
					required
					className="global_input_field"
				/>

				<Link to="/auth/forgot" className="forgot_password">
					Forgot Password?
				</Link>

				<button className="btn btn_bg_dark " type="submit">
					Sign up
				</button>
				<Link to="/auth" className="text-orange-500 underline">
					Login instead
				</Link>
			</form>
		</section>
	);
}
